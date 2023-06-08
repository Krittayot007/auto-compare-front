import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FacebookIcon, InstagramIcon, LineIcon, TwitterIcon } from "../icons";

export default function Footer() {
  return (
    <div className="flex flex-col justify-between items-center w-full h-40 bg-[#F2EFDF] text-[#24274C] p-4">
      <div>Contact Us</div>
      <div>
        <FontAwesomeIcon icon={faPhone} /> : 0987654321 , 0123456789
      </div>
      <div className="flex gap-6">
        <FacebookIcon className="fill-[#24274C]" />
        <LineIcon className="fill-[#24274C]" />
        <InstagramIcon className="fill-[#24274C]" />
        <TwitterIcon className="fill-[#24274C]" />
      </div>
    </div>
  );
}
