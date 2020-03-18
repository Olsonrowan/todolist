// class User {
//     constructor(lists = []) {
//         this.lists = lists;
//     }
//     addList(list) {
//         this.lists.push(list);
//     }
// }


// class ToDoList{
//     constructor(id, name, toDos = []) {
//         this.id = id;
//         this.name = name;
//         this.toDos = toDos;
//     }

//     rename(newName) {
//         this.name = newName;
    
//     }

//     addTodo(toDo){
//         this.toDos.push(toDo);

//     }

//     removeToDo(id) {
//         this.toDos = this.toDos.filter(toDo => toDo.id != id);

//     }
// }

// class ToDo {
//     constructor(id, text){
//         this.id = id;
//         this.text = text;
//         this.completed = false;

//     }
//     edit(newText){
//         this.text = newText;

//     }
//     setCompleted(completed){
//         this.completed = completed;

//     }

// }

// var listbtn = document.getElementById('btn1');
// buttonclick.addEventListener('click', function () {
//     append.li

// });


// add.addEventListener('click', function() {
//   list.innerText += `<li>item</li>`
// });


// input.addEventListener('keypress', function(keyPressed) {
//   var inputValue = document.querySelector("input[type = 'text']").value;

//     if (keyPressed.which === 13) {
//         var li = document.createElement('li');
//          var newTodo = this.value;
//          this.value = " " ;
//          ul.appendChild(li).append(newTodo)
//     }
//   });



var listDetail = document.getElementById("listDetail");
var addBtn = document.getElementById("addBtn");
var ul = document.getElementById("ul");
var cnt = 0
addBtn.onclick = function() {
  if (listDetail.value !== "") {
    var li = document.createElement("LI");
    ul.appendChild(li);

  } else {
    alert("List item cannot be empty");
  }

  var entry = document.createElement("SPAN");
  var entryText = document.createTextNode(listDetail.value);
  entry.className = "userEntry";
  entry.setAttribute("id", "entry" + cnt);
  entry.appendChild(entryText);
  li.appendChild(entry);

  var span = document.createElement("SPAN");
  var spanText = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(spanText);
  li.appendChild(span);

  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      this.parentElement.style.display = "none";
    }
  }

  var edit = document.createElement("SPAN");
  var eText = document.createTextNode("\u270E");
  edit.className = "edit";
  edit.setAttribute("id", "edit" + cnt);
  edit.appendChild(eText);
  li.appendChild(edit);

  var editC = document.getElementById("edit" + cnt);
  editC.onclick = function() {
    var p = prompt("Edit your entry");
    var obj = document.getElementById("entry" + cnt);
    obj.innerText = p;
  }

  // var liTag = document.getElementsByTagName("LI");

  // for (var j = 0; j < liTag.length; j++) {
  //   liTag[j].onclick = function() {
  //     this.classList.toggle("checked");
  //   }
  // }

  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);

  listDetail.value = "";
}
//test//

  
  

