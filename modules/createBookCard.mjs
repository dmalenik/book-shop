import createSection from "./createSection.mjs";

const createBookCard = (obj) => {
  const card = document.createElement("div");

  card.setAttribute("class", "grid pos-relative card w-100");

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

  const bookDescription = document.createElement("p");

  bookDescription.innerText = obj.description;

  const closeBtn = document.createElement("button");

  closeBtn.innerText = "Close";
  closeBtn.setAttribute("class", "close");

  const bookDescriptionSection = createSection(obj.title, 5);

  bookDescriptionSection.appendChild(bookDescription);
  bookDescriptionSection.appendChild(closeBtn);
  bookDescriptionSection.setAttribute(
    "class",
    "pos-absolute b-description-position b-description p-25px d-hidden"
  );
  card.appendChild(bookDescriptionSection);

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
