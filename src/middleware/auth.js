import {auth} from "@/utils/auth";

export default {
    check: function(){
        return auth.login;
    },
    redirectTo: function(){
        return {name: "login"};
    },
}