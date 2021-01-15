import axios from "axios";
const BASEURL = "https://randomuser.me/api/";
const QUERY = "?results="

export default {
    getEmployees: function (amount) {
        return axios.get(BASEURL + QUERY + amount,
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                }
            });
    }
}

