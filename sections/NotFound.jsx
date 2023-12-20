'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant, planetVariants } from '../utils/motion';
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

const NotFound = () => (
    <section className='min-h-[85vh] lg:min-h-[85vh] flex items-center' id='home'>
        <div className='container mx-auto'>
            <div className='flex flex-col gapy-y-8 lg:flex-row lg:items-center lg:gap-12'>
                {/* Text */}
                <div className='flex-1 text-center font-secondary lg:text-left'>
                    <h1 className='text-white text-[55px] font-bold leading-[1.0] lg:text-[110px]'>
                        Página Não Encontrada
                    </h1>
                    <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold /*uppercase*/ leading-[1]'>
                        <TypeAnimation sequence={[
                            'Está no lugar certo?',
                            2000,
                            'Ainda estamos construindo nosso website',
                            2000,
                            'Volte mais tarde, às vezes muda alguma coisa',
                            2000
                        ]} 
                        speed={50}
                        className='gradientbluepurple'
                        wrapper='span'
                        repeat={Infinity}
                        />
                    </div>
                    <div className='flex max-w-max gap-x-10 mt-10 items-center mb-12 mx-auto lg:mx-0'>
                        <a href="" className='button-63 font-medium'>Orçamento</a>
                        <a href='/' className='text-gradient btn-link text-white font-medium'>
                            Voltar a página inicial!
                        </a>    
                    </div>
                </div>2
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

export default NotFound;