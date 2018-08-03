module.exports = function () {
    return async (ctx, next) => {
        // if(ctx.cookies.get("jyc-token")){
        //     console.log(ctx.cookies.get("jyc-token"));
        //     var expriesTime = new Date();
        //     expriesTime.setMinutes(expriesTime.getMinutes()+40);
        //     ctx.cookies.set("jyc-token", ctx.cookies.get("jyc-token"), {
        //         path: "/",
        //         expires: expriesTime
        //     })
        // }   
        // if (ctx.path.split("/")[1] === "user") {
        //     if (!ctx.cookies.get("jyc-token")) {
        //         await ctx.redirect('/userreg/login');
        //         ctx.state.menuType = 'default'
        //     } else {
        //         ctx.state.menuType = 'user'
        //         ctx.state.submenuType = ctx.path.split("/")[2] || 'index'
        //     }
        // } else {
        //     if (ctx.path.split("/")[1] == 'index' || ctx.path.indexOf('product') != -1  || ctx.path.indexOf('aboutus') != -1) {
        //         ctx.state.menuType = ctx.path.split("/")[1]
        //     } else {
        //         ctx.state.menuType = 'default'
        //     }
        // }
        var pathArr = ctx.path.split("/");
        if(pathArr[1]){
            ctx.state.menuType = pathArr[1]   
        }else{
            ctx.state.menuType = "home"
        }
        console.log(ctx.state.menuType);
        await next()
    }
}