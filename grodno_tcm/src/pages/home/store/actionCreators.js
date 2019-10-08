import axios from "axios";
import * as actionTypes from "./actionTypes";

export const getBuskerInfo = (buskerPage) => {
    return (dispatch) => {
        axios.get("/api/home/getCurrentUser").then((res)=>{
            console.log("success!", res.data);
        }).catch((e)=>{
            console.log(e);
        });
    }
};


