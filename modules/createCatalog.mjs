import createBookCard from "./createBookCard.mjs";

const createCatalog = (data) => {
  const list_unordered = document.createElement("ul");

  data.map((obj) => {
    const li = document.createElement("li");

    list_unordered.appendChild(li);

    const card = createBookCard(obj);

    li.appendChild(card);
  });

  return list_unordered;
};

export default createCatalog;
