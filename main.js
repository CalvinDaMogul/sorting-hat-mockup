console.log("Hello World!");

const House = [
            'Slytherin', 'Ravenclaw', 'Gryffindor', 'Hufflepuff'
];
const Students = [];


const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
    console.log(selectedDiv);
};

displayStudents =() => {
    Students.forEach((student) => {
        console.log(student.name+":"+student.house)
    });
}



const StudentCardBuilder = () => {
    let studentString = '';
    Students.forEach((student) => {
        studentString += `<div class="card" style="width: 18rem;">`;
        studentString +=  `<div class="card-body">`;
        studentString += `<div class="card-title"><h1>${student.name}</h1></div>`;
        studentString += `<div class="card-text"><p>${student.house}</p></div>`;
        studentString +=  `<a href="#" class="btn btn-primary">Expel</a>`
        studentString += `</div>`;
        studentString += `</div>`;
        
    
    
    
});
printToDom('myStudents', studentString);

};

const addStudent = () => {
    var myStudent={
        name:"",
        house:"",

    }
    console.log(document.getElementById("studentName").value);
    let newHouse = Math.floor((Math.random() * House.length));
    console.log(House[newHouse]);
    myStudent.name= document.getElementById("studentName").value;
    myStudent.house=(House[newHouse]);
    Students.push(myStudent);
    displayStudents();
    StudentCardBuilder(Students);
}

const buttonEvents = () => {
    document.getElementById("submitButton").addEventListener('click', addStudent);
   
};

const init = () => {

    buttonEvents();
    // StudentCardBuilder();
};

init();