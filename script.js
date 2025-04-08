

let elements = document.querySelectorAll(".q");

console.log(elements)

elements.forEach((item) => {
    item.addEventListener('change', () => {
        addToChart(item.name, item.value);
    });
});

function addToChart(course, quarter){
    console.log("3")
    var new_class = document.createElement("h2")
    new_class.innerText = course
    new_class.style.textAlign = "center";
    new_class.style.padding = "3px";
    new_class.style.width = "100%"

    if(course.substring(0,4) == "MATH"){
        new_class.style.backgroundColor = "#3b82f6";
    } else if(course.substring(0,4) == "CSCI" || course.substring(0,4) == "CSEN" || course.substring(0,4) == "ECEN"|| course.substring(0,4) == "Emph"){
        new_class.style.backgroundColor = "#14b8a6";
    } else {
        new_class.style.backgroundColor = "#0ea5e9";
    }

    document.getElementById(quarter).appendChild(new_class)

}