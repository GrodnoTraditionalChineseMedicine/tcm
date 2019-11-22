import { fromJS } from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    article: "1"
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_ARTICLE:
            return state.set("article", action.article);
        default:
            return state;
    }
}