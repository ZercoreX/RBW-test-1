const pageMeta = document.querySelector('meta[name="page-meta"]');
const subPageMeta = document.querySelector('meta[name="sub-page"]');

const links = document.querySelectorAll('.button-link');
var activepage = document.querySelector('#home');

links.forEach(link => {
  if (link.id == pageMeta.content) {
    activepage.classList.remove("active");
    link.classList.add("active");
    activepage = link;
  } 
});

