import {actionTypes} from "./index";
import { message } from 'antd';
import axios from "axios";

export const changeArticles = (articles) => ({
    type: actionTypes.CHANGE_ARTICLES,
    articles: articles
});

export const getAllArticles = () => {
    return (dispatch) => {
        axios.get("/api/manage/containers/articles")
            .then((res)=>{
                const result = res.data.data;
                dispatch(changeArticles(result.articles));
            })
    }
};

export const getArticlesByCode = (menuCode) => {
    return (dispatch) => {
        axios.get("/api/manage/containers/articles?code=" + menuCode)
            .then((res)=>{
                const result = res.data.data;
                dispatch(changeArticles(result.articles));
            })
    }
};

export const changeIsShow = (key, isShow) => {
    return (dispatch) => {
        axios.post("/api/manage/containers/articles/code", {key, isShow})
            .then((res)=>{
                const result = res.data.data;
                dispatch(changeArticles(result.articles));
            })
    }
};

export const deleteRole = (id) => {
    return (dispatch) => {
        axios.post("/api/manage/containers/role/delete", id)
            .then((res)=>{
                const result = res.data.data;
                dispatch(changeArticles(result.articles));
                message.info(result.message);
            })
    }
};

export const updateRole = (role) => {
    return (dispatch) => {
        axios.post("/api/manage/containers/role/update", role)
            .then((res)=>{
                const result = res.data.data;
                dispatch(changeArticles(result.articles));
                message.info(result.message);
            })
    }
};

export const addRole = (role) => {
    return (dispatch) => {
        axios.post("/api/manage/containers/role/add", role)
            .then((res)=>{
                const result = res.data.data;
                dispatch(changeArticles(result.articles));
                message.info(result.message);
            })
    }
};