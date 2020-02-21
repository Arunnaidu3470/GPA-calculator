

var finalGrades =[];
var finalCredits =[];
const TOTAL_SUBJECTS=8;
function calculateGPA(){
    finalGrades=[];
    finalCredits=[];
    console.log('calc gpa');
    var ele= document.getElementsByName('g1');

    //collecting grades
    for(var i =0;i<TOTAL_SUBJECTS;i++){
        var ele= document.getElementsByName('g'+(i+1));
        finalGrades.push(getSelectedGrade(ele));
    }
    console.log(finalGrades);

    //collecting credits
    for(var i=0;i<TOTAL_SUBJECTS;i++){
        var ele= document.getElementById('g'+(i+1)+'c').value;
        finalCredits.push(ele);
        // finalCredits.push(ele.);
    }
    console.log(finalCredits); 
    calGpa();
}

/**
 * returns grade in char
 * @param {*} index 
 */
function getGrade(index){
    var grades = ['O', 'A+', 'A', 'B+', 'B', 'C', 'P', 'F', 'Ab'];
    return grades[index];
}

/**
 * returns grade in int
 * @param {*} index 
 */
function getGradeValue(index){
    var values=[10,9,8,7,6,5,4,0,0];
    return values[index];
}

function getSelectedGrade(ele){
    // console.log('selecting grade'+ele);
    // console.log( ele);
    for(var i =0;i<ele.length;i++){
        if(ele[i].checked)
            return getGradeValue (i);
            // console.log('checked = '+getGrade(i));
    }
}

function calGpa(){
    var sumOfCredits=eval(finalCredits.join('+'));
    var sumOfGrades=0;
    for(var i=0;i<TOTAL_SUBJECTS;i++){
        var grade=finalGrades[i];
        var credit=finalCredits[i];
        var sumOfGrades=sumOfGrades+(grade*credit);
    }
    console.log(sumOfGrades);
    console.log(sumOfCredits);
    alert(sumOfGrades/sumOfCredits);
    return(sumOfGrades/sumOfCredits);
}