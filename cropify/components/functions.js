function buildURL(baseURL, queryParams) {
  let query = '';
  queryParams.forEach(function URIencode(item, index, arr){
    let k = Object.keys(item)[0];
    let v = item[k];
    query += encodeURIComponent(k)+'='+encodeURIComponent(v);
    if (index < queryParams.length - 1) {
      query += '&';
    }
  });
  if (query) {
    query = '?'+ query;
  }

  let url = baseURL + query;
  return url;
}

function setCookie(name, value, expDays) {
  const d = new Date();
  d.setTime(d.getTime() + (expDays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  // Split cookie string and get all individual name=value pairs in an array
  var cookieArr = document.cookie.split(";");
  // Loop through the array elements
  for(var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("=");
      /* Removing spaces at the beginning of the cookie name
      and compare it with the given string */
      if(name == cookiePair[0].trim()) {
          // Decode the cookie value and return
          return decodeURIComponent(cookiePair[1]);
      }
  }
  // Return null if not found
  return null;
} // Src: https://www.tutorialrepublic.com/javascript-tutorial/javascript-cookies.php