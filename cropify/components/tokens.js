async function getRequest_tokenCatalogItems() {
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", JSON.stringify([
    {"User ID": JSON.parse(getCookie('user')).id},
    {"Password": JSON.parse(getCookie('user')).Password}
  ]));
  let requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow"
  };

  let queryParams = [];

  let url = buildURL('https://hammerhead.cropify.org/cors-proxy/' // CORS proxy server
  + 'https://n8n.cropify.org/webhook/22684723-1c5d-494c-87c5-728cfca3228f',
  queryParams);
  try {
      let res = await fetch(url, requestOptions);
      res = await res.json();
      return await res;
  } catch (error) {
      console.log(error);
  }
}