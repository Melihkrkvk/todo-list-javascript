const uldom = document.querySelector("#list");
const task = document.querySelector("#task");
const lidom = document.getElementsByTagName('li');
const toast1 = document.querySelector("#liveToast1")
const toast2 = document.querySelector("#liveToast2")

let todo = [];

window.addEventListener('load', function (){
  const data = localStorage.getItem('mylist');
  const parsedData = JSON.parse(data);
  todo = [...parsedData];
   uldom.innerHTML = parsedData.join("");
});

uldom.addEventListener('click', function (event) {
    
   event.target.classList.toggle('checked');
   
});


function newElement () {
    if (!task.value == ""){
        todo.push(`<li>${task.value}</li>`);
        localStorage.setItem('mylist', JSON.stringify(todo));
        uldom.innerHTML = JSON.parse(localStorage.getItem('mylist')).join("");
        task.value = "";
        let toastElement = new bootstrap.Toast(toast1);
        toastElement.show();
        
    
}
    else {
        let toastElement2 = new bootstrap.Toast(toast2);
        toastElement2.show();
    }
}

function deleteTasks() {
    localStorage.removeItem('mylist');
    window.location.reload();
}




