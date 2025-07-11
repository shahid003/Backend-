function buyProduct(product_name,cb){
    //some asynchronous operation
    //1. get product detaile from product db
    //2. write order detail in user db
    setTimeout(()=>{
        console.log("order complete");
        cb();
    })
}
buyProduct("Iphone 16",function(err,amount){
    console.log("product is purchased");
})