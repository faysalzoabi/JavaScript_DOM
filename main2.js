var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var deletebtn = document.querySelectorAll('.delete').forEach(item => {
    item.addEventListener('click', removeItem)
});
// form submit event
form.addEventListener('submit', addItem);

filter.addEventListener('keyup', filterItems)
// delete vent
// itemList.addEventListener('click', removeItem)

// deletebtn.addEventListener('click', removeItem)
function addItem(e){
    e.preventDefault();

    //get input value
    var newItem = document.getElementById("item").value;

    //create new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    itemList.appendChild(li)
}

function removeItem(e){
    console.log(e.target.classList);
    var li = e.target.parentElement;
    console.log(li);
    itemList.removeChild(li);
    // if(e.target.classList.contains('delete')){

    //     if(confirm('Are you sure?')){
    //         var li = e.target.parentElement;
    //         itemList.removeChild(li);
    //     }
    // }
}

function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = document.getElementsByTagName('li')
    // console.log(items);
    // console.log(itemList.children);
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        console.log(itemName);
        // if(itemName.toLowerCase().indexOf(text) != -1){
        //     item.style.display = 'block';
        // } else {
        //     item.style.display = 'none';
        // }
    })

}