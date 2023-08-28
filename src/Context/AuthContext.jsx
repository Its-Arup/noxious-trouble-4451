import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
export const Authcontext = createContext();

function AuthContextProvider({children}) {

  const [isAuth,setIsAuth] = useState(false);
  const [userdata,setuserdata]= useState([]);
  const [loginAuth,setloginAuth] = useState(false);

  const userdatafetch = async()=>{
    axios({
      url: `https://noxious-trouble-4451-server.onrender.com/users`,
      method:"get"
    })
    .then((res)=>{
      setuserdata(res.data)
    })
  }

  useEffect(()=>{
    userdatafetch();
  },[isAuth])
  
  console.log(userdata)

    const Signin=({email,password,name,age})=>{
        axios({
          url: `https://noxious-trouble-4451-server.onrender.com/users`,
          method: "post",
          data:{
            email: email,
            password: password,
            name: name,
            age: age
          }
        }).then((res)=>{
          setIsAuth(true)
          console.log(res);
        }).catch((err)=>{
          setIsAuth(false)
        })
    }

    const Login = ({email,password}) =>{
      userdata?.map((ele)=>{
        if(ele.email === email && ele.password === password){
          return setloginAuth(true)
        }
      })
      setloginAuth(false)
    }

    const Logout = ()=>{
      setloginAuth(false)
    }

  return (
    <Authcontext.Provider value={{
      Signin,
      Login,
      Logout,
      isAuth
    }}>
      {children}
    </Authcontext.Provider>
  )
}

export default AuthContextProvider
