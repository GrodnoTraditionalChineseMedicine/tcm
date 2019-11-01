// 使用 Mock
import Mock from 'mockjs'

export default Mock.mock('/api/manage/login','post',{
    success: true,
    data: {
        code: 200,
        message: "登录成功",
        isLogged: true,
        currentUser: {
            id: 1,
            username: "luoxinghan",
            roleId: 1,
            imgUrl: "https://avatars1.githubusercontent.com/u/30335361?s=460&v=4"
        }
    }
})
