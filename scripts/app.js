let isVisible = true; // global variable to track visibiltiy

function toggleVisibility(){
    if(isVisible){
        $("#form").fadeOut(); // hide the form section
        isVisible = false; // update visibility state
    }else{
        $("#form").fadeIn(); // show the form section
        isVisible = true; // update visibility state
    }
}

function testRequest(){
    $.ajax({
        type: "GET",//case dosent matter under ajax
        url: "http://jsonplaceholder.typicode.com/posts/1",
        dataType: "json",
        success: function(response){
            console.log("Request Successfull");
            console.log(response);
        },
        error: function(error){
            console.error("Request Failed");
            console.error(error);
        }

    })
}

function saveTask(){
    // get the value of the input
    const title = $("#txtTitle").val().trim();
    const desc = $("#txtDescription").val().trim();
    const color = $("#selColor").val().trim();
    const date = $("#selDate").val().trim();
    const status = $("#selStatus").val().trim();
    const budget = $("#numBudget").val().trim();
    // create a new task object
    let taskToSave = new Task(title, desc, color, date, status, budget );
    console.log(taskToSave);// for testing
    //add the task to the list
    displayTask(taskToSave);
}

function displayTask(task){
    // use template literals to build the HTML
    let syntax = `<div class="task" style="border-left: 7px solid ${task.color};">
                    <div class="info">
                        <h5>${task.title}</h5>
                        <p>${task.desc}</p>
                    </div>
                    <label class="status">${task.status}</label>
                    <div class="date-budget">
                        <label>${task.startDate}</label>
                        <br>
                    <label>${task.budget}</label>
                    </div>
                  </div>`;
    // use jquery to appen the new HTML to our container
    $(".pending-list").append(syntax);
}

import API from "./api.js"
async function init(){
    console.log("hello I am the init");
    try{
        const task = await API.getTask();
        task.forEach(displayTask);
        console.log("loading");
    }catch(err){
        console.warn(err.message);
        
    }
    // hooks
    $("#btnAdd").click(saveTask);
    $("#btnDetails").click(toggleVisibility);
}

window.onload = init; // It waits until the HTML and CSS finish to run the logic