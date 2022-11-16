const addCSS = (href) => {
  const link = document.createElement('link');

  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute('href', `../../assets/styles/${href}`);

  const head = document.querySelector('head');

  head.appendChild(link);
};

export default addCSS;
