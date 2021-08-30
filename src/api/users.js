import fetch from "@/axios";

let users = {}
users.login = (data) => {
    return fetch.post('/user/login', data)
}

export default users;