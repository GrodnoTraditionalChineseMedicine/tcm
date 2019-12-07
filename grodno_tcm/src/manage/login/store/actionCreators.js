import {actionTypes} from "./index";
import axios from "axios";

export const changeLogout = () => ({
    type: actionTypes.CHANGE_LOGOUT,
    isLogged: false,
    currentUser: {}
});

/*export const login = (values) => {
    return (dispatch) => {
        axios.get("/api/manage/login?username=" + values.username + "&password=" + values.password)
            .then((res)=>{
                const result = res.data.data;
                console.log("res", result);
                /!*if (result.isLogged) {
                    dispatch(changeLogin(result.currentUser));
                } else {
                    alert('登录失败！');
                }*!/
            })
    }
};*/

export const handleLogin = (values) =>{
    fetchPosts('/api/manage/login', actionTypes.LOGIN_ACTION, 'loginData', values);
};

export const fetchPosts = (url, actionType, subreddit, data) => {
    console.log("fetchPosts", url, actionType, subreddit, data);
    return (dispatch) => {
        return axios.post(url, data).then((res)=>{
            console.log(res.data);
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