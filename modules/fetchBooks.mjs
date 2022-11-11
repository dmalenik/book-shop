const catalogPath = "./books.json";
const bookSection = fetch(catalogPath)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

export { bookSection };
