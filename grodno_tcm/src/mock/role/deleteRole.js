// 使用 Mock
import Mock from 'mockjs'

export default Mock.mock('/api/manage/containers/role/delete','post',function(option){
    console.log("mock role delete",option.body);//可以删掉 option.body = 1
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "删除成功！",
            roles: [{
                key: '2',
                roleId: 2,
                roleName: "管理员"
            },{
                key: '3',
                roleId: 3,
                roleName: "医生"
            },{
                key: '4',
                roleId: 4,
                roleName: "护士"
            },{
                key: '5',
                roleId: 5,
                roleName: "翻译"
            },{
                key: '6',
                roleId: 6,
                roleName: "清洁工"
            },{
                key: '7',
                roleId: 7,
                roleName: "超级管理员"
            },{
                key: '8',
                roleId: 8,
                roleName: "管理员"
            },{
                key: '9',
                roleId: 9,
                roleName: "医生"
            },{
                key: '10',
                roleId: 10,
                roleName: "护士"
            },{
                key: '11',
                roleId: 11,
                roleName: "翻译"
            },{
                key: '12',
                roleId: 12,
                roleName: "清洁工"
            }],
            count: 11
        }
    })
})
