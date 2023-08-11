import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDisconnect } from "@thirdweb-dev/react";
import { logo, sun } from "../assets";
import { navlinks } from "../constants/navLinks";
import { useStateContext } from "../context";

function Icon({ styles, name, imgUrl, isActive, disabled, handleClick }) {
  return (
    <div
      className={`w-[48px] h-[48px] rounded-[10px] ${
        isActive && isActive === name && "bg-[#2c2f32]"
      } flex justify-center items-center ${
        !disabled && "cursor-pointer"
      } ${styles}`}
      onClick={handleClick}>
      {!isActive ? (
        <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
      ) : (
        <img
          src={imgUrl}
          alt="fund_logo"
          className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}
        />
      )}
    </div>
  );
}

export default function Sidebar() {
  const router = useRouter();
  const [isActive, setIsActive] = useState("dashboard");
  const { connect, address } = useStateContext();
  const disconnect = useDisconnect();

  return (
    <div className="flex items-center flex-col sticky top-5 h-[93vh] ">
      <Link href={"/"}>
        <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo.src}></Icon>
      </Link>
      <div className=" flex flex-col justify-between items-center w-[76px] py-4 mt-12 bg-[#1c1c23] rounded-[20px]">
        <div className="flex flex-col justify-center items-center gap-3  ">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={async () => {
                if (link.disabled) return;
                if (link.name === "logout") {
                  await disconnect();
                  alert("disconnected");
                  // setIsActive("dashboard");
                  // router.push("/");
                  return;
                }
                setIsActive(link.name);
                router.push(link.link);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
