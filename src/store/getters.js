export default {
    /** mail **/
    checkMailNumber(state) {
        return state.checkedMailList.filter(b => b).length
    }
}