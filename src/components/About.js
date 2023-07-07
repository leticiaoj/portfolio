import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Image from '../assets/about.png';
import cv from '../assets/Letícia-Oliveira-CV.pdf';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <section className='section' id='about'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen mb-[250px] flex'>
          <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 bg-contain bg-no-repeat g-[640px] mix-blend-lighten bg-top'><img src={Image} alt='' /></motion.div>
          <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1'>
            <h2 className='h2 text-accent'>Sobre mim</h2>
            <h3 className='h3 mb-4'>Sou uma Desenvolvedora Full Stack</h3>
            <p className='mb-6'>Falo Inglês e Espanhol e minhas principais soft e hard skills desenvolvidas ao longo da minha jornada são: comunicação, trabalho em equipe, atenção aos detalhes, Python, Java, SQL, HTML, CSS, JavaScript, TypeScript, React, entre muitas outras, que você pode conferir no meu currículo.</p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  <CountUp start={0} end={810} duration={10} />
                  +
                </div>
                <div className='front-primary text-sm tracking-[2px]'>
                  Horas de <br/>
                  Faculdade
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  <CountUp start={0} end={447} duration={10} />
                  +
                </div>
                <div className='front-primary text-sm tracking-[2px]'>
                  Horas de <br/>
                  Bootcamp
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <a href={cv} target='_blank' download={cv}>
              <button className='btn btn-lg'>Baixe meu currículo</button>
              </a>
              <a href='https://www.linkedin.com/in/leticiaj/' target='blank' className='text-gradient btn-link'>
                Meu LinkedIn
              </a>
            </div>
        </motion.div>
      </div>
    </div>
    </section >
  )
};

export default About;
