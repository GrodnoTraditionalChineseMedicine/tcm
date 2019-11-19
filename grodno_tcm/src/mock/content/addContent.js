// 使用 Mock
import Mock from 'mockjs'

export default Mock.mock('/api/manage/containers/content/add','post',function(option){
    console.log("mock role add",option.body);//可以删掉
    const postValue = {"name":"123","residence":"003","imgUrl":"https://i.loli.net/2019/11/17/ACyIbrQNcJwxGM7.jpg"};
    //name: menuName, residence: parentCode, imgUrl: "https://i.loli.net/2019/11/17/ACyIbrQNcJwxGM7.jpg"
    //我传过来的值只有menuName parentCode imgUrl 而menuCode和level需要根据一些算法在后台进行计算然后保存 isShow和isModify在数据库已经设置了默认值1了
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "新增成功！",
            content: [{
                menuCode: "001",
                menuName: "测试测试修改",
                level: "1",
                imgUrl: "https://i.loli.net/2019/11/16/mfbAaXW6gntFd3G.jpg",
                isShow: 1,
                isModify: 0,
                submenu: [{
                    menuCode: "001002",
                    menuName: "五行学说",
                    level: "1-2",
                    isShow: 1,
                    isModify: 1
                },{
                    menuCode: "001003",
                    menuName: "藏象",
                    level: "1-3",
                    isShow: 1,
                    isModify: 1
                },{
                    menuCode: "001005",
                    menuName: "六腑",
                    level: "1-5",
                    isShow: 1,
                    isModify: 1,
                    submenu:[{
                        menuCode: "001005001",
                        menuName: "胆",
                        level: "1-5-1",
                        isShow: 1,
                        isModify: 1
                    },{
                        menuCode: "001005002",
                        menuName: "胃",
                        level: "1-5-2",
                        isShow: 1,
                        isModify: 1
                    },{
                        menuCode: "001005003",
                        menuName: "小肠",
                        level: "1-5-3",
                        isShow: 1,
                        isModify: 1
                    },{
                        menuCode: "001005004",
                        menuName: "大肠",
                        level: "1-5-4",
                        isShow: 1,
                        isModify: 1
                    },{
                        menuCode: "001005005",
                        menuName: "膀胱",
                        level: "1-5-5",
                        isShow: 1,
                        isModify: 1
                    },{
                        menuCode: "001006005",
                        menuName: "三焦",
                        level: "1-5-6",
                        isShow: 1,
                        isModify: 1
                    }]
                },{
                    menuCode: "001006",
                    menuName: "增加测试",
                    level: "1-6",
                    isShow: 1,
                    isModify: 1
                }]
            },{
                menuCode: "002",
                menuName: "诊断方法",
                level: "2",
                imgUrl: "https://i.loli.net/2019/11/16/rUzXQ7VEOMdH6af.jpg",
                isShow: 1,
                isModify: 0,
                submenu: [{
                    menuCode: "002001",
                    menuName: "望诊",
                    imgUrl: "https://i.loli.net/2019/11/16/mfbAaXW6gntFd3G.jpg",
                    level: "2-1",
                    isShow: 1,
                    isModify: 1
                },{
                    menuCode: "002002",
                    menuName: "闻诊",
                    level: "2-2",
                    isShow: 1,
                    isModify: 1
                },{
                    menuCode: "002003",
                    menuName: "问诊",
                    level: "2-3",
                    isShow: 1,
                    isModify: 1
                },{
                    menuCode: "002004",
                    menuName: "切诊",
                    level: "2-4",
                    isShow: 1,
                    isModify: 1
                }]
            },{
                menuCode: "003",
                menuName: "治疗方法",
                level: "3",
                imgUrl: "https://i.loli.net/2019/11/16/HkRAnwbvh8Z79lO.jpg",
                isShow: 1,
                isModify: 0,
                submenu: [{
                    menuCode: "003001",
                    menuName: "针刺",
                    imgUrl: "https://i.loli.net/2019/11/16/mfbAaXW6gntFd3G.jpg",
                    level: "3-1",
                    isShow: 1,
                    isModify: 1
                },{
                    menuCode: "003002",
                    menuName: "艾灸",
                    level: "3-2",
                    isShow: 1,
                    isModify: 1
                },{
                    menuCode: "003003",
                    menuName: "砭石",
                    level: "3-3",
                    isShow: 1,
                    isModify: 1
                },{
                    menuCode: "003004",
                    menuName: "汤药",
                    level: "3-4",
                    isShow: 1,
                    isModify: 1
                }]
            },{
                menuCode: "004",
                menuName: "常见疾病",
                level: "4",
                imgUrl: "https://i.loli.net/2019/11/16/UMJ8hdnvuWDxOeR.jpg",
                isShow: 1,
                isModify: 0,
                submenu: [{
                    menuCode: "004001",
                    menuName: "过敏性鼻炎",
                    level: "4-1",
                    isShow: 1,
                    isModify: 1
                },{
                    menuCode: "004002",
                    menuName: "腹胀便溏",
                    level: "4-2",
                    isShow: 1,
                    isModify: 1
                },{
                    menuCode: "004003",
                    menuName: "支气管炎",
                    level: "4-3",
                    isShow: 1,
                    isModify: 1
                },{
                    menuCode: "004004",
                    menuName: "风湿病",
                    level: "4-4",
                    isShow: 1,
                    isModify: 1
                },{
                    menuCode: "004005",
                    menuName: "精力不足",
                    level: "4-4",
                    isShow: 1,
                    isModify: 1
                }]
            }]
        }
    })
})
