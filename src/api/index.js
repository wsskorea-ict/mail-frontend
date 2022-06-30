// import axios from 'axios'

// axios.defaults.baseURL = '';
// axios.defaults.common['Authorization'] = '';

// import axios from "axios";

export const mail = {
    list(page) {
        return new Promise(res => res({
                data: [
                    {idx: 0, id: 1, content: 'aaa'},
                    {idx: 1, id: 2, content: 'bbb'},
                    {idx: 2, id: 3, content: 'ccc'}
                ], page
            })
        );
        // return axios.get('/mail');
    },
    destroy(ids) {
        return new Promise(res => res({
                data: {
                    message: 'success'
                }, ids
            })
        );
    }
}