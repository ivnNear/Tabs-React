import React, { useEffect, useState } from 'react';
import Loading from './components/Loading'
import JobInfo from './components/JobInfo';
import Buttons from './components/Buttons';



const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [step, setStep] = useState(0)

  const fetchData = async () => {
    const response = await fetch(url)
    const items = await response.json()
    setJobs(items)
    setLoading(false)
    
    

  }


  useEffect(() => {
    fetchData()
  },[])


 

  return <main>
    { loading && <Loading />}
    <Buttons jobs={jobs} setStep={setStep} step={step} />
    
   {jobs.length > 0 && <JobInfo {...jobs[step]} />}
  </main>;
};

export default App;
