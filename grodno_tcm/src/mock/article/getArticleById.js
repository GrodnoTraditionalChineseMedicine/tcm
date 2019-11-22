// 使用 Mock
import Mock from 'mockjs'

export default Mock.mock('/api/manage/containers/content/show','post',function(option){
    console.log("mock role update",option.body);
    //改变isShow时，父目录改变，子目录会跟着父目录改变的值而改变，如001的isShow变为0则001001......的isShow都为0
    const postValue = {
        key: "001",
        isShow: false
    };//这是我传过来的值
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "修改成功！",
            article: {
                articleId: 1,
                articleTitle: "中医基本论",
                publishedTime: "2019-11-10 13:11:12",
                isShow: 1
            }
        }
    })
})
