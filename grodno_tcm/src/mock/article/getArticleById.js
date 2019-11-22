// 使用 Mock
import Mock from 'mockjs'

export default Mock.mock('/api/article/get-article','post',function(option){
    console.log("mock role update",option.body);
    //这里不管是否隐藏 因为这个api前后台都需要 所以只需要传过来文章的id就找到文章和它对应的目录返回
    const postValue = {
        id: 1
    };//这是我传过来的值
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            article: {
                articleId: 1,
                articleTitle: "中医基本论",
                articleImg: "https://i.loli.net/2019/11/17/ACyIbrQNcJwxGM7.jpg",//为了区分menu的imgUrl
                articleRow: '{"blocks":[{"key":"9hu83","text":"Discover the truth behind the myths of confinement from a TCM perspective... Read More","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":6,"length":5,"style":"BOLD"},{"offset":6,"length":5,"style":"COLOR-F32784"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
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
