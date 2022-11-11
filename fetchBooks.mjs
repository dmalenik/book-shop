const catalogPath = "./books.json";
const books = fetch(catalogPath)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

export { books };
