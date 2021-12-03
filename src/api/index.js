const axios = require("axios");

const url = "http://0.0.0.0:5000";

const config ={
    mode:'no-cors',
    headers:{
        'Accept':"*/*",
        'Access-Control-Allow-Origin':"*",
        'Content-type':"application/json"
    }
}

const getUser = () =>{
    return axios.get(`${url}/users`, config);
}

module.exports = {
    getUser
}