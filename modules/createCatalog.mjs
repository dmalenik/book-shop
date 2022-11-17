import createBookCard from "./createBookCard.mjs";

const createCatalog = (data) => {
  const list_unordered = document.createElement("ul");

  list_unordered.setAttribute("class", "grid p-25px catalog nobullets");

  data.map((obj) => {
    const li = document.createElement("li");

    li.setAttribute("class", "item w-100 h-100 p-25px");
    list_unordered.appendChild(li);

    const card = createBookCard(obj);

    li.appendChild(card);
  });

  return list_unordered;
};

export default createCatalog;
