const express = require('express');
const router = express.Router();
const requestHelper = require('request-promise');
const optionsForGetAllContents = {
    method: 'GET',
    url: 'http://localhost:3001/api/manage/containers/moments',
    json: true
};
let resObject = {
    "success" : false,
    "data" : {
        "code" : 400,
        "message" : "Failed",
        "moments" : []
    }
};
router.get('/', (req, res)=>{
    requestHelper(optionsForGetAllContents)
        .then(function (response) {
            // Request was successful, use the response object at will
            for(let i = 0; i < response.data.moments.length; i++){
                if(response.data.moments[i].isShow === 1) {
                    resObject.data.moments.push(response.data.moments[i]);
                }
            }
            resObject.success = true;
            resObject.data.code = 200;
            resObject.data.message = "Successfully get all valid records"
            res.json(resObject);
            res.end();
        })
        .catch(function (err) {
            res.json(resObject);
            res.end();
        });
});

module.exports = router;
