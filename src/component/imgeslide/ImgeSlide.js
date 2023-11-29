import React, { useState, useContext, useEffect } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { Context } from '../../App'
import { useParams } from 'react-router-dom';
import { Datas } from '../../Datas';

function ImgeSlide() {
    const [select, setSelect] = useState([])
    const { selected } = useContext(Context);
    const { id } = useParams();
    const previw = selected.slice(0, 4)
    return (
        <div className='h-80 w-80'>
            {
                (selected.length === 0) ? (
                    <h1>คุณไม่ได้เลือก</h1>
                ) : (
                    <>
                        <div>
                            <Slide>
                                {
                                    selected.map((slides) => (
                                        <div key={slides.id} className='h-70 w-60'  >
                                            <img src={slides.img} alt={slides.name} className={`h-50 w-50`} />
                                        </div>
                                    ))
                                }
                            </Slide>

                        </div>

                    </>
                )
            }

        </div>
    )
}

export default ImgeSlide