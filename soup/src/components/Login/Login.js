import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SignupForm from './SignUpForm';

function Login(){
    // const [logins, setLogins] = useState()

    // //useEffect for future axios call
    // useEffect(()=>{ 
    // //'grabs api data'
    // axios.get('apihere')
    //  //if data exsists return response data
    //     .then(response => {
    //         const res = response
    //         console.log('CheckResponse', res)
    //         //set login state to the response data
    //         setLogins(res)
    //     })
    //     .catch(error=> { return console.log('Error API not functioning properly.', error)
    // })
    return(
        <SignupForm />
        )
    // })

}

export default Login