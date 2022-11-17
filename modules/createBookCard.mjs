const createBookCard = (obj) => {
  const card = document.createElement("div");

  card.setAttribute("class", "grid card w-100");

  const image = document.createElement("img");

  image.setAttribute("src", `../../assets/img/${obj.imageLink}`);
  image.setAttribute("alt", obj.title);
  image.setAttribute("class", "picture w-100 m-auto");
  card.appendChild(image);

  const bookTitle = document.createElement("h5");

  bookTitle.innerText = obj.title;
  bookTitle.setAttribute("class", "title m-auto t-center");
  card.appendChild(bookTitle);

  const author = document.createElement("p");

  author.innerText = obj.author;
  author.setAttribute("class", "author m-auto t-center");
  card.appendChild(author);

  const price = document.createElement("p");

  price.innerText = `Price: $${obj.price}`;
  price.setAttribute("class", "price m-auto t-center");
  card.appendChild(price);

  const showMore = document.createElement("button");

  showMore.innerText = "Show more";
  showMore.setAttribute("class", "more");
  card.appendChild(showMore);

  const addToBag = document.createElement("button");

  addToBag.innerText = "Add to bag";
  addToBag.setAttribute("class", "bag");
  card.appendChild(addToBag);

  return card;
};

export default createBookCard;
