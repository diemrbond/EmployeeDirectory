import axios from "axios";
const BASEURL = "https://randomuser.me/api/";
const QUERY = "?nat=au&results="

export default function API(amount) {
    return axios.get(BASEURL + QUERY + amount,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        });
}


