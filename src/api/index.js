// import axios from 'axios'

// axios.defaults.baseURL = '';
// axios.defaults.common['Authorization'] = '';

// import axios from "axios";

import {testContent} from "@/api/test";

export const mail = {
    starred(id, bool) {
        return new Promise(res => res({
            data: {
                message: `success ${id} mail ${bool ? 'star' : 'unstar'}`,
            }
        }))
    },
    get(id) {
        return new Promise(res => res({
                data: {
                    id: 1,
                    title: 'aaa',
                    content: testContent,
                    sender: {
                        name: "send user name",
                        email: "send_user_email@example.com",
                    },
                    receiver: {
                        name: "receive user name",
                        email: "receive_user_email@example.com",
                    },
                    dateTime: '2022-07-01 03:05:01',
                    isStarred: false,
                    attachments: {
                        downloadAll: "#downloadAll",
                        files: [
                            {
                                name: 'file1.jpg',
                                size: '13kb',
                                download: '#download_file1',
                            },
                            {
                                name: 'file2.zip',
                                size: '2mb',
                                download: '#download_file2',
                            },
                        ],
                    }
                }, id
            })
        );
    },
    list(page) {
        return new Promise(res => res({
                data: {
                    list: [
                        {idx: 0, id: 1, title: 'aaa title', sender: 'user1', dateTime: '2022-07-01 03:05:01', isStarred: false},
                        {idx: 1, id: 2, title: 'bbb title', sender: 'user2', dateTime: '2022-06-28 03:05:01', isStarred: true},
                        {idx: 2, id: 3, title: 'ccc title', sender: 'user3', dateTime: '2022-06-23 03:05:01', isStarred: false},
                    ],
                    info: {
                        currentNumber: 50,
                        totalNumber: 100,
                        currentPage: 1,
                        totalPage: 10,
                        perNumber: 10,
                    },page
                },
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