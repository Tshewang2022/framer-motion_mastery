import {motion} from 'framer-motion'
//import { useRef } from 'react';
const Parallax = () => {
//   const ref = useRef()
//   const {scrollYProgess} = useScroll({
//     target:ref,
//     offset:['start start', 'end start']
//   })
// const yBg = useTransform(scrollYProgess, [0, 1], ['0', '500%'])
  return (

    // === FOR BACKGROUND IMG ===
    <div className="linear-gradient-r bg-gradient-to-b from-[#14146b] to-[#0c0c1d] relative h-[100vh] flex justify-center items-center"
    // ref={{ref}}
    >
      <motion.h1 className="text-[56px] text-white font-roboto font-semibold">
        What we do ?
      </motion.h1>
      <motion.div
        className="bg-cover bg-center bg-no-repeat absolute h-[100%] w-[100%] z-30"
        style={{ backgroundImage: `url('/assets/images/mountains.png')` }}
      ></motion.div>
      <motion.div
        className="z-20 absolute bg-cover bg-bottom bg-no-repeat h-[100%] w-[100%]"
        style={{ backgroundImage: `url('/assets/images/stars.png')` }}
      ></motion.div>
      {/* <div
        className="bg-no-repeat bg-left  h-[100%] w-[100%] z-0 absolute"
        style={{ backgroundImage: `url('/assets/images/sun.png')` }}
      ></div> */}
      <motion.div
        className="absolute z-10 bg-cover bg-right bg-no-repeat h-[100%] w-[100%]"
        style={{ backgroundImage: `url('/assets/images/planets.png')` }}
      ></motion.div>
    </div>
  );
};

export default Parallax;
