let countNum = {
    state:{
        count:100
    },
    mutations:{
        addNum(state,args){
            state.count+=(args.n+args.m);
        },
        subNum(state,args){
            state.count-=(args.n+args.m);
        }
    },
    actions:{
        addAction(context,args){
            context.commit("addNum",args);
        },
        subAction(context,args){
            context.commit("subNum",args);
        }
    },
    getters:{
        filterCount(state){
            return state.count>=150?150:state.count;
        }
    }
}
export default countNum;