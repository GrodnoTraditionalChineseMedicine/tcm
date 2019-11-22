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
            content: [{
                menuCode: "001",
                menuName: "基本理论",
                level: "1",
                imgUrl: "https://i.loli.net/2019/11/16/mfbAaXW6gntFd3G.jpg",
                isShow: 0,
                isModify: 0,
                submenu: [{
                    menuCode: "001001",
                    menuName: "阴阳学说",
                    level: "1-1",
                    isShow: 0,
                    isModify: 1
                }, {
                    menuCode: "001002",
                    menuName: "五行学说",
                    level: "1-2",
                    isShow: 0,
                    isModify: 1
                }, {
                    menuCode: "001003",
                    menuName: "藏象",
                    level: "1-3",
                    isShow: 0,
                    isModify: 1
                }, {
                    menuCode: "001004",
                    menuName: "五脏",
                    level: "1-4",
                    isShow: 0,
                    isModify: 1,
                    submenu: [{
                        menuCode: "001004001",
                        menuName: "心",
                        level: "1-4-1",
                        isShow: 0,
                        isModify: 1
                    }, {
                        menuCode: "001004002",
                        menuName: "肝",
                        level: "1-4-2",
                        isShow: 0,
                        isModify: 1
                    }, {
                        menuCode: "001004003",
                        menuName: "脾",
                        level: "1-4-3",
                        isShow: 0,
                        isModify: 1
                    }, {
                        menuCode: "001004004",
                        menuName: "肺",
                        level: "1-4-4",
                        isShow: 0,
                        isModify: 1
                    }, {
                        menuCode: "001004005",
                        menuName: "肾",
                        level: "1-4-5",
                        isShow: 0,
                        isModify: 1
                    }]
                }, {
                    menuCode: "001005",
                    menuName: "六腑",
                    level: "1-5",
                    isShow: 1,
                    isModify: 0,
                    submenu: [{
                        menuCode: "001005001",
                        menuName: "胆",
                        level: "1-5-1",
                        isShow: 0,
                        isModify: 1
                    }, {
                        menuCode: "001005002",
                        menuName: "胃",
                        level: "1-5-2",
                        isShow: 0,
                        isModify: 1
                    }, {
                        menuCode: "001005003",
                        menuName: "小肠",
                        level: "1-5-3",
                        isShow: 0,
                        isModify: 1
                    }, {
                        menuCode: "001005004",
                        menuName: "大肠",
                        level: "1-5-4",
                        isShow: 0,
                        isModify: 1
                    }, {
                        menuCode: "001005005",
                        menuName: "膀胱",
                        level: "1-5-5",
                        isShow: 0,
                        isModify: 1
                    }, {
                        menuCode: "001006005",
                        menuName: "三焦",
                        level: "1-5-6",
                        isShow: 0,
                        isModify: 1
                    }]
                }]
            }, {
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
                }, {
                    menuCode: "002002",
                    menuName: "闻诊",
                    level: "2-2",
                    isShow: 1,
                    isModify: 1
                }, {
                    menuCode: "002003",
                    menuName: "问诊",
                    level: "2-3",
                    isShow: 1,
                    isModify: 1
                }, {
                    menuCode: "002004",
                    menuName: "切诊",
                    level: "2-4",
                    isShow: 1,
                    isModify: 1
                }]
            }, {
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
                }, {
                    menuCode: "003002",
                    menuName: "艾灸",
                    level: "3-2",
                    isShow: 1,
                    isModify: 1
                }, {
                    menuCode: "003003",
                    menuName: "砭石",
                    level: "3-3",
                    isShow: 1,
                    isModify: 1
                }, {
                    menuCode: "003004",
                    menuName: "汤药",
                    level: "3-4",
                    isShow: 1,
                    isModify: 1
                }]
            }, {
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
                }, {
                    menuCode: "004002",
                    menuName: "腹胀便溏",
                    level: "4-2",
                    isShow: 1,
                    isModify: 1
                }, {
                    menuCode: "004003",
                    menuName: "支气管炎",
                    level: "4-3",
                    isShow: 1,
                    isModify: 1
                }, {
                    menuCode: "004004",
                    menuName: "风湿病",
                    level: "4-4",
                    isShow: 1,
                    isModify: 1
                }, {
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