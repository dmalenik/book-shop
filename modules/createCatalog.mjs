import createBookCard from "./createBookCard.mjs";
import createEventListener from "./createEventListener.mjs";

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

  // place eventListeners directly near the trigger element
  // at the end of the module

  const clickShowMoreDelegation = createEventListener(
    list_unordered,
    "click",
    (event) => {
      let activeParent = document.activeElement.parentElement;

      if (event.target.classList.contains("more")) {
        activeParent
          .querySelector(".b-description")
          .classList.replace("d-hidden", "d-shown");
      }

      if (event.target.classList.contains("close")) {
        activeParent.classList.replace("d-shown", "d-hidden");
      }
    }
  );

  return list_unordered;
};

export default createCatalog;
