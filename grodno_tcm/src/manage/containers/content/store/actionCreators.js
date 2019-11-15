import {actionTypes} from "./index";
import { message } from 'antd';
import axios from "axios";

export const changeContent = (content) => ({
    type: actionTypes.CHANGE_CONTENT,
    content: content
});

export const getContent = () => {
    return (dispatch) => {
        axios.get("/api/manage/containers/content")
            .then((res)=>{
                const result = res.data.data;
                /*console.log("article res", res.data.data);*/
                dispatch(changeContent(result.menus))
            })
    }
};

export const deleteRole = (id) => {
    return (dispatch) => {
        axios.post("/api/manage/containers/role/delete", id)
            .then((res)=>{
                const result = res.data.data;
                /*dispatch(changeRoles(result.roles, result.count));*/
                message.info(result.message);
            })
    }
};

export const updateRole = (role) => {
    return (dispatch) => {
        axios.post("/api/manage/containers/role/update", role)
            .then((res)=>{
                const result = res.data.data;
                /*dispatch(changeRoles(result.roles, result.count));*/
                message.info(result.message);
            })
    }
};

export const addRole = (role) => {
    return (dispatch) => {
        axios.post("/api/manage/containers/role/add", role)
            .then((res)=>{
                const result = res.data.data;
                /*dispatch(changeRoles(result.roles, result.count));*/
                message.info(result.message);
            })
    }
};