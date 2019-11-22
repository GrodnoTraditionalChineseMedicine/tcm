import {actionTypes} from "./index";
import { message } from 'antd';
import axios from "axios";

export const changeCurrent = (article, menu) => ({
    type: actionTypes.CHANGE_CURRENT,
    article: article,
    menu: menu
});

export const getArticleById = (id) => {
    return (dispatch) => {
        axios.post("/api/article/get-article", id)
            .then((res)=>{
                const result = res.data.data;
                dispatch(changeCurrent(result.article, result.menu));
            })
    }
};