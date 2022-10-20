import React, { useState } from 'react'
import FaqsData from './FaqsData';
import './faqs.scss'

function FaqsComp(props) {
    console.log(FaqsData[props.name]);
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
                    <h4>Frequently Asked Questions {`${faqs[0][list-one]}`}</h4>
                    <div className='accordion'>
                        {
                            faqs.map((item, i) => (
                                <div className='card' key={i}>
                                    <div className={selc === i ? 'hd act' : 'hd'} onClick={() => toggle(i)}>{item.title}</div>
                                    <div className={selc === i ? 'ctnt show' : 'ctnt'} >
                                        <p>{item.paragraph}</p>
                                    </div>
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