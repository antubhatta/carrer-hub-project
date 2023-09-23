

const FeatureJob = ({job}) => {
   const {logo,job_title,company_name,remote_or_onsite,locarion,job_type,salary}=job
    return (
        <div className="bg-[#E8E8E8] rounded-lg border w-full border-solid pl-10 pt-10">
            <img className="mb-8" src={logo} alt="" />
            <h2 className="text-2xl text-[#474747] font-extrabold mb-2">{job_title}</h2>
            <h3 className="text-xl text-[#757575] font-semibold mb-4">{company_name}</h3>
            <div className="flex gap-2 mb-5">
                <button className="text-base font-extrabold bg-gradient-to-r px-5 py-2 border rounded border-[#7E90FE] border-solid from-blue-400 to-purple-500 text-transparent bg-clip-text">{remote_or_onsite}</button>
                <button className="text-base font-extrabold bg-gradient-to-r px-5 py-2 border rounded border-[#7E90FE] border-solid from-blue-400 to-purple-500 text-transparent bg-clip-text">{job_type}</button>
            </div>
        </div>
    );
};

export default FeatureJob;