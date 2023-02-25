import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact,FaTiktok } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiVuedotjs,SiAdobephotoshop,SiAdobeillustrator,SiGmail,SiInstagram } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Font-End Developer.", "UI Designer.", "Graphic Design.","Video Editor."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal uppercase">welcome to my profile</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi. I'm <span className="uppercase font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 " >Đăng Linh</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I'm a font-end programmer, a graphic designer and a video editor. I always want to learn and know a lot of things, to develop myself and earn money from many different sources. I always try to work hard every day to improve myself."The only person you should try to be better than is the person you were yesterday"-(Anonymous)
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between ">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="grid gap-x-8 gap-y-4 grid-cols-3">
            <a href="https://www.facebook.com/profile.php?id=100014523406673&mibextid=LQQJ4d">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            </a>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
            <a href='https://www.tiktok.com/@danglinh_2k1?is_from_webapp=1&sender_device=pc'>
            <span className="bannerIcon">
              <FaTiktok />
            </span>
            </a>
            <a href="mailto:danglinh10062001@gmail.com">
            <span className="bannerIcon">
              <SiGmail />
            </span>
            </a>
            <span className="bannerIcon">
              <SiInstagram />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="grid gap-x-8 gap-y-4 grid-cols-3">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiVuedotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
            <span className="bannerIcon">
              <SiAdobephotoshop />
            </span>
            <span className="bannerIcon">
              <SiAdobeillustrator />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner