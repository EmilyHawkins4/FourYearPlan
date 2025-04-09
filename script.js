let courses = ["CSCI 10 & L", "CSCI 60 & L", "CSCI 61", "CSCI 62", "CSEN 20 & L", "ECEN 21 & L", "CSCI 161", "CSCI 163", "CSEN 177 & L", "Emphasis I", "Emphasis II", "Emphasis III", "Emphasis IV", "Emphasis V", "MATH 11", "MATH 12", "MATH 13", "MATH 14", "MATH 51", "MATH 53", "MATH 122", "CTW I", "CTW II", "C & I I", "C & I II", "C & I III","RTC I", "RTC II", "RTC III", "Language I", "Language II", "Natural Science", "Social Science", "Science, Tech, Society", "Civic Engagement", "Ethics", "Diversity", "Arts", "Advanced Writing", "ELSJ", "Elective"]

console.log("connected!")

createCourseTable(courses)

function createCourseTable(classNames) {
    const tableContainer = document.getElementById('courseTableContainer');
    console.log(tableContainer)
    const table = document.createElement('table');
    table.classList.add('min-w-full', 'border-collapse', 'border', 'border-gray-300', "rounded-xl");

    // Create table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.classList.add('bg-gray-200');

    const requirementHeader = document.createElement('th');
    requirementHeader.classList.add('py-2', 'px-4', 'border-b', 'font-semibold', 'text-gray-700');
    requirementHeader.textContent = 'Requirement';
    headerRow.appendChild(requirementHeader);

    const plannedQuarterHeader = document.createElement('th');
    plannedQuarterHeader.classList.add('py-2', 'px-4', 'border-b', 'font-semibold', 'text-gray-700');
    plannedQuarterHeader.textContent = 'Planned Quarter';
    headerRow.appendChild(plannedQuarterHeader);

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    const tbody = document.createElement('tbody');
    const quarters = [
        { value: 'f1', label: 'Freshman Fall' },
        { value: 'w1', label: 'Freshman Winter' },
        { value: 's1', label: 'Freshman Spring' },
        { value: 'f2', label: 'Sophomore Fall' },
        { value: 'w2', label: 'Sophomore Winter' },
        { value: 's2', label: 'Sophomore Spring' },
        { value: 'f3', label: 'Junior Fall' },
        { value: 'w3', label: 'Junior Winter' },
        { value: 's3', label: 'Junior Spring' },
        { value: 'f4', label: 'Senior Fall' },
        { value: 'w4', label: 'Senior Winter' },
        { value: 's4', label: 'Senior Spring' },
    ];

    classNames.forEach(className => {
        const row = document.createElement('tr');

        if(className.substring(0,4) == "MATH"){
            row.classList.add('bg-sky-400');
        } else if(className.substring(0,4) == "CSCI" || className.substring(0,4) == "CSEN" || className.substring(0,4) == "ECEN"|| className.substring(0,4) == "Emph"){
            row.classList.add('bg-teal-400');
        } else if(className == "Elective"){
            row.classList.add('bg-yellow-400');
        } else {
            row.classList.add('bg-violet-400');
        }

        const classNameCell = document.createElement('td');
        classNameCell.classList.add('py-2', 'px-4', 'border-b', 'text-black');
        classNameCell.textContent = className;
        row.appendChild(classNameCell);

        const selectCell = document.createElement('td');
        selectCell.classList.add('py-2', 'px-4', 'border-b');
        const select = document.createElement('select');
        select.name = className;
        select.classList.add('q', 'w-full', 'rounded-md', 'shadow-sm', 'border-gray-300', 'focus:border-teal-500', 'focus:ring-teal-500');

        const defaultOption = document.createElement('option');
        defaultOption.disabled = true;
        defaultOption.selected = true;
        defaultOption.value = '';
        defaultOption.textContent = 'Select an option';
        select.appendChild(defaultOption);

        quarters.forEach(quarter => {
            const option = document.createElement('option');
            option.value = quarter.value;
            option.textContent = quarter.label;
            select.appendChild(option);
        });

        selectCell.appendChild(select);
        row.appendChild(selectCell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
}

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
        new_class.classList.add('bg-sky-400');
    } else if(course.substring(0,4) == "CSCI" || course.substring(0,4) == "CSEN" || course.substring(0,4) == "ECEN"|| course.substring(0,4) == "Emph"){
        new_class.classList.add('bg-teal-400');
    } else if(course == "Elective"){
        new_class.classList.add('bg-yellow-400');
    } else {
        new_class.classList.add('bg-violet-400');
    }

    document.getElementById(quarter).appendChild(new_class)

}

function printDiv(){
    const printContents = document.getElementById("table").innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }