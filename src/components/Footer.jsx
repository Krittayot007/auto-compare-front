import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FacebookIcon, InstagramIcon, LineIcon, TwitterIcon } from "../icons";

export default function Footer() {
  return (
    <div className="flex flex-col justify-between items-center w-full h-40 bg-[#24274C] text-[#F1EFDF] p-4">
      <div>Contact Us</div>
      <div>
        <FontAwesomeIcon icon={faPhone} /> : 0987654321 , 0123456789
      </div>
      <div className="flex gap-6">
        <FacebookIcon className="fill-[#F1EFDF]" />
        <LineIcon className="fill-[#F1EFDF]" />
        <InstagramIcon className="fill-[#F1EFDF]" />
        <TwitterIcon className="fill-[#F1EFDF]" />
      </div>
    </div>
  );
}
