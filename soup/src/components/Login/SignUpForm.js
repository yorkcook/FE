// import React, {useState} from 'react'



// export default function SignupForm(){

//     const [user, setUser] = useState({username: '', password: ''});

//     function handleChange(event){
//         const updateUser = {...user, [event.target.name]: event.target.value}
//         setUser(updateUser)
//     }

//     function handleSubmit(event){
//         console.log('event', user ) 
//         event.preventDefault()
//     }

//     return(
//         <form onSubmit={handleSubmit} className='box'>          
//                 <legend className='registration-title'>Sign In</legend>
//                 <div className='signInForm'>
//                     <label>UserName </label>
//                     <div className='test'>
//                     <input
//                         type='text'
//                         className='#'
//                         name='username'
//                         placeholder='Enter your username'
//                         value={user.username}
//                         onChange={handleChange}
//                         />
//                     </div>
//                     <div>
//                     <label>Password </label>
//                         <div className='test'>
//                             <input
//                                 type='password'
//                                 className='#'
//                                 name='password'
//                                 placeholder='Enter your password'                        
//                                 onChange={handleChange}
//                                 value={user.password}
//                                 />
//                         </div>
//                     </div>
//                 </div>
//                 <button type='submit'>Log In</button>
         
//         </form>
//     )
// }