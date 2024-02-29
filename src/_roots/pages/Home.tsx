const Home = () => {
  return (
    <div
      className="w-full h-[667px] mb-[64px]"
      style={{ backgroundImage: `url("/assets/images/6620476.jpg")` }}
    >
      <div className=" pt-[96px]">
        <h2 className="text-center font-roboto text-[32px] font-medium text-black">
          Find Your Dreams
        </h2>
        <p className="text-center font-sans text-[14.5px] text-[#717171] mt-[16px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quae?
        </p>
      </div>
      <div className="mt-[120px] ">
        <div className="flex justify-center items-center gap-[32px]">
          <button className="text-[16px] text-white font-normal leading-normal px-[24px] py-[12px] rounded-md font-roboto bg-[#4A60A1]">
            Report
          </button>
          <button className="text-[16px] font-normal leading-normal px-[24px] py-[12px] rounded-md font-roboto bg-white gap-[24px] border-2">
            Report
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[32px]">
        <div className="bg-slate-200 w-[1400px] h-[168px] rounded-lg">
          <div className="flex items-center justify-between px-[32px h-full px-[32px]">
            <div className="border-2 border-gray-400 p-[10px]">
              <h4 className="text-black font-roboto text-[16px]">Locations</h4>
              <p className="text-[14.5px] font-sans text-[#717171]">
                RTC, Thimphu Bhutan
              </p>
            </div>
            <div className="border-2 border-gray-400 p-[10px]">
              <h4 className="text-black font-roboto text-[16px]">Locations</h4>
              <p className="text-[14.5px] font-sans text-[#717171]">
                RTC, Thimphu Bhutan
              </p>
            </div>
            <div className="border-2 border-gray-400 p-[10px]">
              <h4 className="text-black font-roboto text-[16px]">Locations</h4>
              <p className="text-[14.5px] font-sans text-[#717171]">
                RTC, Thimphu Bhutan
              </p>
            </div>
            <div className="text-[16px] font-roboto text-white">
              <button className="bg-[#4A60A1] rounded-md px-[24px] py-[12px] text-white">
                Shared
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
