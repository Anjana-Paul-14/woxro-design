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
    <>
      <section
        className={`sticky-container relative h-[100vh] bg-[#331707] text-[#FFE9D9] overflow-hidden font-notch-grotesk`}
        style={{ height: '100vh', width: '100vw' }}
      >
        {/* --- Logo (Center Top) --- */}
        <div className="logo absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-6 z-20">
          <div className="col flex flex-col justify-end">
            {/* Block 1: Initial rotation of 42deg applied via GSAP. */}
            <div className="block block-1 w-[35px] h-[35px] bg-[#ffe9d9]" />
            <div className="block block-2 w-[35px] h-[35px] bg-[#ffe9d9]" />
          </div>
          <div className="col flex flex-col gap-[26px]">
            <div className="block block-3 w-[35px] h-[35px] bg-[#ffe9d9]" />
            <div className="block block-4 w-[35px] h-[35px] bg-[#ffe9d9]" />
          </div>
          <div className="col flex flex-col justify-end">
             {/* Block 5: Initial rotation of -42deg applied via GSAP. */}
            <div className="block block-5 w-[35px] h-[35px] bg-[#ffe9d9]" />
            <div className="block block-6 w-[35px] h-[35px] bg-[#ffe9d9]" />
          </div>
        </div>
        
        {/* The Cubes container (.cubes) has been removed */}

        {/* --- Header 1 (Initial Text) --- */}
        <div ref={header1Ref} className="header-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] text-center transform-origin-center">
          <h1 className="header-1-content font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            The first media company crafted for the digital first generation.
          </h1>
        </div>

        {/* --- Header 2 (Second Text) --- */}
        <div ref={header2Ref} className="header-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30%] text-center transform-origin-center">
          <div className="max-w-full mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">Where innovation meets precision.</h2>
            <p className="text-sm sm:text-base font-light">
              Symphonia unites visionary thinkers, creative architects, and analytical experts,
              collaborating seamlessly to transform challenges into opportunities. Together, we deliver tailored solutions that drive impact and inspire growth.
            </p>
          </div>
        </div>
      </section>

      {/* --- Scroll Padding Section (ensures scroll space) --- */}
      <section className="about min-h-[150vh] flex justify-center items-center text-center bg-[#cdb9ab] text-[#331707] font-notch-grotesk">
        <h2 className="text-4xl font-bold">Your next section goes here.</h2>
      </section>
    </>
  )
}

export default Hero