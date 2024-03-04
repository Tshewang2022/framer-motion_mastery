import { IoHomeOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useRef } from "react";

const sliderVarients = {
  initials: {
    x: 0,
  },
  animate: {
    x: 200,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};
const Properties = () => {
  return (
    <>
      <div className="w-full ">
        <div className="text-center mb-[32px]">
          <h2 className="text-[32px] text-black font-roboto font-semibold ">
            Property by Area
          </h2>
          <p className="text-[16px] text-[#717171] font-sans text-center leading-[140%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo,
            sint!lorem10
          </p>
        </div>
        <div className="mb-[64px]">
          <div className="flex items-center justify-center gap-[24px] pb-[24px]">
            <div
              className="w-[416px] h-[242px] p-[16px] rounded-[4px] bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url('/assets/images/sunshine.jpg')` }}
            >
              <h4 className="text-white text-[24px] font-sans font-semibold">
                Homeland
              </h4>
              <p className="text-white">listing for lease</p>
            </div>
            <div
              className="w-[416px] h-[242px] p-[16px] rounded-[4px] bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url('/assets/images/sunshine.jpg')` }}
            >
              <h4 className="text-white text-[24px] font-sans font-semibold">
                Homeland
              </h4>
              <p className="text-white">listing for lease</p>
            </div>
            <div
              className="w-[416px] h-[242px] p-[16px] rounded-md bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url('/assets/images/sunshine.jpg')` }}
            >
              <h4 className="text-white text-[24px] font-sans font-semibold">
                Homeland
              </h4>
              <p className="text-white">listing for lease</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-[24px]">
            <div
              className="w-[638px] h-[214px] bg-slate-200 p-[16px] rounded-[4px] bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url('/assets/images/sunshine.jpg')` }}
            >
              <h4 className="text-white text-[24px] font-sans font-semibold">
                Homeland
              </h4>
              <p className="text-white">listing for lease</p>
            </div>
            <div
              className="w-[638px] h-[214px] bg-slate-200 p-[16px] rounded-md bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url('/assets/images/sunshine.jpg')` }}
            >
              <h4 className="text-white text-[24px] font-sans font-semibold">
                Homeland
              </h4>
              <p className="text-white">listing for lease</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-200 py-[32px]  from-blue-600 to-purple-600 bg-gradient-to-b">
        <div className="text-center mb-[32px]">
          <h2 className="text-[32px] text-black font-roboto font-semibold ">
            Property by Area
          </h2>
          <p className="text-[16px] text-[#717171] font-sans text-center leading-[140%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo,
            sint!lorem10
          </p>
        </div>
        <div className="mt-[32px]">
          <div className="flex justify-center items-center gap-[64px]">
            <motion.div whileHover={{backgroundColor: 'lightblue'}} className="w-[320px] h-[290px] border-2 p-[16px] bg-white rounded-md shadow-md">
              <IoHomeOutline className="w-[48px] h-[48px] bg-white" />
              <h2 className="text-[24px] font-semibold text-[#363A3D] font-roboto leading-[150%] my-[16px]">
                Sale your home
              </h2>
              <p className="text-[#717171] text-[12px] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                fugit voluptatum nam maxime quam, natus dolor suscipit optio
                aliquid iusto.
              </p>
              <h4 className="text-[16px] my-[32px]"> Read more</h4>
            </motion.div>
            <div className="w-[320px] h-[290px] border-2 border-gray-300 p-[16px] bg-white shadow-md rounded-md">
              <IoHomeOutline className="w-[48px] h-[48px]" />
              <h2 className="text-[24px] font-semibold text-[#363A3D] font-roboto leading-[150%] my-[16px]">
                Sale your home
              </h2>
              <p className="text-[#717171] text-[12px] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                fugit voluptatum nam maxime quam, natus dolor suscipit optio
                aliquid iusto.
              </p>
              <h4 className="text-[16px] my-[32px]"> Read more</h4>
            </div>
            <div className="w-[320px] h-[290px] border-2 border-gray-300 p-[16px] bg-white shadow-md rounded-md">
              <IoHomeOutline className="w-[48px] h-[48px]" />
              <h2 className="text-[24px] font-semibold text-[#363A3D] font-roboto leading-[150%] my-[16px]">
                Sale your home
              </h2>
              <p className="text-[#717171] text-[12px] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                fugit voluptatum nam maxime quam, natus dolor suscipit optio
                aliquid iusto.
              </p>
              <h4 className="text-[16px] my-[32px]"> Read more</h4>
            </div>
          </div>
          <div>
            <h2 className="text-[50px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              voluptates.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Properties;
