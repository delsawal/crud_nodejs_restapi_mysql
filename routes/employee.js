const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/add',(req,res,next)=>{
    let employee = req.body;
    query = "INSERT INTO employee (firstName, lastName, position) VALUES (?,?,?)";
    connection.query(query,[employee.firstName, employee.lastName, employee.position],(err,results)=>{
        if(!err){
            return res.status(200).json({message: "Employee added successfully!"})
        } else
            return res.status(200).json(err);
    });
})

router.get('/view',(req,res,next)=>{
    let employee = req.body;
    query = "SELECT * FROM employee";
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        } else{
            return res.status(200).json(err);
        }
    });
})

router.patch('/update/:id',(req,res,next)=>{
    const id = req.params.id;
    let employee = req.body;
    query = "UPDATE employee SET firstName=?, lastName=?, position=? WHERE id=?";
    connection.query(query,[employee.firstName, employee.lastName, employee.position,id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message: "Employee id not found!"});
            }
                return res.status(404).json({message: "Employee updated successfully!!"});
        } else{
            return res.status(200).json(err);
        }
    });
})

router.delete('/delete/:id',(req,res,next)=>{
    const id = req.params.id;
    var query = "DELETE FROM employee WHERE id=?";
    connection.query(query,[id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message: "Employee id not found!"});
            }
                return res.status(404).json({message: "Employee deleted successfully!!"});
        } else{
            return res.status(200).json(err);
        }
    });
})

module.exports = router;


