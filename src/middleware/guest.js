import {store} from "@/store"

export default {
    check: function(){
        return store.state.auth.token;
    },
    redirectTo: function(){
        return {name: "index"};
    },
}