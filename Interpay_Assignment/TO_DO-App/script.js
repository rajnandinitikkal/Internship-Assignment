
//  <link rel="stylesheet" href="style.css"></link> 
const inputBox = document.getElementById("text");
const list = document.getElementById("list");

function AddTask(){
    if (inputBox.value === '' ){
        alert("you must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        list.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = " ";
}

list.addEventListener("click", function(e){
    if (e.target.tagname === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagname === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);