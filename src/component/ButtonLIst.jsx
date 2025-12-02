import React, { useState } from 'react'
import {useDispatch} from "react-redux";
import { setCategory } from '../utils/AppSlice';

const buttonList = ["All", "Javascript", "Java", "Live", "Music", "Songs", "Vlogs", "Trending", "Programming", "News", "Technology", "Cricket", "Comedy", "Thriller", ]

const ButtonList = () => {
  const [active, setActive] = useState("All");
  const dispatch = useDispatch();

  const videoByTag = (tag) => {
    if (active !== tag) {
      dispatch(setCategory(tag));
      setActive(tag);
    }
  }
  console.log(active);

  return (
    <div className='flex w-full relative overflow-auto overflow-y-hidden overflow-x-scroll my-1 '>
      {
        buttonList.map((buttonName, index) => {
          return (
            <div key={index}>
              <button onClick={() => { videoByTag(buttonName) }} className={`${active === buttonName ? "bg-slate-900 text-white" : "bg-gray-200"} w-fit font-medium mx-1 cursor-pointer px-3 py-2 rounded-lg`}><span className="whitespace-nowrap">{buttonName}</span></button>
            </div>
          )
        })
      }

    </div>
  )
}

export default ButtonList