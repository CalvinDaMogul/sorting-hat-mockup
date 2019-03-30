// console.log("Hello World!");

// const inputStudent = document.getElementById('inputStudent');

// const House = [
//             'Slytherin', 'Ravenclaw', 'Gryffindor', 'Hufflepuff'
// ];
// const Students = [];
// let StudentCounter = 1;


// const printToDom = (divId, textToPrint) => {
//     const selectedDiv = document.getElementById(divId);
//     selectedDiv.innerHTML = textToPrint;
//     console.log(selectedDiv);
// };

// const deleteFunction = (e) => {
//     const buttonId = e.target.id;
//     students.forEach((student, index) => {
//         if(student.id === buttonId){
//             students.splice(index, 1);
//         }
//     });
//     domStringBuilder(students);
//     addDeleteEvents();
// };

// const addDeleteEvents = () => {
//     const expelButton = document.getElementsByClassName('expelButton');
//     for(let i=0; i<expelButton.length; i++){
//         expelButton[i].addEventListener('click', deleteFunction);
//     }
// };


// displayStudents =() => {
//     Students.forEach((student) => {
//         console.log(student.name+":"+student.house)
//     });
// }



// const StudentCardBuilder = () => {
//     let studentString = '';
//     Students.forEach((student) => {
//         studentString += `<div class="card col-3">`;
//         studentString +=  `<div class="card-body">`;
//         studentString += `<div class="card-title"><h4>${student.name}</h4></div>`;
//         studentString += `<div class="card-text"><h4>${student.house}</h4></div>`;
//         studentString +=  `<a href="#" class="btn btn-danger expelButton id=${student.id}">Expel</a>`
//         studentString += `</div>`;
//         studentString += `</div>`;
        
    
    
    
// });
// printToDom('myStudents', studentString);

// };

// const addStudent = () => {
//     // e.preventDefault();
//     // const inputText = inputStudent.value;
//     var myStudent={
//         name:"",
//         house:"",
//         id: `student${StudentCounter}`,

//     }
//     console.log(document.getElementById("studentName").value);
//     let newHouse = Math.floor((Math.random() * House.length));
//     console.log(House[newHouse]);
//     myStudent.name= document.getElementById("studentName").value;
//     myStudent.house=(House[newHouse]);
//     Students.push(myStudent);
//     displayStudents();
//     StudentCardBuilder(Students);
//     StudentCounter++;
//     inputStudent.value = '';
// };

// const expelStudent = (e) => {
//     const buttonId = e.target.id

// };

// const buttonEvents = () => {
//     document.getElementById("submitButton").addEventListener('click', addStudent);
   
// };

// const init = () => {

//     buttonEvents();
//     // StudentCardBuilder();
// };

// init();


const addButton = document.getElementById('addButton');
const inputStudent = document.getElementById('inputStudent');

const House = [
          'Slytherin', 'Ravenclaw', 'Gryffindor', 'Hufflepuff'
    ];

const students = [];
let studentCounter = 1;


const printToDom = (divID, textToPrint) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML = textToPrint;

};

const deleteFunction = (e) => {
    const buttonId = e.target.id;
    students.forEach((student, index) => {
        if(student.id === buttonId){
            students.splice(index, 1);
        }
    });
    domStringBuilder(students);
    addDeleteEvents();
};

const addDeleteEvents = () => {
    const deleteButtons = document.getElementsByClassName('deleteButton');
    for(let i=0; i<deleteButtons.length; i++){
        deleteButtons[i].addEventListener('click', deleteFunction);
    }
};

const domStringBuilder = (arrayToPrint) => {
    let domString = '';
    arrayToPrint.forEach((student) => {
        // domString += `<h2>${student.item}</h2>`
        console.log(student);
        domString += `<div class="card col-3">`
        domString += `<div class="card-body">`
        domString += `<h5 class="card-title">${student.name}</h5>`
        domString += `<h5 class="card-text">${student.house}</h5>`
        domString += `<a class="btn btn-danger deleteButton" id=${student.id}>Expel</a>`
        domString += `</div>`
        domString += `</div>`
        
    });
   
    printToDom('student-container', domString);
};

const addStudent = (e) => {
    e.preventDefault();
    const inputText = inputStudent.value;
    const newStudent = {
        name: inputText,
        house:House[Math.floor((Math.random() * House.length))],
        id: `student${studentCounter}`,
    };
    students.push(newStudent);
    studentCounter++;
    // let newHouse = Math.floor((Math.random() * House.length));
    // console.log(newHouse);
    domStringBuilder(students);
    addDeleteEvents();
    inputStudent.value = '';
};

const eventListeners = () => {
   addButton.addEventListener('click', addStudent);
};

const init = () => {
eventListeners()
};

init();