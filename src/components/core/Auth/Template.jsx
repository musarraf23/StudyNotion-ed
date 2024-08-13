import { FcGoogle } from "react-icons/fc"
import frameImg from "../../../assets/Images/frame.png"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupFom"
import React, { useState } from 'react'


const Template = ({title,description1, description2, image, formType}) => {
  
    const {loading} = useState((state)=>state.auth)
  
    return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        {
            loading ? (
                <div className="spinner"></div>
            ) : (
                <div className="">
                <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
                <h1>{title}</h1>
                <p>
                <span className="">{description1}</span>
                <span>{description2}</span>
                </p>
                 {
                     formType === "signup" ? <SignupForm/> : <LoginForm/>
                 }
             </div>
             <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
                 <img src={frameImg} alt="Pattern"
                 width={558}
                 height={504}
                 loading="lazy" />
                 <img
                 src={image}
                 alt="students"
                 width={558}
                 height={504}
                 loading="lazy"
                 className="absolute -top-4 right-4 z-10" />
             </div>
                </div>
                
            )
        }
    </div>
  )
}

export default Template;
