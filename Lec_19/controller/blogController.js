module.exports.postAddBlog=async (req,res)=>{
    let title = req.body.title;
    let body = req.body.body;
    let userId = req.body.userId;
    let blog = {
        title:title,
        body:body,
        date:Date.now(),
        userId:userId
    }
    let newBlog =  new Blog(blog);
    let getUser = await USER.findById(userId);
    getUser.blogs.push(newBlog._id); //getuser jo banaya hai . blogs jo array hai  . method to push in array
    await getUser.save();   
    await newBlog.save();//data add in mongoose using save method this is and IO operation
    //await is used in all function of db

    res.json({
        success:true,
        message:"blog added successfully",
        data:newBlog
    })
}