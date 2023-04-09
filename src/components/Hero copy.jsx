import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-9xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>hi, i'm <span className="text-[#915eff]">yau</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a CS student at Columbia University interested in audio programming, AI/ML, and backend 
          </p>
        </div>
      </div>
        {/* className='xl:h-auto md:h-[550px] h-[350px]' */}
      
        <ComputersCanvas classname='md:h-[550px] h-[350px]'/>

    </section>
  )
}

export default Hero