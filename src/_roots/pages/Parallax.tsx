const Parallax = () => {
  return (
    // === FOR BACKGROUND IMG ===
    <div className="linear-gradient-r bg-gradient-to-b from-[#14146b] to-[#0c0c1d] relative h-[100vh] flex justify-center items-center">
      <h1 className="text-[56px] text-white font-roboto font-semibold">
        What we do ?
      </h1>
      <div
        className="bg-cover bg-center bg-no-repeat absolute h-[100%] w-[100%] z-30"
        style={{ backgroundImage: `url('/assets/images/mountains.png')` }}
      ></div>
      <div
        className="z-20 absolute bg-cover bg-bottom bg-no-repeat h-[100%] w-[100%]"
        style={{ backgroundImage: `url('/assets/images/stars.png')` }}
      ></div>
      {/* <div
        className="bg-no-repeat bg-left  h-[100%] w-[100%] z-0 absolute"
        style={{ backgroundImage: `url('/assets/images/sun.png')` }}
      ></div> */}
      <div
        className="absolute z-10 bg-cover bg-right bg-no-repeat h-[100%] w-[100%]"
        style={{ backgroundImage: `url('/assets/images/planets.png')` }}
      ></div>
    </div>
  );
};

export default Parallax;
