import { Link } from 'react-router-dom';
import { MdLocationOn} from 'react-icons/md';
import { AiFillDollarCircle} from 'react-icons/ai';
const FeatureJob = ({job}) => {
   const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary}=job
    return (
        <div className="bg-[#E8E8E8] rounded-lg border w-full border-solid pl-10 pt-10">
            <img className="mb-8" src={logo} alt="" />
            <h2 className="text-2xl text-[#474747] font-extrabold mb-2">{job_title}</h2>
            <h3 className="text-xl text-[#757575] font-semibold mb-4">{company_name}</h3>
            <div className="flex gap-2 mb-5">
                <button className="text-base font-extrabold bg-gradient-to-r px-5 py-2 border rounded border-[#7E90FE] border-solid from-blue-400 to-purple-500 text-transparent bg-clip-text">{remote_or_onsite}</button>
                <button className="text-base font-extrabold bg-gradient-to-r px-5 py-2 border rounded border-[#7E90FE] border-solid from-blue-400 to-purple-500 text-transparent bg-clip-text">{job_type}</button>
            </div>
            <div className='flex gap-6 items-center mb-6'>
                <div className='flex gap-1 items-center'>
                    <h2><MdLocationOn className='text-2xl'></MdLocationOn></h2>
                    <p className='text-base font-semibold text-[#757575]'>{location}</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <h2><AiFillDollarCircle className='text-2xl'></AiFillDollarCircle></h2>
                    <p className='text-base font-semibold text-[#757575]'>{salary}</p>
                </div>
            </div>
            <Link to={`/job/${id}`}><button className='border px-5 py-3 mb-12 rounded bg-gradient-to-r from-blue-400 to-purple-500 text-base text-[#FFF] font-extrabold'>View Details</button></Link>
        </div>
    );
};

export default FeatureJob;