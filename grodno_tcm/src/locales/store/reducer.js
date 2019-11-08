import { fromJS } from "immutable";
import {actionTypes} from "./index";

const defaultState = fromJS({
    usersLocale: "en"
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LOCALES_ACTION:
            return state.set("usersLocale", action.lang);
        default:
            return state;
    }
}