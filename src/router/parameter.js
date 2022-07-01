const type = function () {
    const {type} = this.$route.params;
    return type
}

const page = function () {
    const {page} = this.$route.params;
    return page
}

export {
    type, page,
}