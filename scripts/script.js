const pageMeta = document.querySelector('meta[name="page-meta"]').content;

const links = document.querySelectorAll('.button-link');
var activepage = document.querySelector('#home');

links.forEach(link => {
  console.log(link.id);
  if (link.id == pageMeta) {
    activepage.classList.remove("active");
    link.classList.add("active");
    activepage = link;
    console.log(activepage);
  } 
});