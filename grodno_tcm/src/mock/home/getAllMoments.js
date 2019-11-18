// 使用 Mock
import Mock from 'mockjs'

export default Mock.mock('/api/home/moments','get',{
    /*和menus差不多*/
    success: true,
    data: {
        code: 200,
        moments: [{
            title: '关于庆祝中华人名共和国建国70周年的放假通知',
            time: "2019/09/29"
        },{
            title: '我院接见白俄罗斯格罗德诺州州长，进行两国之间的文化交流',
            time: "2019/07/05"
        },{
            title: '关于我院对外开放参观日和开设小儿推拿课程的通知',
            time: "2019/04/12"
        }]
    }
})
