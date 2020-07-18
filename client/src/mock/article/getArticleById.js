// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/manage/containers/articles/id','post',function(option){
    console.log("mock article get by id",option.body); //option.body = 1
    /*const postValue ={"articleId":"3"};*/
    //这里不管是否隐藏 因为这个api前后台都需要 所以只需要传过来文章的id就找到文章和它对应的目录返回 不需要子目录
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            article: {
                articleId: 1,
                articleTitle: "太恐怖了！感冒了一定不能吃这些东西，不然会威胁到生命！",
                articleImg: "https://i.loli.net/2019/11/17/ACyIbrQNcJwxGM7.jpg",//为了区分menu的imgUrl
                publishedTime: "2019-11-10 13:11:12",
                isShow: 1
            },
            menu: {
                menuCode: "001005002",
                menuName: "胃",
                parentCode: "001005",
                level: "3",
                isShow: 1,
                isModify: 1
            }
        }
    })
});