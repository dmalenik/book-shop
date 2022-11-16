import createBookCard from "./createBookCard.mjs";

const createCatalog = (data) => {
  const list_unordered = document.createElement("ul");

  list_unordered.setAttribute("class", "grid catalog nobullets");

  data.map((obj) => {
    const li = document.createElement("li");

    li.setAttribute("class", "w-100 h-100");
    list_unordered.appendChild(li);

    const card = createBookCard(obj);

    li.appendChild(card);
  });

  return list_unordered;
};

export default createCatalog;
