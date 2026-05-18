import { useContext } from "react";
import UserContext from "../utils/hooks/UserContext";
import FooterFoot from "./FooterFoot";
import FooterHead from "./FooterHead";

const Footer = () => {
  const user = useContext(UserContext);
  console.log(user);
  
  return (
    <footer className="mt-16 bg-[#f0f0f5] text-[#3d4152]">
      <FooterHead></FooterHead>

      <div className="border-t border-gray-300"></div>

      <FooterFoot></FooterFoot>
    </footer>
  );
};

export default Footer;
