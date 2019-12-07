// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/pediatric/courses','get',{
    success: true,
    data: {
        code: 200,
        courses: [{
            courseId: 1,
            title: "小儿推拿课程1",
            lecturee: "RoHank",
            address: "China, BeiJing",
            lectureTime: "2019-03-23",
            publishedTime: "2019-03-25"
        },{
            courseId: 2,
            title: "测试测试2",
            lecturee: "RoHank",
            address: "China, WuHan",
            lectureTime: "2019-03-23",
            publishedTime: "2019-03-25"
        },{
            courseId: 3,
            title: "测试测试3",
            lecturee: "RoHank",
            address: "China, SiChuan",
            lectureTime: "2019-03-23",
            publishedTime: "2019-03-25"
        },{
            courseId: 4,
            title: "测试测试4",
            lecturee: "RoHank",
            address: "China, ChongQing",
            lectureTime: "2019-03-23",
            publishedTime: "2019-03-25"
        },{
            courseId: 5,
            title: "测试测试4",
            lecturee: "RoHank",
            address: "China, ChongQing",
            lectureTime: "2019-03-23",
            publishedTime: "2019-03-25"
        },{
            courseId: 6,
            title: "测试测试4",
            lecturee: "RoHank",
            address: "China, ChongQing",
            lectureTime: "2019-03-23",
            publishedTime: "2019-03-25"
        },{
            courseId: 7,
            title: "测试测试4",
            lecturee: "RoHank",
            address: "China, ChongQing",
            lectureTime: "2019-03-23",
            publishedTime: "2019-03-25"
        }]
    }
});
