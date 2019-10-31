import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../common/header/store";
import { reducer as loginReducer } from "../manage/login/store";
import { reducer as manageReducer } from "../manage/store";
import { reducer as learnTcmReducer } from "../pages/learntcm/store";

/*
    使用combineReducer对reducer进行管理
    以避免所有reducer下载一个文件造成不好维护
*/
const reducer = combineReducers({
    header: headerReducer,
    login: loginReducer,
    manage: manageReducer,
    learntcm: learnTcmReducer
});

export default reducer;