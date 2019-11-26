import { fromJS } from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    carousels: []
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_CAROUSELS:
            return state.set("carousels", action.carousels);
        default:
            return state;
    }
}