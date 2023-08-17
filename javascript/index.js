const inputText = document.getElementById('input-text');
const task = document.getElementById('task');

function addtask() {
    if(inputText.value == ""){
        alert("Please enter your task : ");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputText.value;
        task.appendChild(li)
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputText.value = "";
    saveData();
}
    task.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
} ,false);

function saveData() {
    localStorage.setItem("data",task.innerHTML);
}
function showData() {
    task.innerHTML = localStorage.getItem("data");
}
showData();