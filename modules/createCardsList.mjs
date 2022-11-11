import createBookCard from "./createBookCard.mjs";

const createItemsList = (items) => {
  const list_unordered = document.createElement("ul");

  items.map((i) => {
    const item = document.createElement("li");

    list_unordered.appendChild(item);

    const card = createBookCard(i);

    item.appendChild(card);
  });

  return list_unordered;
};

export default createItemsList;
