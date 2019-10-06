import { fromJS } from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    isHide: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HIDE_ACTION:
            return state.set("isHide", true);
        case actionTypes.CHANGE_SHOW_ACTION:
            return state.set("isHide", false);
        default:
            return state;
    }
}