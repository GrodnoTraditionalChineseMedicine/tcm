// 使用 Mock
import Mock from 'mockjs'

export default Mock.mock('/api/learntcm/menus/articles?code=003001','get',{
    success: true,
    data: {
        code: 200,
        article: [{
            articleId: 1,
            articleTitle: "TCM – A Complementary Approach",
            articleRow: '{"blocks":[{"key":"9hu83","text":"TCM therapies","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":6,"length":5,"style":"BOLD"},{"offset":6,"length":5,"style":"COLOR-F32784"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
            publishTime: "2019-06-11"
        },{
            articleId: 2,
            articleTitle: "All About Cholesterol",
            articleRow: '{"blocks":[{"key":"9hu83","text":"How do different medical traditions keep good","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":6,"length":5,"style":"BOLD"},{"offset":6,"length":5,"style":"COLOR-F32784"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
            publishTime: "2019-07-22"
        },{
            articleId: 3,
            articleTitle: "Beware These 6 Confinement Myths",
            articleRow: '{"blocks":[{"key":"9hu83","text":"Discover the truth behind the myths of confinement","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":6,"length":5,"style":"BOLD"},{"offset":6,"length":5,"style":"COLOR-F32784"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
            publishTime: "2019-07-31"
        }]
    }
})
