const ContactUs = () => {
  return (
    <div className="bg-slate-200 w-full mt-[64px] py-[64px] flex justify-center items-center">
      <div className="p-[32px]">
        <h1 className="text-center font-roboto leading-normal text-[32px]">
          Contact Us
        </h1>
        <div className="flex justify-center items-center">
          <p className="text-[16px] max-w-[640px] text-center text-[#717171] py-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            sapiente at explicabo similique nihil reiciendis cupiditate.
            Reiciendis, expedita eum assumenda exercitationem nemo eligendi
            dignissimos accusamus, omnis hic mollitia, quisquam repellat.
          </p>
        </div>
        <div className="bg-white  p-[32px] rounded-md lg:w-[880px]">
          <h4 className="font-sans text-[24px] leading-[120%] ">
            Enquiry Form
          </h4>
          <p className="text-[14px] text-[#717171] leading-[150%] font-sans py-[16px]">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.
          </p>
          <div className="flex justify-between items-center gap-[16px] py-[16px]">
            <input
              type="text"
              placeholder="First Name"
              className="py-[12px] border-2 border-gray-400 w-full px-[16px]"
            />
            <input
              type="text"
              placeholder="Second Name"
              className="py-[12px] border-2 border-gray-400 w-full px-[16px]"
            />
          </div>
          <input
            type="text"
            placeholder="Email address"
            className="py-[12px] border-2 border-gray-400 w-full  px-[16px]"
          />
          <input
            type="text"
            placeholder="Your comment or questions"
            className="py-[12px] border-2 border-gray-400 w-full min-h-[105px] px-[16px] mt-[16px]"
          />
          <div className="w-full flex justify-center items-center pt-[16px]">
            <button className="bg-[#4A60A1] text-[16px] font-semibold leading-[120%] px-[24px] py-[12px] rounded-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
