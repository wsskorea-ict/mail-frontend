// import axios from 'axios'

// axios.defaults.baseURL = '';
// axios.defaults.common['Authorization'] = '';

// import axios from "axios";

export const mail = {
    list() {
        return new Promise(res => res(
            {
                data: [
                    {id: 1, content: 'aaa'},
                    {id: 2, content: 'bbb'},
                    {id: 3, content: 'ccc'}
                ]
            }
        ));
        // return axios.get('/mail');
    },
}