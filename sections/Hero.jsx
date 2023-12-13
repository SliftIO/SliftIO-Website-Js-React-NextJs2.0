'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant, planetVariants } from '../utils/motion';
import{FaGithub, FaYoutube, FaLinkedin, FaInstagram} from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation';
import { fadeIn } from '../utils/motion';
import Image from '../public/971.jpg';
import styled, { keyframes } from 'styled-components';


const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const FloatingElement = styled.div`
  animation: ${floatAnimation} 5s ease-in-out infinite;
`;

const Hero = () => (
  <section className='min-h-[85vh] lg:min-h-[85vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gapy-y-8 lg:flex-row lg:items-center lg:gap-12'>
        {/* Text */}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <h1 className='text-white text-[55px] font-bold leading-[1.0] lg:text-[110px]'>
            Slift<span>.io</span>
          </h1>
          <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold /*uppercase*/ leading-[1]'>
            <span className='text-white mr-4'>Desenvolvimento de  </span>
            <br/>
            <TypeAnimation sequence={[
              'Sistemas',
              2000,
              'Aplicações Web',
              2000,
              'Automações',
              2000,
              'Aplicativos',
              2000
            ]} 
            speed={50}
            className='gradientbluepurple'
            wrapper='span'
            repeat={Infinity}
            />
          </div>
          <p className='mx-auto font-medium text-[24px] lg:mx-0 text-white'>
            Transforme suas ideias em realidade digital! Avançe o progresso da sua empresa por meio  
            de estratégias digitais.
          </p>
          <div className='flex max-w-max gap-x-10 mt-10 items-center mb-12 mx-auto lg:mx-0'>
            <button className='button-63 font-medium'>Orçamento</button>
            <a href='#' className='text-gradient btn-link text-white font-medium'>
              Entrar em Contato
            </a>
          </div>
          {/* Socials */}
          <div className='text-white flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href="#">
              <FaGithub/>
            </a>
            <a href="#">
              <FaYoutube/>
            </a>
            <a href="#">
              <FaLinkedin/>
            </a>
            <a href="#">
              <FaInstagram/>
            </a>
          </div>
        </div>
        {/* Image */}
        <FloatingElement>
          <div className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[502px]'>
              <img src="/codeimage4.png" className='animate-float'/>
          </div>
        </FloatingElement>
      </div>
    </div>
  </section>
);

export default Hero;