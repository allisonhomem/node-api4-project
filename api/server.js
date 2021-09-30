//imports
const express = require('express');
const Users = require('./users/users-model.js');

const server = express();

server.use(express.json());

//ENDPOINTS
//returns an array of users
server.get('/api/users', async (req, res) => {
    try{
       const users = await Users.find()

       if(!users){
           res.status(500).json({message: "no users found"})
       }
       else{
           res.status(200).json(users)
       }
    }
    catch (err) {
        res.status(500).json({message: "an error occurred while attempting to fetch users"})
    }
})

//creates a user from {username, password} in the request body and responds with newly create user
server.post('/api/register', async (req, res) => {
    try {
        const { username, password } = req.body

        if(!username || !password){
            res.status(404).json({message: "must have username and password"})
        }
        else {
            const newUser = await Users.insert({username, password})

            res.status(201).json(newUser)
        }
    }
    catch (err) {
        res.status(500).json({message: "an error occurred while trying to create a new user" })
    }
})


//exports
module.exports = server;