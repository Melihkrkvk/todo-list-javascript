const uldom = document.querySelector("#list");
const task = document.querySelector("#task");
const lidom = document.getElementsByTagName('li');
const toast1 = document.querySelector("#liveToast1")
const toast2 = document.querySelector("#liveToast2")

let todo = [];

window.addEventListener('load', function () {
    const data = localStorage.getItem('mylist');
    const parsedData = JSON.parse(data);
    // todo = [...parsedData];

    if (parsedData) {
        parsedData.forEach(item => {
            todo.push(item);
        });
        uldom.innerHTML = parsedData.join("");
    }

});

uldom.addEventListener('click', function (event) {

    if (event.target.type === 'submit') {
        const id = event.target.dataset.id;
        const tempTodo = [];
        document.querySelectorAll('.item').forEach(item => {
            if (item.dataset.id !== id) {
                tempTodo.push(item.outerHTML);
            }
        });

        todo = tempTodo;
        uldom.innerHTML = todo.join("");
        localStorage.setItem('mylist', JSON.stringify(todo));
    } else {
        event.target.classList.toggle('checked');
    }

});


function newElement() {
    const id = Number(localStorage.getItem('totalNumber')) + 1;
    if (!task.value == "") {
        todo.push(`<li class='item' data-id='${id}'>

        ${task.value}
        <button class='deleteButton' data-id='${id}'>x</button>
       
        </li>`);
        localStorage.setItem('mylist', JSON.stringify(todo));
        task.value = "";
        let toastElement = new bootstrap.Toast(toast1);
        toastElement.show();

        const totalNumber = Number(localStorage.getItem('totalNumber'));
        localStorage.setItem('totalNumber', totalNumber + 1);
        uldom.innerHTML = JSON.parse(localStorage.getItem('mylist')).join("");


    }
    else {
        let toastElement2 = new bootstrap.Toast(toast2);
        toastElement2.show();
    }
}




