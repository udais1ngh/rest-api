class ApiFeatures{
constructor(querey,querystr){
    this.querey=querey;
    this.querystr=querystr;
}
search(){
    const keyword=this.querystr.keyword?{
        name:{
            $regex:this.querystr.keyword,
            $options:"i",
        },
    }:{};
}
}

module.exports=ApiFeatures