import  { create } from 'apisauce';

const apiUrlTest  = 'http://localhost:8070';
const  apiUrlLive  =  '';

const api =  create({
    baseURL: apiUrlLive,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})


export default api;