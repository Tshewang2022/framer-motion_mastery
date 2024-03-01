import { navLinks } from "../constants";
const Navbar = () => {
  return (
    <nav className="full text-center px-[128px] py-[40px]">
      <div className="flex justify-between items-center">
        <div>
          <img src="logo" alt="logo" />
        </div>
        <ul className="flex justify-center items-center gap-[32px] text-[14.5px]">
          {navLinks.map((link) => (
            <li>{link.title}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
