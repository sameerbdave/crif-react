import React, { useState } from 'react'
import FaqsData from './FaqsData';
import './faqs.scss'

function FaqsComp(props) {
    console.log(props.name);
    const faqs = FaqsData[props.name]; 
    

    const [selc, setSelc] = useState(0);
    const toggle = (i) => {
        if (selc === i) {
            return setSelc(0)
        } else {
            return setSelc(i)
        }
    }

    //console.log(faqs);

    return (
        <>
            <section className="faq-section">
                <div className="container">
                    <h4>Frequently Asked Questions</h4>
                    <div className='accordion'>
                        {
                            faqs.map((item, i) => (
                                <div className='card' key={i}>
                                    <div className={selc === i ? 'hd act' : 'hd'} onClick={() => toggle(i)}>{item.title}</div>
                                    <div className={selc === i ? 'ctnt show' : 'ctnt'} >{item.paragraph}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

        </>
    );
}

export default FaqsComp