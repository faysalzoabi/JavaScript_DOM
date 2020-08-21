// console.dir(document);

// console.log(document.domain)
// console.log(document.url);
// console.log(document.title);
// // document.title = 123;

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);

// console.log(document.images);

// console.log(document.getElementById('header-title'));

var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
// console.log(headerTitle);
// innter text pay attention to styling
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';

// headerTitle.innerHtml = '<h3>Hello</h3>'

// header.style.borderBottom = 'solid 3px #000';

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);

// items[1].textContent = 'Hello 2'
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for(var i =0; i< items.length; i++){
//     items[i].style.backgroundColor = 'grey';
// }

// var li = document.getElementsByTagName('li');

// for(var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = 'red';
// }

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = "Hello World"

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "Send"
// submit.style.backgroundColor = "orange";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';
// // we get node list can run array functions
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Helloooo';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i =0; i< odd.length; i++){
//     odd[i].style.backgroundColor = 'pink'
// }


// traversing the dom
var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'green';
// console.log(itemList.parentNode.parentNode);

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'green';

// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// firstchild
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.backgroundColor = 'pink'
// itemList.lastElementChild.style.backgroundColor = 'orange'

// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// var title = document.querySelector('.title')
// console.log(title.nextElementSibling);

// previous sibling
// console.log(itemList.previousElementSibling);

// create element

// var newDiv = document.createElement('div');
// newDiv.className = 'hello';
// newDiv.id= 'hello1';
// newDiv.setAttribute('title', 'Hello Div');

// var newDivText = document.createTextNode('Hello World');

// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('h1');

// newDiv.style.fontSize='30px';

// container.insertBefore(newDiv, h1)

// console.log(newDiv);


// Event
// var button = document.getElementById('button').addEventListener('click', buttonClick)
// function buttonClick(e){
//     // console.log('buttonClicked');
//     // document.getElementById('header-title').textContent = 'changed'
//     // document.querySelector('#main').style.backgroundColor = 'green'
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // var output = document.getElementById('output');
//     // output.innerHTML = '<h3>'+e.target.id+'</h3>'

//     // console.log(e.type);
//     // console.log(e.clientX);
//     // console.log(e.clientY);

//     // console.log(e.offsetX);

//     // console.log(e.altKey);
//     // console.log(e.ctrlKey);
//     // console.log(e.shiftKey);

// }


var button = document.getElementById('button')
var box = document.getElementById('box');
var output = document.getElementById('output')
// button.addEventListener('click', runEvent)
// button.addEventListener('dblclick', runEvent)
// button.addEventListener('mousedown', runEvent)
// button.addEventListener('mouseup', runEvent)

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent)

box.addEventListener('mousemove',runEvent)

var itemInput = document.querySelector('input[type="text"]')
var form = document.querySelector("form");

var submit = document

// itemInput.addEventListener('keydown', runEvent)
// itemInput.addEventListener('focus', runEvent)
// itemInput.addEventListener('blur', runEvent)

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent)

form.addEventListener('submit', runEvent)

function runEvent(e){
    e.preventDefault();
    console.log('event type: ' +e.type );
    // document.body.style.display = 'none';
    // console.log(e.target.value)
    // output.innerHTML = '<h3>'+e.target.value+'</h3>'
    // output.innerHTML = '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY: ' +e.offsetY+'</h3>'
    // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+","+40+")";
}




