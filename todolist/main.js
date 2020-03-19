
var listDetail = document.getElementById("listDetail");
var addBtn = document.getElementById("addBtn");
var ul = document.getElementById("ul");
var cnt = 0
addBtn.onclick = function() {
  if (listDetail.value !== "") {
    var li = document.createElement("LI");
    ul.appendChild(li);

  } else {
    alert("Please enter task");
  }
//close
  var entry = document.createElement("SPAN");
  var entryText = document.createTextNode(listDetail.value);
  entry.className = "userEntry";
  entry.setAttribute("id", "entry" + cnt);
  entry.appendChild(entryText);
  li.appendChild(entry);

  var span = document.createElement("SPAN");
  var spanText = document.createTextNode("\u00D7"); // X icon
  span.className = "close";
  span.appendChild(spanText);
  li.appendChild(span);

  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      this.parentElement.style.display = "none";
    }
  }
 //adding edit button
  var edit = document.createElement("SPAN");
  var eText = document.createTextNode("\u270E"); //pencil icon
  edit.className = "edit";
  edit.setAttribute("id", "edit" + cnt);
  edit.appendChild(eText);
  li.appendChild(edit);

  var editC = document.getElementById("edit" + cnt);
  editC.onclick = function() {
    var p = prompt("Edit task");
    var obj = document.getElementById("entry" + cnt);
    obj.innerText = p;
  }

  // var liTag = document.getElementsByTagName("LI");

  // for (var j = 0; j < liTag.length; j++) {
  //   liTag[j].onclick = function() {
  //     this.classList.toggle("checked");
  //   }
  // }

  listDetail.value = "";
}

  
  // had to move out of function for it to work for some reason
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

