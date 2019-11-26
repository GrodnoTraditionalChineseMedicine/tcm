import {actionTypes} from "./index";
import { message } from 'antd';
import axios from "axios";

export const changeCarousels = (carousels) => ({
    type: actionTypes.CHANGE_CAROUSELS,
    carousels
});

export const getAllCarousels = () => {
    return (dispatch) => {
        axios.get("/api/manage/containers/carousels")
            .then((res)=>{
                const result = res.data.data;
                dispatch(changeCarousels(result.carousels))
            })
    }
};
/*

export const deleteRole = (roleId) => {
    return (dispatch) => {
        axios.post("/api/manage/containers/role/delete", {roleId})
            .then((res)=>{
                const result = res.data.data;
                dispatch(changeRoles(result.roles, result.count));
                message.info(result.message);
            })
    }
};

export const updateRole = (role) => {
    return (dispatch) => {
        axios.post("/api/manage/containers/role/update", role)
            .then((res)=>{
                const result = res.data.data;
                dispatch(changeRoles(result.roles, result.count));
                message.info(result.message);
            })
    }
};

export const addRole = (role) => {
    return (dispatch) => {
        axios.post("/api/manage/containers/role/add", role)
            .then((res)=>{
                const result = res.data.data;
                dispatch(changeRoles(result.roles, result.count));
                message.info(result.message);
            })
    }
};*/
