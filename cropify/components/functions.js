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