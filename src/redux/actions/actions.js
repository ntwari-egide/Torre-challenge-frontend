/**
 * @author: ntwari egide
 */

 export const handlegetuserbyid =  async (userId) => {

    const url = `api/v1/auth/sign-up`

    try {
        await axios.post(url,body,{
            headers: headers
        })
        .then(res =>  {
            credentials.issignupSuccessful = true
            localStorage.setItem('Token',res.data.payload.accessToken)

            message.success('Account is created successfully!')
        })

        return store.dispatch({
            type: actiontypes.USER_SIGNUP,
            payload: credentials
        })
    } catch (error) {
        error.response ? credentials.errors = error.response.data.message: console.log('Error: ',error); 
    }

}
