import { motion } from 'framer-motion';
import { styles } from '../../styles'
import { ComputersCanvas } from './canvas';
import { gmail } from "../../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex
      flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          {/* <div className="w-5 h-5 rounded-full bg-[#FFC9BF]"/>
          <div className="w-1 sm:h-80 h-40 white-500"/> */}
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-[#261400]`}>Hi, I'm <span className="text-[#FFC9BF]">Vivian</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-[#FFFFFF]`}>
            I am a Computer Science Specialist student <br className="sm:block hidden"></br> at the University of Toronto
          </p>
        </div>
      </div>

      <ComputersCanvas/>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero