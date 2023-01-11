import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:5353"
})

instance.defaults.headers.common['Access-Control-Allow-Origin'] = "http://localhost:5353"; 
instance.defaults.withCredentials = true;   // serve para poder enviar os tokens no header


export default instance;