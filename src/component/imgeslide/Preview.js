import React, { useContext, useState } from 'react'
import { Context } from '../../App'
function Preview({ numberSelect }) {
    const { selected } = useContext(Context);


    // จัดการพรีวิวรูปตอน slide  เลือก
    function LastIndex () {
        const check = numberSelect + 4
        if(numberSelect <= check){
            if(selected.length < check){
                return check
            }
            return check
        }
        const checkLastIndex = selected.length - check
        return checkLastIndex
    }
    
    function FirstIndex(){
        const LengthFirstImg = selected.length - 4
        if(4 <= selected.length){
            if(numberSelect >= LengthFirstImg){
                return LengthFirstImg
            }
            return numberSelect
        }
        return 0 
    }
    

    return (
        <>
            <div className='flex justify-around mt-4'>
                {
                    selected.slice(FirstIndex(), LastIndex()).map((pre) => <img src={pre.img} key={pre.id} width={40} className='rounded-lg' />)
                }
            </div>
            <div className='text-center m-2'>
                {numberSelect + 1} / {selected.length}
            </div>
        </>
    )
}

export default Preview