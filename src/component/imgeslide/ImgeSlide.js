import React, { useState, useContext, useEffect, useRef } from 'react'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import 'react-slideshow-image/dist/styles.css'
import { Context } from '../../App'
import Preview from './Preview';

function ImgeSlide({ numberSelect, setNumberSelect }) {

    const { selected } = useContext(Context);
    let imgRef = useRef(null)
    const items = selected[numberSelect]
    
    // จัดการตอนคลิ๊กเลือกรูป
    const HandleOnclickPrev = () => {
        imgRef.current.scrollLeft -= 200
        if (numberSelect > 0) {
            setNumberSelect(numberSelect - 1)
        }
    }

    const HandleOnclickNext = () => {
        imgRef.current.scrollLeft += 200
        if (numberSelect < selected.length - 1) {
            setNumberSelect(numberSelect + 1)
        }
    }

    return (
        <div className=' h-100'>
            <div className='w-60 h-full'>
                <div className='relative w-60 h-72'>
                    <button className='absolute z-10 bottom-1/2' onClick={HandleOnclickPrev}><GrPrevious className='text-white' size={24} /></button>
                    <button className='absolute z-10 right-0 bottom-1/2' onClick={HandleOnclickNext}><GrNext className='text-white' size={24} /></button>
                    <div className='containerimg rounded-xl' ref={imgRef}>
                        {
                            selected?.map((slides) => (
                                <img src={slides.img} alt={slides.name} key={slides.id} />
                            ))
                        }
                    </div>
                </div>
                <Preview numberSelect={numberSelect} />
                <p className='text-xs mt-2'>{items?.More}</p>
            </div>

        </div>
    )
}

export default ImgeSlide