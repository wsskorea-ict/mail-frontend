import {getAuth} from "@/utils/auth";

export default {
    check: function(){
        return getAuth();
    },
    redirectTo: function(){
        return {name: "login"};
    },
}