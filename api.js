const dboperations = require('./dbOperations');
var Student = require('./student');

dboperations.getStudents().then(result =>{
    console.log(result);
})

