import { Button } from '@/components/ui/button';
import Tooltip from '@/components/ui/tooltip';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import {
  SiCypress,
  SiNextdotjs,
  SiReact,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import Lottie from '@/components/ui/lottie';
import AOS from '@/components/containers/scroll-animation';

import profilePict from '@/assets/images/profile-pict.jpg';
import shiningStarsLottie from '@/assets/lottie/38319-shining-stars.json';

const links = [
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/khairul169/',
  },
  {
    name: 'Github',
    icon: <FaGithub />,
    url: 'https://github.com/khairul169',
  },
  {
    name: 'Email',
    icon: <MdEmail className="text-3xl" />,
    url: 'mailto:me@khairul.my.id',
  },
];

const techStacks = [
  { name: 'Typescript', icon: <SiTypescript color="#007acc" /> },
  { name: 'React', icon: <SiReact color="#65d9fc" /> },
  { name: 'Next.js', icon: <SiNextdotjs color="#000000" /> },
  { name: 'Svelte', icon: <SiSvelte color="#ff3c00" /> },
  { name: 'Tailwindcss', icon: <SiTailwindcss color="#389bb1" /> },
  { name: 'Cypress', icon: <SiCypress color="#1b1e2e" /> },
];

const Intro = () => {
  return (
    <section
      id="intro"
      className="min-h-[100vh] flex flex-col justify-center gap-8 py-10">
      <AOS
        animateIn="fadeIn"
        delay={100}
        style={{ backgroundImage: `url('${profilePict.src}')` }}
        className="w-20 h-20 bg-cover rounded-full"
      />

      <div className="relative">
        <AOS animateIn="fadeIn" className="inline-block">
          <h1
            id="heading"
            className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
            Front-End
            <br />
            Developer
          </h1>
        </AOS>
        <Lottie
          animationData={shiningStarsLottie}
          className="absolute left-0 top-0 bottom-0 z-[1]"
        />
      </div>

      <AOS animateIn="fadeInUp">
        <p id="subheading" className="lg:text-xl">
          Hi, I'm Khairul. A passionate Front-End Developer based in Kalimantan
          Barat, Indonesia. 🌳
        </p>
      </AOS>

      <AOS
        delay={500}
        animateIn="fadeInUp"
        className="flex items-center flex-wrap -mx-3 text-slate-800 dark:text-white/75">
        {links.map((link) => (
          <Tooltip key={link.name} title={link.name}>
            <Button asChild size="sm" variant="ghost" className="text-2xl">
              <a href={link.url} target="_blank">
                {link.icon}
              </a>
            </Button>
          </Tooltip>
        ))}
      </AOS>

      <AOS
        delay={500}
        animateIn="fadeIn"
        className="md:flex items-start lg:mt-20">
        <p className="inline-block border-r pr-3 mr-4 text-sm font-medium mt-1 mb-3 md:mb-0">
          Tech Stack
        </p>
        <div className="flex items-center flex-wrap flex-1 gap-3 md:gap-5 text-2xl lg:text-3xl">
          {techStacks.map((stack) => (
            <Tooltip key={stack.name} title={stack.name}>
              <a
                id={stack.name.toLowerCase()}
                href={`#${stack.name.toLowerCase()}`}>
                {stack.icon}
              </a>
            </Tooltip>
          ))}
        </div>
      </AOS>
    </section>
  );
};

export default Intro;
