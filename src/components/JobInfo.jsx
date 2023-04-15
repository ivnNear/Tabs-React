import React from 'react'
import {FaAngleDoubleRight} from 'react-icons/fa'

const JobInfo = ({title, company, dates, duties}) => {
   
    
    
  return (
    <div className='card'>
        <div className="title">
            <h2>{title}</h2>
            <div className="company">{company}</div>
            <p className='dates'>{dates}</p>
        </div>
        
            {duties.map((el) => {
                <FaAngleDoubleRight />
                return <div className="duties">
                    <FaAngleDoubleRight className='icon' />
                    <p>{el}</p>
                </div>
            })}
        
    </div>
  )
}

export default JobInfo