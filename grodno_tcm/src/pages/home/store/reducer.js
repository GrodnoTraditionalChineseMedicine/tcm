import { fromJS } from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    moments: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_MOMENTS:
            return state.set("moments", action.moments);
        default:
            return state;
    }
}