// 使用 Mock
import Mock from 'mockjs'

export default Mock.mock('/api/article/get-article','post',function(option){
    console.log("mock article get",option.body); //option.body = 1
    //这里不管是否隐藏 因为这个api前后台都需要 所以只需要传过来文章的id就找到文章和它对应的目录返回 不需要子目录
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            article: {
                articleId: 1,
                articleTitle: "太恐怖了！感冒了一定不能吃这些东西，不然会威胁到生命！",
                articleImg: "https://i.loli.net/2019/11/17/ACyIbrQNcJwxGM7.jpg",//为了区分menu的imgUrl
                articleRow: '{"blocks":[{"key":"at34q","text":"Hello World!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":6,"length":6,"style":"BOLD"}],"entityRanges":[],"data":{"nodeAttributes":{}}}],"entityMap":{}}',
                publishedTime: "2019-11-10 13:11:12",
                isShow: 1
            },
            menu: {
                menuCode: "001004001",
                menuName: "心",
                parentCode: "001004",
                level: "3",
                isShow: 1,
                isModify: 1
            }
        }
    })
})
