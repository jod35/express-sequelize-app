const app = require('express')();
const router=require('./src/routes');

const port = 5000;


app.use(router);

app.listen(port,()=>{
    console.log(`App is running at http://localhost:${port}`)
})