import { useEffect, useState } from "react";
import FeatureJob from "../FeatureJob/FeatureJob";


const Featuredjobs = () => {
    const [jobs, setJob]=useState([]);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJob(data))
    },[])
    return (
        <div>
            <h3 className="text-5xl mt-7 text-center font-extrabold">Featured Jobs:{jobs?.length}</h3>
            <p className="text-base text-center text-[#757575] mt-3 mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs?.map(job=><FeatureJob key={job.id}job={job}></FeatureJob>)}
        </div>
        </div>
       
    );
};

export default Featuredjobs;