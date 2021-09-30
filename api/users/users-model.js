const {nanoid} = require('nanoid')

function getId(){
    return nanoid().slice(0,5)
}

//fake database
const initializeUsers = () => ([
    {id: getId(), username: "ScubaSteve", password: "hello"},
    {id: getId(), username: "Allie", password: "coffee"}
])

let users = initializeUsers()

//DATABASE ACCESS FUNCTIONS
//returns an array of all users
const find = () => {
    return Promise.resolve(users)
}

//adds a new user to database
const insert = ({username, password}) => {
    const newUser = {id: getId(), username, password}

    users.push(newUser)

    return Promise.resolve(newUser)
}


//exports
module.exports = {find, insert}
