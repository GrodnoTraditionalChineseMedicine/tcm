// 使用 Mock
import Mock from 'mockjs'

export default Mock.mock('/api/manage/containers/staffs/update','post',function(option){
    console.log("mock staff update",option.body);//可以删掉
    const postValue = {"employeeId":3,"name":"罗大壮","roleId":1,"sex":2,"birthday":"2019-12-18","phoneNum":"13667601677","address":"重庆市巴南区重庆理工大学花溪校区","employeeDescription":"测试的信息测试的信息测试的信息","avatarUrl":"https://i.loli.net/2019/11/17/pudaovbTefSJsDx.jpg"};
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "修改成功！"
        }
    })
})
