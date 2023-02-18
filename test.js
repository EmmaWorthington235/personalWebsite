/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("explorer").style.width = "300px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("nav").style.marginLeft = "300px";
    document.getElementById("nums").style.marginLeft = "250px";
    }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("explorer").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("nav").style.marginLeft = "50px";
    document.getElementById("nums").style.marginLeft = "0";
  }