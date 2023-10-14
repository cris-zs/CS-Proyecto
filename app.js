class House{
    constructor(house,students){
        this.house = house;
        this.students = students;
    }
}

class Student{
    constructor(name, grade, professor, house, picture){
        this.name = name;
        this.grade = grade;
        this.professor = professor;
        this.house = house;
        this.picture = picture;
    }
}

let student1 = new Student('Edelgard von Hresvelg', 10, 'Manuela Casagranda','Águila Negra', './img/student0.png');
let student2 = new Student('Hubert von Vestra', 7, 'Manuela Casagranda','Águila Negra', './img/student1.png');
let student3 = new Student('Dorothea Arnault', 8, 'Manuela Casagranda','Águila Negra', './img/student2.png');
let student4 = new Student('Ferdinand von Aegir', 9, 'Manuela Casagranda','Águila Negra', './img/student3.png');
let student5 = new Student('Bernadetta von Varley', 5, 'Manuela Casagranda','Águila Negra', './img/student4.png');
let student6 = new Student('Caspar von Bergliez', 8, 'Manuela Casagranda','Águila Negra', './img/student5.png');
let student7 = new Student('Petra Macneary', 10, 'Manuela Casagranda','Águila Negra', './img/student6.png');
let student8 = new Student('Linhardt von Hevring', 5, 'Manuela Casagranda','Águila Negra', './img/student7.png');

let student10 = new Student('Dimitri Alexandre Blaiddyd', 10, 'Byleth Eisner', 'León Azul' ,'./img/100px-Small_portrait_dimitri_fe16.png');
let student11 = new Student('Dedue Molinaro', 8, 'Byleth Eisner', 'León Azul' , './img/100px-Small_portrait_dedue_fe16.png');
let student12 = new Student('Felix Hugo Fraldarius', 10,'Byleth Eisner', 'León Azul','./img/100px-Small_portrait_felix_fe16.png' );
let student13 = new Student('Mercedes von Martritz', 7, 'Byleth Eisner', 'León Azul', './img/100px-Small_portrait_mercedes_fe16.png');
let student14 = new Student('Ashe Ubert', 8, 'Byleth Eisner', 'León Azul', './img/100px-Small_portrait_ashe_fe16.png');
let student15 = new Student('Annette Fantine Dominic', 8, 'Byleth Eisner', 'León Azul', './img/100px-Small_portrait_annette_fe16.png');
let student16 = new Student('Sylvain Jose Gautier', 9, 'Byleth Eisner', 'León Azul', './img/100px-Small_portrait_sylvain_fe16.png' );
let student17 = new Student('Ingrid Brandl Galatea', 10, 'Byleth Eisner', 'León Azul', './img/100px-Small_portrait_ingrid_fe16.png');

let student18 = new Student('Claude von Riegan', 10, 'Hanneman von Essar', 'Ciervo Dorado', './img/100px-Small_portrait_claude_fe16.png');
let student19 = new Student('Lorenz Hellman Gloucester', 8, 'Hanneman von Essar', 'Ciervo Dorado','./img/100px-Small_portrait_lorenz_fe16.png');
let student20 = new Student('Hilda Valentine Goneril', 7, 'Hanneman von Essar', 'Ciervo Dorado', './img/100px-Small_portrait_hilda_fe16.png' );
let student21 = new Student('Raphael Kirsten', 7, 'Hanneman von Essar', 'Ciervo Dorado', './img/100px-Small_portrait_raphael_fe16.png' );
let student22 = new Student('Lysithea von Ordelia', 8, 'Hanneman von Essar', 'Ciervo Dorado', './img/100px-Small_portrait_lysithea_fe16.png');
let student23 = new Student('Ignatz Victor', 7, 'Hanneman von Essar', 'Ciervo Dorado', './img/100px-Small_portrait_ignatz_fe16.png');
let student24 = new Student('Marianne von Edmund', 9, 'Hanneman von Essar', 'Ciervo Dorado', './img/100px-Small_portrait_marianne_fe16.png');
let student25 = new Student('Leonie Pinelli', 7,'Hanneman von Essar', 'Ciervo Dorado', './img/100px-Small_portrait_leonie_fe16.png');


var blackEagleStudents = [student1,student2,student3,student4,student5,student6,student7,student8];
var blueLionStudents = [student10, student11,student12,student13,student14,student15,student16,student17];
var goldenDeerStudents = [student18,student19,student20,student21,student22,student23,student24,student25];

var beHouse = new House('Black Eagles', blackEagleStudents);
var blHouse = new House('Blue Lions', blueLionStudents);
var gdHouse = new House('Golden Deer', goldenDeerStudents);
var houses = [beHouse, blHouse, gdHouse];


let table = document.getElementById('students-table');
let showFoundStudent = document.getElementById('show-student');
let currentPage = document.getElementById('page-identifier');

//export{blackEagleStudents};




if (currentPage.textContent == 'Black Eagles'){
    let foundStudent = document.getElementById('found-student');
    let modifyInfo = document.getElementById('modify-info');
    foundStudent.style.display='none';
    //modifyInfo.style.display = 'none';

    function clearTable(){
        table.innerHTML = '';
    }

    function showStudents(array){
        clearTable();
        blackEagleStudents.forEach((student, studentIndex) =>{
            let element = `
                     <tr>
                         <td><img src = ${student.picture} style="display: block;"></img> ${student.name}</td>
                         <td>${student.grade}</td>
                         <td>${student.professor}</td>
                         <td>${student.house}</td>
                         <td><button onclick ="deleteStudent(${studentIndex})">Eliminar</button></td>
                         <td><button onclick = "editStudent(${studentIndex})">Editar</button></td>
                     </tr>
                     `;
            table.innerHTML += element;
            
        });

    }
    function editStudent(studentIndex){
        modifyInfo.innerHTML = '';
        let editElement = `
        <p>Información a cambiar:</p>
        <input id = "edit-name" value = "${blackEagleStudents[studentIndex].name}" type="text">
        <input id = "edit-grade" value = "${blackEagleStudents[studentIndex].grade}" type="number">
        <input id = "edit-professor" value = "${blackEagleStudents[studentIndex].professor}" type="text">
        <select name="my-house" id="edit-house">
            <option value="0">Aguila Negra</option>
            <option value="1">Leon Azul</option>
            <option value="2">Ciervo Dorado</option>
        </select>
        <button onclick ="saveChanges(${studentIndex})">Guardar<button/>
     `;
        modifyInfo.innerHTML += editElement;

    }

    function saveChanges(studentIndex){
        let currentInfo = blackEagleStudents[studentIndex];
        let editName = document.getElementById('edit-name').value;
        let editGrade = document.getElementById('edit-grade').value;
        let editProfessor = document.getElementById('edit-professor').value;
        let editHouse = document.getElementById('edit-house').textContent;
        
        if(editName != currentInfo.name){
            currentInfo.name = editName;
            blackEagleStudents.splice(studentIndex, 1, currentInfo);
            showStudents(studentIndex);
        }
        if(editGrade != currentInfo.grade){
            currentInfo.grade = editGrade;
            blackEagleStudents.splice(studentIndex, 1, currentInfo);
            showStudents(studentIndex);
        }
        if(editProfessor != currentInfo.professor){
            currentInfo.professor = editProfessor;
            blackEagleStudents.splice(studentIndex,1, currentInfo);
            showStudents(studentIndex);
        }
        if(editHouse != currentInfo.house){
            console.log(editHouse)
        }
    }

    function deleteStudent(studentIndex){
        //let row = button.parentNode.parentNode;
        //let deleteRow = row.cells[0].textContent;
        blackEagleStudents.splice(studentIndex, 1);
        showStudents(studentIndex);
    }

    function addStudent(){
        let studentName = document.getElementById('name').value;
        let studentGrade = document.getElementById('grade').value;
        let studentProfessor = document.getElementById('professor').value;
        let studentHouse = document.getElementById('house').value;
        let newStudent = new Student(studentName,studentGrade,studentProfessor,studentHouse);
        blackEagleStudents.push(newStudent);
        showStudents();
    }

    function searchStudent(){
        showFoundStudent.innerHTML = '';    
        let studentToFind = document.getElementById('search-student').value;
        //let studentToFindLower = studentToFind.toLowerCase();
        //let found = blackEagleStudents.filter(element => element.name == studentToFind);
        let found = blackEagleStudents.filter(student => student.name.includes(studentToFind));
        if(found.length == 0){
            alert('No se encontró el estudiante');
            foundStudent.style.display = 'none';
        } else{
            console.log(found)
            foundStudent.style.display='block';
            let newElement = `
            <tr>
                <td> <img src=${found[0].picture} style="display: block;"></img> ${found[0].name}</td>
                <td>${found[0].grade}</td>
                <td>${found[0].professor}</td>
                <td>${found[0].house}</td>
            </tr>
            `;
            showFoundStudent.innerHTML += newElement;
        }
    }

    function sortByName(){
        let sortedName = blackEagleStudents.sort(function(a,b){
            if(a.name > b.name){
                return 1;
            }
            if(a.name < b.name){
                return -1;
            }
            return 0;
        });
        showStudents(sortedName);
    }
    
    
    showStudents();
    document.getElementById('add-student').addEventListener('click', addStudent);
    document.getElementById('search').addEventListener('click', searchStudent);
    document.getElementById('sort-by-name').addEventListener('click', sortByName);
} else if(currentPage.textContent == 'Blue Lions'){
    let foundStudent = document.getElementById('found-student');
    let modifyInfo = document.getElementById('modify-info');
    foundStudent.style.display='none';
    //modifyInfo.style.display = 'none';

    function clearTable(){
        table.innerHTML = '';
    }

    function showStudents(array){
        clearTable();
        blueLionStudents.forEach((student, studentIndex) =>{
            let element = `
                     <tr>
                         <td><img src = ${student.picture} style="display: block;"></img> ${student.name}</td>
                         <td>${student.grade}</td>
                         <td>${student.professor}</td>
                         <td>${student.house}</td>
                         <td><button onclick ="deleteStudent(${studentIndex})">Eliminar</button></td>
                         <td><button onclick = "editStudent(${studentIndex})">Editar</button></td>
                     </tr>
                     `;
            table.innerHTML += element;
            
        });

    }
    function editStudent(studentIndex){
        modifyInfo.innerHTML = '';
     let editElement = `
        <p>Información a cambiar:</p>
        <input id = "edit-name" value = "${blueLionStudents[studentIndex].name}" type="text">
        <input id = "edit-grade" value = "${blueLionStudents[studentIndex].grade}" type="number">
        <input id = "edit-professor" value = "${blueLionStudents[studentIndex].professor}" type="text">
        <select name="my-house" id="edit-house">
            <option value="0">Aguila Negra</option>
            <option value="1">Leon Azul</option>
            <option value="2">Ciervo Dorado</option>
        </select>
        <button onclick ="saveChanges(${studentIndex})">Guardar<button/>
     `;
     modifyInfo.innerHTML += editElement;

    }

    function saveChanges(studentIndex){
        let currentInfo = blueLionStudents[studentIndex];
        let editName = document.getElementById('edit-name').value;
        let editGrade = document.getElementById('edit-grade').value;
        let editProfessor = document.getElementById('edit-professor').value;
        let editHouse = document.getElementById('edit-house').textContent;
        
        if(editName != currentInfo.name){
            currentInfo.name = editName;
            blueLionStudents.splice(studentIndex, 1, currentInfo);
            showStudents(studentIndex);
        }
        if(editGrade != currentInfo.grade){
            currentInfo.grade = editGrade;
            blueLionStudents.splice(studentIndex, 1, currentInfo);
            showStudents(studentIndex);
        }
        if(editProfessor != currentInfo.professor){
            currentInfo.professor = editProfessor;
            blueLionStudents.splice(studentIndex,1, currentInfo);
            showStudents(studentIndex);
        }
        if(editHouse != currentInfo.house){
            console.log(editHouse)
        }
    }

    function deleteStudent(studentIndex){
        //let row = button.parentNode.parentNode;
        //let deleteRow = row.cells[0].textContent;
        blueLionStudents.splice(studentIndex, 1);
        showStudents(studentIndex);
    }

    function addStudent(){
        let studentName = document.getElementById('name').value;
        let studentGrade = document.getElementById('grade').value;
        let studentProfessor = document.getElementById('professor').value;
        let studentHouse = document.getElementById('house').value;
        let newStudent = new Student(studentName,studentGrade,studentProfessor,studentHouse);
        blueLionStudents.push(newStudent);
        showStudents();
    }

    function searchStudent(){
        showFoundStudent.innerHTML = '';    
        let studentToFind = document.getElementById('search-student').value;
        //let studentToFindLower = studentToFind.toLowerCase();
        //let found = blueLionStudents.filter(element => element.name == studentToFind);
        let found = blueLionStudents.filter(student => student.name.includes(studentToFind));
        if(found.length == 0){
            alert('No se encontró el estudiante');
            foundStudent.style.display = 'none';
        } else{
            console.log(found)
            foundStudent.style.display='block';
            let newElement = `
            <tr>
                <td> <img src=${found[0].picture} style="display: block;"></img> ${found[0].name}</td>
                <td>${found[0].grade}</td>
                <td>${found[0].professor}</td>
                <td>${found[0].house}</td>
            </tr>
            `;
            showFoundStudent.innerHTML += newElement;
        }
    }

    function sortByName(){
        let sortedName = blueLionStudents.sort(function(a,b){
            if(a.name > b.name){
                return 1;
            }
            if(a.name < b.name){
                return -1;
            }
            return 0;
        });
        showStudents(sortedName);
    }
    
    
    showStudents();
    document.getElementById('add-student').addEventListener('click', addStudent);
    document.getElementById('search').addEventListener('click', searchStudent);
    document.getElementById('sort-by-name').addEventListener('click', sortByName);
} else if (currentPage.textContent == 'Golden Deer'){
    let foundStudent = document.getElementById('found-student');
    let modifyInfo = document.getElementById('modify-info');
    foundStudent.style.display='none';
    //modifyInfo.style.display = 'none';

    function clearTable(){
        table.innerHTML = '';
    }

    function showStudents(array){
        clearTable();
        goldenDeerStudents.forEach((student, studentIndex) =>{
            let element = `
                     <tr>
                         <td><img src = ${student.picture} style="display: block;"></img> ${student.name}</td>
                         <td>${student.grade}</td>
                         <td>${student.professor}</td>
                         <td>${student.house}</td>
                         <td><button onclick ="deleteStudent(${studentIndex})">Eliminar</button></td>
                         <td><button onclick = "editStudent(${studentIndex})">Editar</button></td>
                     </tr>
                     `;
            table.innerHTML += element;
            
        });

    }
    function editStudent(studentIndex){
        modifyInfo.innerHTML = '';
     let editElement = `
        <p>Información a cambiar:</p>
        <input id = "edit-name" value = "${goldenDeerStudents[studentIndex].name}" type="text">
        <input id = "edit-grade" value = "${goldenDeerStudents[studentIndex].grade}" type="number">
        <input id = "edit-professor" value = "${goldenDeerStudents[studentIndex].professor}" type="text">
        <select name="my-house" id="edit-house">
            <option value="0">Aguila Negra</option>
            <option value="1">Leon Azul</option>
            <option value="2">Ciervo Dorado</option>
        </select>
        <button onclick ="saveChanges(${studentIndex})">Guardar<button/>
     `;
     modifyInfo.innerHTML += editElement;

    }

    function saveChanges(studentIndex){
        let currentInfo = goldenDeerStudents[studentIndex];
        let editName = document.getElementById('edit-name').value;
        let editGrade = document.getElementById('edit-grade').value;
        let editProfessor = document.getElementById('edit-professor').value;
        let editHouse = document.getElementById('edit-house').textContent;
        
        if(editName != currentInfo.name){
            currentInfo.name = editName;
            goldenDeerStudents.splice(studentIndex, 1, currentInfo);
            showStudents(studentIndex);
        }
        if(editGrade != currentInfo.grade){
            currentInfo.grade = editGrade;
            goldenDeerStudents.splice(studentIndex, 1, currentInfo);
            showStudents(studentIndex);
        }
        if(editProfessor != currentInfo.professor){
            currentInfo.professor = editProfessor;
            goldenDeerStudents.splice(studentIndex,1, currentInfo);
            showStudents(studentIndex);
        }
        if(editHouse != currentInfo.house){
            console.log(editHouse)
        }
    }

    function deleteStudent(studentIndex){
        //let row = button.parentNode.parentNode;
        //let deleteRow = row.cells[0].textContent;
        goldenDeerStudents.splice(studentIndex, 1);
        showStudents(studentIndex);
    }

    function addStudent(){
        let studentName = document.getElementById('name').value;
        let studentGrade = document.getElementById('grade').value;
        let studentProfessor = document.getElementById('professor').value;
        let studentHouse = document.getElementById('house').value;
        let newStudent = new Student(studentName,studentGrade,studentProfessor,studentHouse);
        goldenDeerStudents.push(newStudent);
        showStudents();
    }

    function searchStudent(){
        showFoundStudent.innerHTML = '';    
        let studentToFind = document.getElementById('search-student').value;
        //let studentToFindLower = studentToFind.toLowerCase();
        //let found = goldenDeerStudents.filter(element => element.name == studentToFind);
        let found = goldenDeerStudents.filter(student => student.name.includes(studentToFind));
        if(found.length == 0){
            alert('No se encontró el estudiante');
            foundStudent.style.display = 'none';
        } else{
            console.log(found)
            foundStudent.style.display='block';
            let newElement = `
            <tr>
                <td> <img src=${found[0].picture} style="display: block;"></img> ${found[0].name}</td>
                <td>${found[0].grade}</td>
                <td>${found[0].professor}</td>
                <td>${found[0].house}</td>
            </tr>
            `;
            showFoundStudent.innerHTML += newElement;
        }
    }

    function sortByName(){
        let sortedName = goldenDeerStudents.sort(function(a,b){
            if(a.name > b.name){
                return 1;
            }
            if(a.name < b.name){
                return -1;
            }
            return 0;
        });
        showStudents(sortedName);
    }
    
    
    showStudents();
    document.getElementById('add-student').addEventListener('click', addStudent);
    document.getElementById('search').addEventListener('click', searchStudent);
    document.getElementById('sort-by-name').addEventListener('click', sortByName);

}