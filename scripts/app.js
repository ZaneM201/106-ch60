function hello(){
    console.log("Hello there");
    goodbye();
}

function goodbye(){
    console.log("Bye!");
}

function init(){
    console.log("hello I am the init");
    hello();
}

window.onload = init;// It waits until the HTML and CSS finish to run the logic