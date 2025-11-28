import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

      const header1Ref = useRef(null);
  const header2Ref = useRef(null);
  
  // Define initial rotations for blocks 1 and 5 as per the first image design
  const initialBlockRotation = {
    'block-1': { rotation: 42, transformOrigin: 'bottom right' },
    'block-5': { rotation: -42, transformOrigin: 'bottom left' },
  };


  useLayoutEffect(() => {
    // 1. Kill any existing triggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // 2. Set Initial States (Header 2 hidden/blurred)
    gsap.set(header2Ref.current, { opacity: 0, filter: 'blur(10px)' });
    
    // Apply initial logo block rotations
    gsap.set('.block-1', initialBlockRotation['block-1']);
    gsap.set('.block-5', initialBlockRotation['block-5']);

    // 3. Setup the Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.sticky-container',
        start: 'top top',
        end: '+=3000', // Reduced scroll distance since cube animation is gone
        scrub: 0.5,
        pin: true,
      },
    });

    // --- Animation Sequence ---

    // 4. Header 1 (Fade out/Shrink)
    tl.to('.header-1-content', { 
        opacity: 0, 
        scale: 0.9,
        duration: 1.5 
    }, 0);

    // 5. Logo Block Rotation (Blocks 1 & 5 rotate to the 'flat' position)
    // The final state of the logo is a simple square, so rotation goes to 0
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

    // 6. Header 2 Fade In (Start when Header 1 is mostly gone)
    tl.to(header2Ref.current, {
        opacity: 1, 
        filter: 'blur(0px)',
        duration: 1.5
    }, 1.5); // Start after Header 1 is halfway through fading

    // 7. Header 2 Fade Out (End of animation)
    tl.to(header2Ref.current, {
        opacity: 0, 
        filter: 'blur(10px)',
        duration: 1.5
    }, 2.5); // End the animation before the pin is released

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