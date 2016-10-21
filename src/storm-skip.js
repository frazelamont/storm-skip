{
  let focusable = ['a', 'select', 'input', 'button', 'textarea'];
  
  window.addEventListener("hashchange", () => {
      let element = document.getElementById(window.location.hash.substring(1));

      if (element) {
          if(!(focusable.indexOf(element.tagName.toLowerCase()) > -1)){
              element.tabIndex = -1;
          }
          element.focus();
      }
  });
}