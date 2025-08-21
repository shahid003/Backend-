function m1(req,res,next){
    console.log("running middleware 1.....")
    req.user={
        id:1,
        username:"xyz"
    }
    next()
}
function m2(req,res,next){
    console.log("running middleware 2......")
    console.log(req.user)
    next();
}
function checkAdmin(req,res){
    let {name}=req.query;
    if(name=="xyz"){
        req.isAdmin=true,
        next()
    }
    res.json({
        success:false,
        message:"you are not an admin"
    })
}
module.exports.m1=m1;
module.exports.m2=m2;
module.exports.checkAdmin=checkAdmin;