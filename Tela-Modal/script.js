function openText(evt, modulo) {
  // Declare all variables
  var i, content, btn;

  // Get all elements with class="tabcontent" and hide them
  content = document.getElementsByClassName("textcontent");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  btn = document.getElementsByClassName("btn");
  for (i = 0; i < btn.length; i++) {
    btn[i].className = btn[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(modulo).style.display = "block";
  evt.currentTarget.className += " active";


}

document.getElementById("defaultOpen").click();