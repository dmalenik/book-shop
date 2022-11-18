const createEventListener = (selector, e, callback) => {
  return selector.addEventListener(e, callback);
};

export default createEventListener;
