import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/gecko.jpeg';
import Img2 from '../assets/psitalks.png'

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            <div>
              <h2 className='h2 leading-tight text-accent'>
                Meus principais <br />
                projetos
              </h2>
              <p className='mb-[20px]'>Principais projetos desenvolvidos ao longo da minha trajetória acadêmica.</p>
              <a href="https://github.com/leticiaoj" target='blank'>
                <button className='btn btn-sm'>Ver todos os projetos</button>
              </a>
            </div>
            <div>
              <div className='group relative overflow-hidden border-2 border-wwhite/50 rounded-x1'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <a href="https://projetogecko.vercel.app/" target='blank'>
                    <span className='text-gradient'>E-commerce</span>
                  </a>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <a href="https://projetogecko.vercel.app/" target='blank'>
                    <span className='text-3x1 text-white'>Gecko</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1'>
            <div>
              <div className='group relative overflow-hidden border-2 border-wwhite/50 rounded-x1'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='' />
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <a href="https://psitalks.vercel.app/" target='blank'>
                    <span className='text-gradient'>Blog Pessoal</span>
                  </a>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <a href="https://psitalks.vercel.app/" target='blank'>
                    <span className='text-3x1 text-white'>Psitalks</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
