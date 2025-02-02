function w3_open(){
    console.log("entered");
    let button=document.getElementById("openNav");
    button.innerHTML="&#x2715";
    button.onclick=w3_close();
    let sidebar =document.getElementById("side");
    sidebar.style.display="flex";


}

function w3_close(){
    console.log("entered close");
    let button=document.getElementById("openNav");
    button.innerHTML="&#9776;";
    button.addEventListener.onclick(w3_open());
  
    let sidebar =document.getElementById("side");
    sidebar.style.display="none";


}

function toggleNav(){
    console.log("entered tohh");
    let button=document.getElementById("openNav");
    let sidebar =document.getElementById("side");
    let section =document.getElementsByClassName("section")[0];
    console.log(sidebar.style.display)
    let currentDisplay = getComputedStyle(sidebar).display;
    console.log(currentDisplay)
    if(currentDisplay === "flex"){
        sidebar.style.display = "none";
        button.innerHTML = "&#9776;";
        section.style.width="100vw";
        
    } else if (currentDisplay === "none"){
        sidebar.style.display = "flex";
        button.innerHTML = "&#x2715;";
    }
   
}

function getGreeting() {
    let now = new Date();
    let hour = now.getHours(); // Get current hour (0-23 format)
    let greeting;

    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning! ☀️.";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon! 🌞";
    } else {
        greeting = "Good Evening! 🌙";
    }

    return greeting;
}



function toggleDropdown() {
    const select = document.getElementById('multiSelectproject');
    select.style.display = select.style.display === "block" ? "none" : "block";
}

function toggleDropdownDept() {
    const select = document.getElementById('multiSelectdepartment');
    select.style.display = select.style.display === "block" ? "none" : "block";
}



function updatePlaceholder() {
    const select = document.getElementById('multiSelectproject');
    const selectedText = document.querySelector(".selected-text");

    let selectedOptions = Array.from(select.selectedOptions).map(opt => opt.textContent);
    selectedText.textContent = selectedOptions.length ? selectedOptions.join(", ") : "Select one";
}




function updateDeptPlaceholder() {
    const select = document.getElementById('multiSelectdepartment');
    const selectedText = document.querySelector(".selected-text");

    let selectedOptions = Array.from(select.selectedOptions).map(opt => opt.textContent);
    selectedText.textContent = selectedOptions.length ? selectedOptions.join(", ") : "Select one";
}





