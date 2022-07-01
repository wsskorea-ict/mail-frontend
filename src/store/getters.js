export default {
    /** mail **/
    checkedMailNumber: state => {
        return state.checkedMailIds.filter(b => b).length
    },
    checkedMailList: state => {
        return state.mailList.filter(mail => state.checkedMailIds[mail.idx]);
    },
    relativeDateTime: () => dateTime => {
        return dateTime;
    },
}