"use client";
import Main from "../app/components/Main";
import Division from "./components/Division";
import { AiFillHome, AiFillCustomerService } from "react-icons/ai";
import { BsFillFilePersonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../src/BusAnimation/data.json";
import Link from "next/link";
export default function Home() {
  const mainColor = "#fcc757";
  return (
    <div style={{ fontFamily: "Poppins", backgroundColor: mainColor }}>
      {/* navbar */}
      <div className=" border-l-2 border-white right-0 top-0 h-[100vh]  backdrop:blur-[4rem] bg-[#ffd458] flex flex-col justify-end  items-center  w-[4rem] absolute z-[] px-[4rem]">
        <ul style={{ color: "white" }}>
          <motion.li
            className="rounded-xl p-4 transition-all duration-300"
            whileHover={{
              transform: "translate(-1rem)",
              backgroundColor: "white",
              color: mainColor,
            }}
          >
            <Link href="/home">
              <AiFillHome size={40} />
            </Link>
          </motion.li>
          <motion.li
            className="rounded-xl p-4 transition-all duration-300"
            whileHover={{
              transform: "translate(-1rem)",
              backgroundColor: "white",
              color: mainColor,
            }}
          >
            <Link href="/about">
              <BsFillFilePersonFill size={40} />
            </Link>
          </motion.li>
          <motion.li
            className="rounded-xl p-4 transition-all duration-300"
            whileHover={{
              transform: "translate(-1rem)",
              backgroundColor: "white",
              color: mainColor,
            }}
          >
            <GiHamburgerMenu size={40} />
          </motion.li>
        </ul>
      </div>
      <Main
        mainComponent={
          <Division
            animateFrom={{}}
            animateTo={{}}
            animationTransition={{}}
            classStyles={`w-screen h-screen `}
            divisionComponents={
              <div className="w-screen h-screen ">
                <div className="w-screen h-screen absolute flex justify-center items-end top-[-50%] rounded-[50%] bg-white border-[1rem] hover:border-0 border-black overflow-hidden hover:top-0 hover:left-0 hover:rounded-none transition-all duration-500">
                  <Lottie className="w-full" animationData={animationData} />
                </div>
                <div className=" absolute bottom-4 p-6  w-[80%] ">
                  <h1 className="text-[4rem] font-bold text-white mx-4">
                    LogIn
                    <div className="bg-white h-[5px] w-[15%] rounded-full"></div>
                  </h1>
                  <div className="flex justify-start gap-[1rem] mx-4 items-center">
                    <input
                      type="password"
                      placeholder="Enter password."
                      className="text-2xl my-5 mt-10 outline-none p-4 transition-all duration-100 bg-white text-black rounded-xl py-4  placeholder:text-black w-[25rem]"
                    />
                  </div>
                  <div className="flex justify-start gap-[1rem] mx-4 items-center">
                    <input
                      type="password"
                      placeholder="Enter password."
                      className="text-2xl my-5 outline-none p-4 transition-all w-[25rem] duration-100 bg-white text-black rounded-xl py-4  placeholder:text-black"
                    />
                  </div>
                  <button className="border-2 border-b-8 border-black bg-white px-[10rem] py-5 rounded-xl text-black text-2xl font-bold ml-4 my-4">
                    Submit
                  </button>
                </div>
              </div>
            }
          />
        }
        animateFrom={{}}
        animateTo={{}}
        animationTransition={{}}
        classStyles={`w-screen h-screen bg-[${mainColor}] text-white`}
      />
    </div>
  );
}
