import {actionTypes} from "./index";
import axios from "axios";

export const changeLogout = () => ({
    type: actionTypes.CHANGE_LOGOUT,
    isLogged: false,
    currentUser: {}
});

export const handleLogin = (values) =>{
    fetchPosts('/api/manage/login', actionTypes.LOGIN_ACTION, 'loginData', values);
};

export const fetchPosts = (url, actionType, subreddit, data) => {
    /*console.log("fetchPosts", url, actionType, subreddit, data);*/
    return (dispatch) => {
        return axios.post(url, data).then((res)=>{
            dispatch(receive(actionType, subreddit, res.data.data));
        }).catch((err)=>{
            console.log(err.response);
        })
    }
};

export const receive = ( typeName, dataName, data) => {
    return {
        type: typeName,
        [dataName]: data
    }
};