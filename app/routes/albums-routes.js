module.exports = function(app,db){
//CREATE
//when the app receives a post  request to the /notes path, it will execute this code, passing
//a request object(with parameters or json of the request) and the response object, used to reply.
app.post('/albums',(req,res)=>{
    console.log(req.title);
    res.send('Hello')
});
};