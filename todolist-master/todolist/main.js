
var listDetail = document.getElementById("listDetail");
var addBtn = document.getElementById("addBtn");
var ul = document.getElementById("ul");

addBtn.onclick = function() {
  if (listDetail.value !== "") {
    var li = document.createElement("LI");
    ul.appendChild(li);

  } else {
    alert("Please enter task");
  }

  var entry = document.createElement("SPAN");
  var entryText = document.createTextNode(listDetail.value);
  entry.className = "userEntry";
  entry.appendChild(entryText);
  li.appendChild(entry);


   //adding edit
   var edit = document.createElement("SPAN");
   var eText = document.createTextNode("\u270E"); //pencil icon
   edit.className = "edit";
   edit.appendChild(eText);
   li.appendChild(edit);
 
   edit.onclick = function() {
     var p = prompt("Edit task");
     var entry = this.parentElement.getElementsByClassName("userEntry")[0];
     entry.innerText = p;
   }
 
  localStorage.setItem("todoData", JSON.stringify(entry))

//deleting 
  var span = document.createElement("SPAN");
  var spanText = document.createTextNode("\u00D7"); // X icon
  span.className = "close";
  span.appendChild(spanText);
  li.appendChild(span);

  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      this.parentElement.style = "opacity: 0%;";    //setting opacity to 0
      setInterval(() => {
        this.parentElement.style.display = "none";    //deleting item after a sec to let other list items move up
      }, 500);
    }
  }

  listDetail.value = "";
}


 //cross off when clicked
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// local storage attempt
function saveTodos(){
  var str = JSON.stringify(entryText);
  localStorage.setItem("todoData", JSON.stringify(entry))
}

function getTodos(){
  var str = localStorage.getItem("entryText");
  todos = JSON.parse(entry)
  if (!todos){
    todos = [];
  }
}
 getTodos();
