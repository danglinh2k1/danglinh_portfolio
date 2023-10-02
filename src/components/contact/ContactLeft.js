import React from "react";
import { FaFacebookF, FaFileAlt, FaTiktok, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { SiGmail } from "react-icons/si";
const ContactLeft = () => {
  return (
    <div className=" justify-center w-full lgl:w-[35%] h-full+10px bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 ">
      
      <div className="flex justify-evenly" >
        <div>
        <img
        className="w-[240px] h-[240px] object-cover mb-2 "
        src={contactImg}
        alt="contactImg"
      />
      </div>
      </div>
      <div className="flex flex-col gap-4 ">
        <h3 className="text-3xl font-bold text-white">Đăng Linh</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Please contact me through the social networks below. Thanks a lot!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+84 385359725</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">danglinh10062001@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/profile.php?id=100014523406673&mibextid=LQQJ4d">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
          <a href="https://vietcv.io/nguyen-dang-linh_cv">
            <span className="bannerIcon">
              <FaFileAlt />
            </span>
          </a>
          
          <a href="https://www.tiktok.com/@danglinh_2k1?is_from_webapp=1&sender_device=pc">
            <span className="bannerIcon">
              <FaTiktok />
            </span>
          </a>
          <a href="mailto:danglinh10062001@gmail.com">
            <span className="bannerIcon">
              <SiGmail />
            </span>
          </a>
          <a href="https://github.com/danglinh2k1">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
