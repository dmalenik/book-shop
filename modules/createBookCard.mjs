const createBookCard = (obj) => {
  const card = document.createElement("div");

  const picture = document.createElement("picture");

  card.appendChild(picture);

  const source = document.createElement("source");

  // link is created based on main.js path
  source.setAttribute("srcset", `../../assets/img/${obj.imageLink}`);
  picture.appendChild(source);

  const image = document.createElement("img");

  image.setAttribute("src", "../../assets/img/default.png");
  image.setAttribute("alt", obj.title);
  picture.appendChild(image);

  const bookTitle = document.createElement("h6");

  bookTitle.innerText = obj.title;
  card.appendChild(bookTitle);

  const author = document.createElement("p");

  author.innerText = obj.author;
  card.appendChild(author);

  const price = document.createElement("p");

  price.innerText = `Price: $${obj.price}`;
  card.appendChild(price);

  const showMore = document.createElement("button");

  showMore.innerText = "Show more";
  card.appendChild(showMore);

  const addToBag = document.createElement("button");

  addToBag.innerText = "Add to bag";
  card.appendChild(addToBag);

  return card;
};

export default createBookCard;
