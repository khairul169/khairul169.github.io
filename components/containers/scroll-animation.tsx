'use client';
import AnimateScroll from 'react-animate-on-scroll';

const AOS = (props: React.ComponentProps<typeof AnimateScroll>) => (
  <AnimateScroll offset={0} animateOnce {...props} />
);

export default AOS;
