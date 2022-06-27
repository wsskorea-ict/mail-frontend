// import axios from 'axios'

// axios.defaults.baseURL = '';
// axios.defaults.common['Authorization'] = '';

export default {
    mail: {
        getAll() {
            return new Promise(res => res([1,2,3]));
            // return axios.get('/mail');
        },
    }
}