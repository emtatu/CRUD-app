



var liToUpdate = null;




function submitTask() {

    var input = document.getElementById("task").value;

    if (liToUpdate === null) {
        document.getElementById("list").innerHTML += ('<li class="item " id="item" draggable="true">' + input + '<button id="updateButton" onclick="update(event)">update</button> <button id="deleteButton" onclick="remove(event)">x</button>' + '</li>');

    } else {

        liToUpdate.innerHTML = (input + '<button id="updateButton" onclick="update(event)">update</button> <button id="deleteButton" onclick="remove(event)">x</button>');
    }
    liToUpdate = null;
    document.getElementById("task").value = " ";
    const item = document.querySelector('.item');
    item.addEventListener('dragstart', dragStart);
}
function update(event) {
    var li = event.srcElement.parentNode;
    var content = li.innerText;

    let value = content.split('update x')[0];
    document.getElementById("task").value = value;
    liToUpdate = li;

}

function remove(event) {
    var ul = document.querySelector('ul');
    var li = event.srcElement.parentNode;


    ul.removeChild(li);

}
function deleteList(event) {
    var list = document.getElementById('list');

    // for (let i = 0; i < list.childNodes.length; i++) {
    //     list.removeChild(list.childNodes[i]);
    // }   
    list.innerHTML = ""


}



/*const boxes = document.querySelector('box');
// attach the dragstart event handler

// handle the dragstart

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {

        e.target.classList.add('hide');
    }, 0);
}
boxes.forEach(box => {
    debugger;
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

function dragEnter(e) {
    e.preventDefault();

    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');

}

function drop(e) {
    e.target.classList.remove('drag-over');
    // get the draggable element

    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
    debugger;
}*/
