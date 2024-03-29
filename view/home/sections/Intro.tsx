import { Button } from '@/components/ui/button';
import Tooltip from '@/components/ui/tooltip';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import {
  SiCypress,
  SiNextdotjs,
  SiReact,
  // SiSvelte,
  SiExpress,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
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
    name: 'Email to khai@rul.sh',
    icon: <MdEmail className="text-3xl" />,
    url: 'mailto:khai@rul.sh',
  },
];

const techStacks = [
  { name: 'Typescript', icon: <SiTypescript color="#007acc" /> },
  { name: 'React & React Native', icon: <SiReact color="#65d9fc" /> },
  { name: 'Tailwindcss', icon: <SiTailwindcss color="#389bb1" /> },
  {
    name: 'Next.js',
    icon: <SiNextdotjs className="text-[#000000] dark:text-white" />,
  },
  {
    name: 'Express',
    icon: <SiExpress className="text-[#333] dark:text-white" />,
  },
  {
    name: 'Postgresql',
    icon: <SiPostgresql className="text-[#31648c] dark:text-white" />,
  },
  // { name: 'Svelte', icon: <SiSvelte color="#ff3c00" /> },
  // {
  //   name: 'Cypress',
  //   icon: <SiCypress className="text-[#000000] dark:text-[#fff]" />,
  // },
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
            Software
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
          Hi, I'm Khairul 👋. A passionate Software Developer based in
          Kalimantan Barat, Indonesia.
        </p>
      </AOS>

      <AOS
        delay={500}
        animateIn="fadeInUp"
        className="flex items-center flex-wrap -mx-3 text-slate-800 dark:text-white">
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
        <p className="inline-block border-r dark:border-r-white pr-3 mr-4 text-sm font-medium mt-1 mb-3 md:mb-0">
          Tech Stack
        </p>
        <div className="flex items-center flex-wrap flex-1 gap-3 md:gap-5 text-2xl lg:text-3xl">
          {techStacks.map((stack) => (
            <Tooltip
              key={stack.name}
              title={stack.name}
              className="cursor-default">
              <button
                type="button"
                className="hover:scale-110 transition-transform">
                {stack.icon}
              </button>
            </Tooltip>
          ))}
        </div>
      </AOS>
    </section>
  );
};

export default Intro;
