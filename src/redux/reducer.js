import {actionConstants} from './action';
const initState = {
    isLoading: false,
    isError : false,
    err : null,
    data : []
}
export const reducer = (state=initState,action)=>{
    switch(action.type){
        case  actionConstants.GET_REQUEST : {
            return {
                ...state,
                isLoading : true
            }
        }
        case actionConstants.GET_SUCCESS : {
            console.log(action.payload.data)
            return {
                ...state,
                isLoading : false,
                isError : false,
                data : action.payload.data
            }
        }
        case actionConstants.GET_ERROR : {
            return {
                ...state,
                isLoading : false,
                isError : true,
                err : action.payload.err
            }
        }
        case actionConstants.SORT_ASC : {
            return {
                ...state,
                data : state.data.sort((a, b) => a.cases-b.cases)
            }
        }
        case actionConstants.SORT_DESC : {
            return {
                ...state,
                data : state.data.sort((a, b) => b.cases-a.cases)
            }
        }
        default : {
            return state
        }
    }
}