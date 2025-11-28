import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

      const header1Ref = useRef(null);
  const header2Ref = useRef(null);
  
  const initialBlockRotation = {
    'block-1': { rotation: 42, transformOrigin: 'bottom right' },
    'block-5': { rotation: -42, transformOrigin: 'bottom left' },
  };


  useLayoutEffect(() => {
   
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.set(header2Ref.current, { opacity: 0, filter: 'blur(10px)' });
    gsap.set('.block-1', initialBlockRotation['block-1']);
    gsap.set('.block-5', initialBlockRotation['block-5']);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.sticky-container',
        start: 'top top',
        end: '+=3000',
        scrub: 0.5,
        pin: true,
      },
    });
    tl.to('.header-1-content', { 
        opacity: 0, 
        scale: 0.9,
        duration: 1.5 
    }, 0);
    tl.to(".block-1", {
        rotation: 0, 
        transformOrigin: 'bottom right', 
        duration: 1.5
    }, 0)
    .to(".block-5", {
        rotation: 0, 
        transformOrigin: 'bottom left', 
        duration: 1.5
    }, 0);
    tl.to(header2Ref.current, {
        opacity: 1, 
        filter: 'blur(0px)',
        duration: 1.5
    }, 1.5); 
    tl.to(header2Ref.current, {
        opacity: 0, 
        filter: 'blur(10px)',
        duration: 1.5
    }, 2.5); 

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div>Hero</div>
  )
}

export default Hero