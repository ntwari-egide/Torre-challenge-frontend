/**
 * @author: ntwari egide
 */

import * as actionType from "./action-types"

 export const handlegetuserbyid =  async (userId) => {

    const url = `/api/v1/users/${userId}`

    try {
        await axios.get(url,{
            headers: headers
        })
        .then(res =>  {
            return store.dispatch({
                type: actionType.GET_USER_BY_ID,
                payload: res.data
            })
        })

        
    } catch (error) {
        error.response ?  console.log('Error: ',error) : ''; 
    }

}
