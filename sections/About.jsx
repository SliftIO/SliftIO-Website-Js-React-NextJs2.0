'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-33 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Sobre a SliftIO" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
          Somos uma <span className="font-extrabold text-white">empresa de tecnologia</span> especializada em desenvolvimento 
          de <span className="font-extrabold text-white">sistemas</span>, <span className="font-extrabold text-white">web</span> e <span className="font-extrabold text-white">apps
          </span>. Nosso foco está em <span className="font-extrabold text-white">automatização
          </span>, resolução de <span className="font-extrabold text-white">bugs
          </span> e garantia de <span className="font-extrabold text-white">segurança
          </span> em todas as soluções que oferecemos. Utilizamos tecnologia de ponta para criar <span className="font-extrabold text-white">bots
          </span> e soluções que impulsionam os negócios de nossos clientes.

      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
