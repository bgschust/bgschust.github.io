async function getRequest_userSharedToken(requestReason) {
  let userID = '';
  let queryParams = [];

  if(document.cookie
    && getCookie('user')) {
    userID = JSON.parse(getCookie('user')).id;

    queryParams.push({"User_ID": userID});
    queryParams.push({"Request Reason": requestReason});

    headers.append("Authorization", "Password "+JSON.parse(getCookie('user')).Password);
    requestOptions.headers = headers;
  }

  let url = buildURL('https://hammerhead.cropify.org/cors-proxy/' // CORS proxy server
    + 'https://n8n.cropify.org/webhook/944e1074-bf6c-4130-89a7-8a86fa1d441f',
    queryParams);
  try {
      let res = await fetch(url, requestOptions);
      res = await res.json();
      return await res;
  } catch (error) {
      console.log(error);
  }
}