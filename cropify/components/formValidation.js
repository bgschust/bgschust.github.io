function validateFormInputs(formSelectee, submitSelectee) {
  let form = document.querySelector(formSelectee);
  let formValidation = {check: '', status: ''};
  form.childNodes.forEach(function(child){
    if(child.tagName == 'INPUT') {
      formValidation = renderValidationBlock(child, null);
    } else if (child.tagName == 'DIV') {
      let groupDiv = child;
      let inputNodes = child.querySelectorAll('input');
      if (inputNodes.length) {
        formValidation = renderValidationBlock(inputNodes, groupDiv);
      }
    }
  });
  let submitButton = document.querySelector(submitSelectee);
  if(formValidation.check == '') {
    formValidation.check == 'pass';
    submitButton.disabled = false;
  } else if(formValidation.check != 'pass') {
    submitButton.disabled = true;
  }

  function renderValidationBlock(inputNodes, groupDiv) {
    if(!Array.isArray(inputNodes) && !NodeList.prototype.isPrototypeOf(inputNodes)) {
      inputNodes = [inputNodes];
    }
    let validationBlockToggle = 'hide';
    inputNodes.forEach(function(inputNode){
      let validationBlockId = '';
      let validationBlockName = '';
      if(!groupDiv) {
        validationBlockId = inputNode.id;
        validationBlockName = inputNode.getAttribute('name');
      } else {
        validationBlockId = groupDiv.id;
        validationBlockName = groupDiv.getAttribute('name');
      }
      let currentValidationBlock = form.querySelector('p.validationBlock[for='+validationBlockId+']');
      let validation = validateInput(inputNode);
      if (validation.check == 'fail') {
        formValidation.check = 'fail';
      }
      if( inputNode.getAttribute('type') != 'checkbox' 
          && inputNode.value
          && validation.check == 'fail'
      ) {
        validationBlockToggle = 'show';
        if(!currentValidationBlock) {
          insertValidationBlock(validationBlockId, inputNode, validationBlockName);
        }
        modifyValidationBlock(validationBlockId, validation);
      } else if(
          (!inputNode.value && validationBlockToggle == 'hide') 
          || (validation.check == 'pass' && validationBlockToggle == 'hide')
        ) {
        if (currentValidationBlock) {
          currentValidationBlock.remove();
        }
      }
    });

    function insertValidationBlock(validationBlockId, inputNode, validationBlockName) {
      let validationBlock = document.createElement('p');
      validationBlock.classList.add('validationBlock');
      validationBlock.setAttribute('for', validationBlockId);
      let validationBlock_statusSpan = document.createElement('span');
      validationBlock.innerHTML = validationBlockName+": <br />";
      validationBlock.appendChild(validationBlock_statusSpan);

      if(!groupDiv) {
        if (['text', 'email'].indexOf(inputNode.getAttribute('type')) >= 0) {
          inputNode.insertAdjacentElement('afterend', validationBlock);
        } else if (['checkbox'].indexOf(inputNode.getAttribute('type')) >= 0) {
          inputNode.nextElementSibling.insertAdjacentElement('afterend', validationBlock);
        }
      } else {
        groupDiv.insertAdjacentElement('beforeend', validationBlock);
      }
    }

    function modifyValidationBlock(validationBlockId, validation) {
      let validationBlock = form.querySelector('p.validationBlock[for='+validationBlockId+']');
      let validationBlock_statusSpan = validationBlock.querySelector('span');
      validationBlock_statusSpan.innerHTML = validation.status;
    }

    return formValidation;
  }
}

function validateInput (inputNode) {
  let validation = {status: '', check: ''};
  if (!inputNode.checkValidity()) {
    // check if required and min, max lengths
    validation.check = 'fail';
    validation.status = '&#8226; '+inputNode.getAttribute('name')+' is required and/or has character length restriction(s).';
  } else {
    let inputType = inputNode.getAttribute('type');
    if (['text', 'textarea', 'email', 'password', 'tel', 'url'].indexOf(inputType) >= 0) {
      if(inputNode.classList.contains('zipCode')) {
        // validate to U.S. zip code standards
        let zip5Length = (inputNode.value.length >= 5) ? 5 : inputNode.value.length;
        let zip5 = inputNode.value.slice(0, zip5Length);
        if (!zip5.match(/[0-9]/g) || zip5.match(/[0-9]/g).length != 5) {
          validation.check = 'fail';
          validation.status += '&#8226; '+'U.S. zip codes only, please.<br />'
        }
        // handle extended zip codes
        if (inputNode.value.length > 5) {
          if (inputNode.value.charAt(5) != '-') {
            validation.check = 'fail';
            validation.status += '&#8226; '+'If you are entering an extended zip code, please include a hyphen (dash).<br />'
          } else if (inputNode.value.length != 10) {
            validation.check = 'fail';
            validation.status += '&#8226; '+'U.S. extended zip codes must be 10 characters long. You can also use a standard zip code.<br />'
          } else {
            let plus4 = inputNode.value.slice(6, inputNode.value.length);
            if (!plus4.match(/[0-9]/g) || plus4.match(/[0-9]/g).length != 4) {
              validation.check = 'fail';
              validation.status += '&#8226; '+'U.S. zip code plus four (zip+4) must have only integers after the dash.<br />'  
            }
          }
        }
      }
      if(inputNode.classList.contains('postalCode')) {
        // validate for postal codes that may not be in the U.S.
      }
      if(inputType == 'email') {
        let host = inputNode.value.slice(inputNode.value.indexOf('@')+1);
        if (host.indexOf('.') < 0) {
          validation.check = 'fail';
          validation.status += '&#8226; '+'Not an acceptable email pattern: missing top-level domain.<br />';
        }
      }
    } else if (false) {

    } else {
      validation.check = 'pass';
    }
  }
  if(validation.check != 'fail') { validation.check = 'pass'; }
  return validation;
}