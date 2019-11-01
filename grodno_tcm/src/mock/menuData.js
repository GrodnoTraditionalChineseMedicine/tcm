// 使用 Mock
import Mock from 'mockjs'

export default Mock.mock('/api/learntcm/menus/articles','get',{
    success: true,
    data: {
        code: 200,
        article: [{
            articleId: 1,
            articleTitle: "测试测试1",
            articleRow: '{"blocks":[{"key":"9hu83","text":"TCM therapies, from medicinal herbs to physical treatments like tui na, can be used to treat common ailments in children as young as six months... Read More","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":6,"length":5,"style":"BOLD"},{"offset":6,"length":5,"style":"COLOR-F32784"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
            publishTime: "2019-03-11"
        },{
            articleId: 2,
            articleTitle: "测试测试2",
            articleRow: '{"blocks":[{"key":"9hu83","text":"How do different medical traditions keep good, bad and total cholesterol levels down? Read More","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":6,"length":5,"style":"BOLD"},{"offset":6,"length":5,"style":"COLOR-F32784"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
            publishTime: "2019-04-02"
        },{
            articleId: 3,
            articleTitle: "测试测试3",
            articleRow: '{"blocks":[{"key":"9hu83","text":"Discover the truth behind the myths of confinement from a TCM perspective... Read More","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":6,"length":5,"style":"BOLD"},{"offset":6,"length":5,"style":"COLOR-F32784"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
            publishTime: "2019-04-15"
        }]
    }
})
