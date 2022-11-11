const getFetch = (url, configurations = {}) => {
  return fetch(url, configurations).then((response) => {
    return response.json();
  });
};

export default getFetch;
