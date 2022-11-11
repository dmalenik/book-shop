const getFetch = (url, configurations) => {
  return fetch(url).then((response) => {
    return response.json();
  });
};

export default getFetch;
