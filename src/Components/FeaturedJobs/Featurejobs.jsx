import { useEffect, useState } from "react";
import FeatureJob from "../FeatureJob/FeatureJob";


const Featuredjobs = () => {
    const [jobs, setJob]=useState([]);
    const [dataLength,setDataLength]=useState(4)
  
    // this is not the best way to show all data

    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJob(data))
    },[])
    return (
        <div>
            <h3 className="text-5xl mt-7 text-center font-extrabold">Featured Jobs:{jobs?.length}</h3>
            <p className="text-base text-center text-[#757575] mt-3 mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-10 gap-6">
            {jobs?.slice(0,dataLength).map(job=><FeatureJob key={job.id}job={job}></FeatureJob>)}
        </div>
        <div className={dataLength===jobs.length ? 'hidden' :''}>
        <div className="flex justify-center mb-28">
            <button onClick={()=>setDataLength(jobs.length)} className="text-base text-[#FFF] font-extrabold px-7 py-4 bg-gradient-to-r from-blue-400 to-purple-500">See All Jobs</button>
        </div>
        </div>
        </div>
       
    );
};

export default Featuredjobs;