import {actionTypes} from "./index";
import { message } from 'antd';
import axios from "axios";

export const changeArticle = (articles) => ({
    type: actionTypes.CHANGE_ARTICLE,
    articles: articles
});

export const getArticleById = () => {
    return (dispatch) => {
        axios.post("/api/article/get-article")
            .then((res)=>{
                const result = res.data.data;
                dispatch(changeArticle(result.articles));
            })
    }
};