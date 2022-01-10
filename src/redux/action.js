import axios from 'axios'; 
export const actionConstants = {
    GET_REQUEST : 'GET_REQUEST',
    GET_SUCCESS : 'GET_SUCCESS',
    GET_ERROR : 'GET_ERROR',
    SORT_ASC : 'SORT_ASC',
    SORT_DESC : 'SORT_DESC'
}
export const getRequest = ()=>({
    type: actionConstants.GET_REQUEST,
    payload: {
        isLoading: true
    }
})
export const getSuccess = (res)=>({
    type: actionConstants.GET_SUCCESS,
    payload: {
        isLoading: false,
        data: res
    }
})
export const getError = (err)=> ({
    type: actionConstants.GET_ERROR,
    payload: {
        isLoading: false,
        isError: true,
        err: err
    }
})
export const sortAsc = () => ({
    type: actionConstants.SORT_ASC
})
export const sortDesc = () => ({
    type: actionConstants.SORT_DESC
})
export const getData = (config)=> (dispatch) => {
    dispatch(getRequest());
    axios(config)
    .then((res)=>{
        dispatch(getSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(getError(err))
    })
}