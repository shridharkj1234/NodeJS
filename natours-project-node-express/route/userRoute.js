const express =require("express");
const { getAllUsers, getUserById, createUser, updateUserById, deleteUserById } = require("../controller/userController");
const router = express.Router();
 
//get all users
router.get('/',getAllUsers)

//get user by ID
router.get('/:id',getUserById)

//create new user
router.post('/',createUser)

//Update User
router.patch('/:id',updateUserById)

//Delete User
router.delete('/',deleteUserById)

module.exports=router