// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/manage/containers/carousels/images-add','post',function(option){
    console.log("mock moment add",option.body);//可以删掉
    /*const postValue = [{
        "fileType":2,
        "filePath":"https://i.loli.net/2019/11/17/pudaovbTefSJsDx.jpg",
        "uploadTime":"2019-12-15 03:13:43"
    },{
        "fileType":3,
        "filePath":"https://i.loli.net/2019/11/17/pudaovbTefSJsDx.jpg",
        "uploadTime":"2019-12-15 03:13:43"
    }]*/
    //如果没上传图片则images不存在
    return Mock.mock({
        success: true,
        data: {
            code: 200,
            message: "新增成功！",
            images: [{
                fileId: 26,
                fileType: 2,
                filePath: "https://i.loli.net/2019/11/17/ACyIbrQNcJwxGM7.jpg",
                uploadTime: "2019-12-12 11:20:12"
            },{
                fileId: 34,
                fileType: 2,
                filePath: "https://i.loli.net/2019/11/16/rUzXQ7VEOMdH6af.jpg",
                uploadTime: "2019-11-20 12:33:50"
            }]
        }
    })
});
