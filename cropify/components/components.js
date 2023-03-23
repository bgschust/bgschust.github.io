async function getComponentRequest(componentName) {
  let headers = new Headers();
  headers.append("Content-Type", "text/html");
  //headers.append("Origin", window.location.href);
  let requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
      //mode: 'cors',
      //origin: window.location.href
  };

  let url = '../components/'
    + componentName
    + '.html';
  try {
      let res = await fetch(url, requestOptions);
      res = await res.text();
      return res;
  } catch (error) {
      console.log(error);
  }
}

async function renderComponent(componentName, component) {
  let resText = await getComponentRequest(componentName);
  var resHTML = new DOMParser().parseFromString(resText, 'text/html');
  let componentHTML = resHTML.querySelector('html');
  let componentBody = componentHTML.querySelector('body');
  component.appendChild(componentBody);
}

document.addEventListener('DOMContentLoaded', function() {
  let components = document.querySelectorAll('div.component');
  components.forEach(function(component){
    if(component.classList.contains('topNavigation')) {
      renderComponent('topNavigation', component);
    } else if(component.classList.contains('footer')) {
      renderComponent('footer', component);
    }
  });
});