// Todo List Application:

//1.  Define an array called tasks containing several objects, each representing a task in the to-do list. Each task object should have properties such as id, description, dueDate, status, and any other relevant details.

let tasks = [
    {
      id: 1,
      description: "Complete project proposal",
      dueDate: "2024-05-15",
      status: "Pending",
      priority: "High"
    },
    {
      id: 2,
      description: "Prepare presentation slides",
      dueDate: "2024-05-10",
      status: "In Progress",
      priority: "Medium"
    },
    {
      id: 3,
      description: "Send weekly report",
      dueDate: "2024-05-08",
      status: "Complete",
      priority: "Low"
    }
  ];
  
//2.  Create a class called Task to represent a task, and use this class to create objects for each task in the tasks array.

class Task {
    constructor(id, description, dueDate, status, priority, assignedTo) {
      this.id = id;
      this.description = description;
      this.dueDate = dueDate;
      this.status = status;
      this.priority = priority;
      this.assignedTo = assignedTo;
    }
}
// console.log(tasks);
  

//3.  Define functions addTask() to add a new task, updateTask() to update an existing task, removeTask() to remove a task, and displayTasks() to display all tasks in the following format: TaskDescription - DueDate (Status).

function addtask(id,description, dueDate,status,priority){
  tasks.push({id,description, dueDate, status, priority })
}
addtask(4, 'final date is today', "2050-04-09", "completed", 'high')

// ----------------------------------------------------------------

function updateTask(id, changePriority){
  let i = 0;
  while (i<tasks.length){
    if (tasks[i].id===id){
      tasks[i].priority=changePriority;
    }
    i+=1
  }
  console.log(tasks);
}
// updateTask(2,"High")

// ----------------------------------------------------------

function removeTask(id){
  let i = 0;
  while (i<tasks.length){
    if (tasks[i].id===id){
      continue
    }else{
      console.log(tasks[i]);
    }
    i+=1
  }
}
// removeTask(3)
// ------------------------------------------------------------

function displayTasks(){
  let i = 0;
  while (i<tasks.length){
    console.log(`${tasks[i].description} - ${tasks[i].dueDate}`);
    i+=1
  }
}
displayTasks()
