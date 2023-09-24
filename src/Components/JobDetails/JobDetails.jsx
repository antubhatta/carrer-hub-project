import { useLoaderData, useParams } from "react-router-dom";
import { AiFillDollarCircle} from 'react-icons/ai';

const JobDetails = () => {
    const jobs=useLoaderData()
    const {id}=useParams()
    const idInt=parseInt(id)
    const job=jobs.find(job=>job.id===idInt)
    const {job_description,salary,job_responsibility,educational_requirements,experiences,job_title}=job
   

   
    return (
        <div>
            {/* <h3 className="mt-28 text-3xl font-semibold mb-6">This is a job details:{id}</h3> */}
            <div className="grid grid-cols-4 gap-6 mt-28">
                <div className="md:col-span-3 ">
                    <p className="text-[#757575] text-base font-medium mb-6"><span className=" text-[#1A1919] font-extrabold">Job Description:</span>{job_description}</p>
                    <p className="text-[#757575] text-base font-medium mb-6"><span className=" text-[#1A1919] font-extrabold">Job Responsibility</span>{job_responsibility}</p>
                    <span className=" text-[#1A1919] font-extrabold ">Educational Requirements:</span>
                    <p className="text-[#757575] text-base font-medium mt-6 mb-6">{educational_requirements}</p>
                    <span className=" text-[#1A1919] font-extrabold">Experiences:</span>
                    <p className="text-[#757575] text-base font-medium mb-28 mt-6">{experiences}</p>
                </div>
                <div>
                <div className="bg-gradient-to-r from-[rgba(126,144,254,0.10)] rounded-lg via-transparent to-[rgba(152,115,255,0.10)] h-[90deg] pl-7 pr-7">
                   <h3 className="text-base text-black font-extrabold pt-7 ">Job Details</h3>
                   <div className="border-b border-[#9873FF] mt-6 mb-6"></div>
                   <div className='flex gap-1 items-center mb-4'>
                    <h2><AiFillDollarCircle className='text-2xl'></AiFillDollarCircle></h2>
                    <p className='text-base font-semibold text-[#757575]'>{salary} (Per Month)</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <h2><AiFillDollarCircle className='text-2xl'></AiFillDollarCircle></h2>
                    <p className='text-base font-semibold text-[#757575]'>{job_title}</p>

                </div>
                <p className="mt-8 text-base font-extrabold text-[#1A1919]">Contact Information</p>
                    <div className="border-b border-[#9873FF] mt-6 mb-6"></div>

                    <h3 className="text-base pb-6 text-black font-extrabold">Phone:<span className='text-base font-semibold text-[#757575]'>048-4845-4584504</span ></h3>
                    </div>
                    <div className="flex justify-center mt-6">
                    <button className="rounded-lg w-full bg-gradient-to-r from-blue-400 to-indigo-600 h-[90deg] py-4 text-[#FFF] text-base font-extrabold">Apply Now</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default JobDetails;