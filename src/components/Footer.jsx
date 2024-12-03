import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-white px-[12px] py-[30px] text-center text-[15px] leading-[30px]">
      <div>Copyright © 2036 Cyborg Gaming Company. All rights reserved.</div>
      <div>
        Design: <Link to="https://templatemo.com">TemplateMo</Link>
      </div>
    </div>
  );
};

export default Footer;
