import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { styles } from "../styles"
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Hero = () => {

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        // className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        className='flex-[0.75] bg-black-100 p-20 rounded-2xl w-full h-screen'
      >
        {/* <section className={`relative w-full h-screen`}> */}
    <section className={`h-[200px]`}>
      <div
        className={`absolute inset-0 op-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>hi, i'm <span className="text-[#915eff]">yau</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 h-screen`}>
            I'm a CS student at Columbia University interested in audio programming, AI/ML, backend, or any combination of the three. Here's a 3D model of me to physicalize my digital presence.
          </p>
        </div>
      </div>

    </section>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-screen'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Hero, "hero");