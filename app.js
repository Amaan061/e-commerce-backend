const express=require('express');
const app=express();


mongoose.connect('mongodb://localhost:27017/e-comm', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("MongoDB Connected!");
})
.catch(err => {
    console.log("Connection Error", err);
});


app.listen(3000, ()=>{
    console.log("listening on the server 3000");
})