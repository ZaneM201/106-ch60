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


function saveTask(){
    console.log("hello Im the saveTask");
    // get the value of the input

    // create a new task object

    //add the task to the list
}
function init(){
    console.log("hello I am the init");
    // hooks
    $("#btnAdd").click(saveTask);
    $("#btnDetails").click(toggleVisibility);
}

window.onload = init; // It waits until the HTML and CSS finish to run the logic