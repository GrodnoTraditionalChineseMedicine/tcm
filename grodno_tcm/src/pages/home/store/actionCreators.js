import axios from "axios";
import * as actionTypes from "./actionTypes";

export const changeMoments = (moments) => ({
    type: actionTypes.CHANGE_MOMENTS,
    moments: moments
});

export const getAllMomentNews = () => {
    return (dispatch) => {
        axios.get("/api/home/moments").then((res)=>{
            const result = res.data.data;
            dispatch(changeMoments(result.moments))
        })
    }
};


