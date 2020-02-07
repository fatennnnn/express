const express=require('express')
const app=express()
app.use((req, res, next) => {
    const requestDate = new Date().getHours();
    if (requestDate < 8 || requestDate > 17) {
      res.send("Our office is not open now");
    } else {
      next();
    }
  })
app.use(express.static(__dirname +"/public"))
app.listen(3000,(err)=>{
    if (err) console.log("there is error")
    else console.log("server is runing on 3000")
})