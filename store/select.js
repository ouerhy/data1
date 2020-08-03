let myselect ={
    state:{
        listData:["html","css","javascript","vue","react"],
        isShow:false,
        title:"html"
    },
    mutations:{
        // 同步
        changeT(state,args){
            state.title = args.title;
        },
        changeShow(state){
            // 改变显示与否
            state.isShow = !state.isShow;
        }
    },
    actions:{
        // 异步
        changeTileAction(context,args){
            context.commit("changeT",args);
        },
        changeShowAction(context){
            context.commit("changeShow");
        }
    }

}
export default myselect