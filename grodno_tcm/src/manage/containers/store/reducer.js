import { combineReducers } from "redux-immutable";
import { reducer as roleReducer } from "../role/store";
import { reducer as contentReducer } from "../content/store";
import { reducer as articleReducer } from "../article/store";
import { reducer as updateArticleReducer } from "../updateArticle/store";
import { reducer as carouselReducer } from "../carousel/store";
import { reducer as staffReducer } from "../staff/store";
import { reducer as momentReducer } from "../moment/store";

/*
    使用combineReducer对reducer进行管理
    以避免所有reducer下载一个文件造成不好维护
*/
const reducer = combineReducers({
    role: roleReducer,
    content: contentReducer,
    article: articleReducer,
    updateArticle: updateArticleReducer,
    carousel: carouselReducer,
    staff: staffReducer,
    moment: momentReducer
});

export default reducer;