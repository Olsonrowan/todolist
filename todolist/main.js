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


var input = document.querySelector("input[type = 'text']");
var ul = document.querySelector("ul");
var text = " "
var list = document.getElementById("list");
var add = document.getElementById('btn1');

// add.addEventListener('click', function() {
//   list.innerText += `<li>item</li>`
// });


// input.addEventListener('keypress', function(keyPressed) {
//     if (keyPressed.which === 13) {
//         var li = document.createElement('li');
//          var newTodo = this.value;
//          this.value = " " ;
//          ul.appendChild(li).append(newTodo)
//     }
//   });

  var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


//this is to add list item
function myFunction() {
  var li = document.createElement("li");
  var inputValue = document.querySelector("input[type = 'text']").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("there must be something to do today!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("taskText").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");  //adding X for close on li
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7"); 
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
