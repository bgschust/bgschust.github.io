function validateFormInputs(formSelectee) {
  let form = document.querySelector(formSelectee);
  form.childNodes.forEach(function(child){
    if(child.tagName == 'INPUT') {
      renderValidationBlock(child);
    } else if (child.tagName == 'DIV') {
      let groupDiv = child;
      let inputNodes = child.querySelectorAll('input');
      if (inputNodes.length) {
        renderValidationBlock(inputNodes, groupDiv);
      }
    }
  });

  function renderValidationBlock(inputNodes, groupDiv) {
    if(!Array.isArray(inputNodes) && !NodeList.prototype.isPrototypeOf(inputNodes)) {
      inputNodes = [inputNodes];
    }
    inputNodes.forEach(function(inputNode){
      let validationBlockName = '';
      if(!groupDiv) {
        validationBlockName = inputNode.getAttribute('name');
      } else {
        validationBlockName = groupDiv.getAttribute('name');
      }
      let currentValidationBlock = form.querySelector('p.validationBlock[for='+validationBlockName+']');
      if( inputNode.getAttribute('type') != 'checkbox' 
          && inputNode.value
      ) {
        if(!currentValidationBlock) {
          insertValidationBlock(validationBlockName);
        }
      } else if(!inputNode.value) {
        if (currentValidationBlock) {
          currentValidationBlock.remove();
        }
      }
    });

    function insertValidationBlock(validationBlockName) {
      let validationBlock = document.createElement('p');
      validationBlock.classList.add('validationBlock');
      validationBlock.setAttribute('for', validationBlockName);
      validationBlock.innerHTML = validationBlockName;
      if(!groupDiv) {
        inputNodes.forEach(function(inputNode){
          if (['text', 'email'].indexOf(inputNode.getAttribute('type')) >= 0) {
            inputNode.insertAdjacentElement('afterend', validationBlock);
          } else if (['checkbox'].indexOf(inputNode.getAttribute('type')) >= 0) {
            inputNode.nextElementSibling.insertAdjacentElement('afterend', validationBlock);
          }
        });
      } else {
        groupDiv.insertAdjacentElement('beforeend', validationBlock);
      }
    }
    
  }
}

function validateInputs(inputGroup) {

  let input = form.querySelector(querySelectee);
  let inputType = input.getAttribute('type');

  let status = labelText + ': <br />';
  let validationCheck = '';

  if (input.required && !input.value) {
    // if required field is empty
    status = 'This field is required.';
    validationCheck = 'Fail';
  } else {
    if(['text', 'textarea', 'email', 'password', 'tel', 'url'].indexOf(inputType) >= 0) {
      // length check
      let minlength = input.getAttribute('minlength');
      let maxlength = input.getAttribute('maxlength');
      if(input.value.length < minlength || input.value.length >= maxlength) {
        validationCheck = 'Fail';
        status += 'Field should be ' + minlength + '-' + maxlength + ' characters long.' + '<br />';
      } else {
        status += 'Length is acceptable (' + minlength + '-' + maxlength + ' characters).' + '<br />';
      }
      // acceptable character check
      if(inputType == 'email') {
        if(input.checkValidity() == false) {
          validationCheck = 'Fail';
          status += 'Does not match standard email pattern.<br />';
        } else { 
          // extra validation
          let host = input.value.slice(input.value.indexOf('@')+1);
          if (host.indexOf('.') < 0) {
            validationCheck = 'Fail';
            status += 'Does not match acceptable email pattern: missing top-level domain.<br />';
          }
        }
      } else if (inputType == 'password') {

      }
    } else if (inputType == 'number') {

    } else if (inputType == 'textarea') {

    } else if (inputType == 'password') {

    } else if (inputType == 'email') {

    } else if (inputType == 'tel') {

    }
  }
  if (validationCheck == '') {
    validationCheck = 'Pass';
  }

  let validationStatus = {status: status, validationCheck: validationCheck};
  return validationStatus;
}

/*function validateInput(input) {
  let form = document.querySelector(formSelectee);

  let input = form.querySelector(querySelectee);
  let inputType = input.getAttribute('type');

  let status = labelText + ': <br />';
  let validationCheck = '';

  if (input.required && !input.value) {
    // if required field is empty
    status = 'This field is required.';
    validationCheck = 'Fail';
  } else {
    if(['text', 'textarea', 'email', 'password', 'tel', 'url'].indexOf(inputType) >= 0) {
      // length check
      let minlength = input.getAttribute('minlength');
      let maxlength = input.getAttribute('maxlength');
      if(input.value.length < minlength || input.value.length >= maxlength) {
        validationCheck = 'Fail';
        status += 'Field should be ' + minlength + '-' + maxlength + ' characters long.' + '<br />';
      } else {
        status += 'Length is acceptable (' + minlength + '-' + maxlength + ' characters).' + '<br />';
      }
      // acceptable character check
      if(inputType == 'email') {
        if(input.checkValidity() == false) {
          validationCheck = 'Fail';
          status += 'Does not match standard email pattern.<br />';
        } else { 
          // extra validation
          let host = input.value.slice(input.value.indexOf('@')+1);
          if (host.indexOf('.') < 0) {
            validationCheck = 'Fail';
            status += 'Does not match acceptable email pattern: missing top-level domain.<br />';
          }
        }
      } else if (inputType == 'password') {

      }
    } else if (inputType == 'number') {

    } else if (inputType == 'textarea') {

    } else if (inputType == 'password') {

    } else if (inputType == 'email') {

    } else if (inputType == 'tel') {

    }
  }
  if (validationCheck == '') {
    validationCheck = 'Pass';
  }

  let validationStatus = {status: status, validationCheck: validationCheck};
  return validationStatus;
}

function validateInputs(inputBlock, formSelectee) {
// Validate input fields that appear on the same line such as name (first, last) 
  // or input fields that are otherwise grouped, such as confirmation fields
  let validationStatusArray = [];
  inputBlock.forEach(function(inputObject) {
    let validationStatus = validateInput(formSelectee, inputObject['querySelectee'], inputObject['labelText']);
    validationStatusArray.push(validationStatus);
  });
  return validationStatusArray;
}

function validateForm(formSelectee, inputBatch, submitSelectee) {
  let formValidationCheck = '';
  let form = document.querySelector(formSelectee);
  
  function renderValidationBlock(inputObject, validationStatus) {
    let existingValidationBlock = document.querySelector('p.validationBlock[for='+inputObject['name']+']');
    if(!existingValidationBlock) {
      let validationBlock = document.createElement('p');
      validationBlock.classList.add('validationBlock');
      validationBlock.setAttribute('for', inputObject['name']);
      validationBlock.innerHTML = validationStatus.status;
      input = document.querySelector(inputObject['querySelectee']);
      input.insertAdjacentElement('afterend', validationBlock);
      if(validationStatus.validationCheck == 'Pass') {
        validationBlock.remove();
      }
    } else {
      existingValidationBlock.innerHTML = validationStatus.status;
      if(validationStatus.validationCheck == 'Pass') {
        existingValidationBlock.remove();
      }
    }
  }

  function renderCompositeValidationBlock(inputBlock, validationStatusArray) {
    let groupDiv = form.querySelector(inputBlock[0]['groupDivSelectee']);
    let groupValidationCheck = '';
    let groupStatus = '';

    validationStatusArray.forEach(function(validationStatus) {
      if (validationStatus.validationCheck == 'Fail') {
        groupValidationCheck = 'Fail';
      }
      groupStatus += validationStatus.status;
    });
    if (groupValidationCheck == '') {
      groupValidationCheck = 'Pass';
    }
    //console.log(groupValidationCheck);

    let groupDivName = groupDiv.classList[groupDiv.classList.length-1]; // last class name
    //console.log(groupDivName);
    console.log(groupDiv);
    let existingCompositeValidationBlock = document.querySelector('p.validationBlock[for='+groupDivName+']');
    console.log(existingCompositeValidationBlock);

    if(!existingCompositeValidationBlock) {
      let validationBlock = document.createElement('p');
      validationBlock.classList.add('validationBlock');
      validationBlock.setAttribute('for', groupDivName);
      validationBlock.innerHTML = groupStatus;
      //console.log(validationBlock);
      groupDiv.insertAdjacentElement('beforeend', validationBlock);
    } else {
      //console.log(groupValidationCheck);
      existingCompositeValidationBlock.innerHTML = groupStatus;
      if(groupValidationCheck && groupValidationCheck == 'Pass') {
        existingCompositeValidationBlock.remove();
      }
    }
    return groupValidationCheck;
  }

  inputBatch.forEach(function(inputBlock) {
    let inputObject = '';
    
    if (!Array.isArray(inputBlock)) {
      inputObject = inputBlock;
      let validationStatus = validateInput(formSelectee, inputObject['querySelectee'], inputObject['labelText']);
      if (validationStatus.validationCheck == 'Fail') {
        formValidationCheck = 'Fail';
      }
      renderValidationBlock(inputObject, validationStatus);
    } else {
      let validationStatusArray = validateInputs(inputBlock, formSelectee);
      let groupValidationCheck = renderCompositeValidationBlock(inputBlock, validationStatusArray);
      if (groupValidationCheck == 'Fail') {
        formValidationCheck = 'Fail';
      }
    }

  });

  let submitButton = form.querySelector(submitSelectee);
  if (formValidationCheck && formValidationCheck == 'Fail') {
    submitButton.disabled = true;
  } else {
    formValidationCheck = 'Pass';
    submitButton.disabled = false;
  }

  return formValidationCheck;
}*/