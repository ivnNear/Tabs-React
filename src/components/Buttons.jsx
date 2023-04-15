import React from 'react'

const Buttons = ({jobs,setStep, step}) => {
  return (
    <div className='btn-container'>
        {jobs.map((el,index) => {
            return <button className={step === index && 'active'} onClick={() => setStep(index)}>{el.company}</button>
        })}
    </div>
  )
}

export default Buttons