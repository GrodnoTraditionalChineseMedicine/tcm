// 使用 Mock
import Mock from 'mockjs'

export default Mock.mock('/api/manage/containers/roles','get',{
    success: true,
    data: {
        code: 200,
        roles: [{
            roleId: 1,
            roleName: "超级管理员"
        },{
            roleId: 2,
            roleName: "管理员"
        },{
            roleId: 3,
            roleName: "医生"
        },{
            roleId: 4,
            roleName: "护士"
        },{
            roleId: 5,
            roleName: "翻译"
        },{
            roleId: 6,
            roleName: "清洁工"
        },{
            roleId: 7,
            roleName: "超级管理员"
        },{
            roleId: 8,
            roleName: "管理员"
        },{
            roleId: 9,
            roleName: "医生"
        },{
            roleId: 10,
            roleName: "护士"
        },{
            roleId: 11,
            roleName: "翻译"
        },{
            roleId: 12,
            roleName: "清洁工"
        }],
        count: 12
    }
})
