const sublinks = document.querySelectorAll('.sub-link');
var activesubpage;

const pageContent = document.querySelector('#page-content');

sublinks.forEach(
  sublink => {
    if (sublink.id == subPageMeta.content) {
        activesubpage = sublink
    }

    sublink.addEventListener('click', function(event) {
      event.preventDefault();
      
      activesubpage.classList.remove("active");
      sublink.classList.add("active");
      subPageMeta.setAttribute('content', sublink.id);
      activesubpage = sublink;

      $(pageContent).empty()
      $(pageContent).load(`pages/${pageMeta.content}/${subPageMeta.content}.html`);
      
    });
  });
