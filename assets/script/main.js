//inputs
let taskName = document.querySelector("#taskInput");
let taskDate = document.querySelector("#dateInput");

//btn
let addTaskBtn = document.querySelector("#addBtn");

let table = document.querySelector("#taskList")

let noEntries = document.querySelector("#noEntries");

let tasks = JSON.parse(localStorage.getItem("entries"));

console.log(tasks);

let list = "";

if (tasks == null) {
    list = `<tr id="noEntries">No tasks added.</tr>`;
} else {
    tasks.forEach((x) => {
        list += `<tr> <td>${x.newTaskName}</td> <td>${x.newTaskDate}</td> <td>${x.newTaskStatus}</td> <td>${`<button id="delBtn">Delete</button`}</td> </tr>`;
    })
}

table.innerHTML = list;

let addTask = () => {

    let n = localStorage.getItem("idVal");
    n = ++n;

    if (tasks == null) {
        tasks = [];
    }

    let taskEntry = {
        newTaskName: taskInput.value,
        newTaskDate: dateInput.value,
        newTaskStatus: `<input type="checkbox" name="complete" id="complete">`,
        id: n
    }

    tasks.push(taskEntry);
    console.log(taskEntry);

    localStorage.setItem("entries", JSON.stringify(tasks));
    localStorage.setItem("idVal", n)

    if (tasks.length == 1) {
        let noEntries = document.querySelector("#noEntries");
        noEntries.style.display = "none";
    }

    let table = document.querySelector("#taskList")

    let newTask = document.createElement("tr");

    newTask.innerHTML = `<tr> <td>${taskEntry.newTaskName}</td> <td>${taskEntry.newTaskDate}</td> <td>${taskEntry.newTaskStatus}</td> <td>${`<button id="delBtn">Delete</button`}</td></tr>`

    table.appendChild(newTask);
}
function delTask() {
    console.log(event.target.parentnode.parentnode);

    let tr = event.target.parentnode.parentnode;
    let rowId = tr.id;

    tr.remove();

    console.log(tasks);

    tasks = tasks.filter((obj) => obj.id != rowId);
    console.log(tasks);

    localStorage.setItem("entries", JSON.stringify(tasks));

    if (tasks.length == 1) {
        let noEntries = document.querySelector("#noEntries");
        noEntries.style.display = "none";
    }    
}

let delTaskBtn = document.querySelector("#delBtn");

//events
addTaskBtn.addEventListener("click",addTask);
delTaskBtn.addEventListener("click",delTask);