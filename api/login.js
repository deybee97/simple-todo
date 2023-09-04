import axios from "axios";



const login = async (email, password) => {


    try {
        const response = await axios.post('http://localhost:4000/api/v1/authSignUp',{
            email: email,
            password: password,
        })
        
         return response.data.token
        
    } catch (error) {
         throw new Error(error.response.data.msg)
    }
  

}


export default login
