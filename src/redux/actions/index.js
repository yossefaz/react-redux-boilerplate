import endpointSample from "../../api/endpointSample";

export const fetchData =  () => async dispatch => {
    const response = await endpointSample.get('/posts')
    dispatch({type : 'FETCH_DATA',payload : response.data})
}

