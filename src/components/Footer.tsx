import { footerLinks } from "../constants";
const Footer = () => {
  return (
    <footer className="w-fulll py-[64px]">
      <div className="">
        <ul className="flex justify-between items-center">
          <div>about the company</div>
          {footerLinks.map((section) => (
            <div>
              <h4 className="text-[24px] font-rototo font-semibold leading-[120%]">
                {section.title}
              </h4>
              <div className="">
                {section.links.map((link) => (
                  <a href="/">{link.name}</a>
                ))}
              </div>
            </div>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
