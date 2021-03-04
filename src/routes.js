const router=require('express').Router();


router.get('/hello',(request,response)=>{
    response.send("Hello World");
})



module.exports = router;