import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import LeftNavMenuItem from "./LeftNavMenuItem"
import { categories } from "../utils/constants"
import { Context } from '../context/contextApi';

// icon of heart
import { AiTwotoneHeart } from "react-icons/ai"

 
const LeftNav = () => {
  const {selectedCategory, setSelectedCategory, mobileMenu } = useContext(Context)

  // when click we use this navigate to navigate to other page
  const navigate = useNavigate()

  // function for run when anyone click on option
  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name)
      case "home":
        return setSelectedCategory(name)
      case "menu":
        return 
    
      default:
        break;
    }
  }


  return (
    <div className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10  md:translate-x-0 transition-all scrollbar:!w-1.5  ${
      mobileMenu ? "translate-x-0" : "translate-x-[-240px]"
  }`}>
      <div className="flex flex-col px-5">
        {categories.map((item) => {
          return(
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home": item.name}
                icon={item.icon}
                action={()=>{
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={`${
                  selectedCategory === item.name
                  ?
                  "bg-white/[0.16]"
                  :
                  ""
                }`}
              />
                {item.divider && (
                  <hr className='my-5 border-white/[0.2] ' />
                )}
            </React.Fragment>
          )
        })}
        <hr className='my-5 border-white/[0.2] ' />
        <div className='text-white text-[12px]'>
          Cloned with <AiTwotoneHeart className='text-red-600 inline' /> by Ajay
        </div>
      </div>
    </div>
  )
}

export default LeftNav