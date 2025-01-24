import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { phrase } from '../constants'


export default function Bio() {
  let refs = useRef([]);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('#name', { opacity: 1, delay: 1.5, duration: 1.5 });
    gsap.to('#title', { opacity: 1, delay: 1.8, duration: 1.5 });
    gsap.to('#bio', { opacity: 1, delay: 2.2, duration: 1.5 });
    createAnimation();
  }, [])

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: `top`,
          end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1
  })
}

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(
        <p key={word + "_" + i} className="text-xl md:text-2xl mr-1 font-bold inter-medium">
          {letters}
        </p>
      );
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
          className="opacity-20"
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <main
      ref={container}
      className="flex flex-col h-260 md:h-300 lg:h-300 items-start justify-center text-gray-300 bg-[#1d1d1f]"
    >
        <div id="name" className='text-3xl md:text-4xl lg:-mt-10 text-[#e2e2e5] ml-8 inter-extrabold tracking-wide opacity-0'>JESSAMIN JHOY GODIO</div>
        <div  id="title" className='text-xl md:text-2xl text-[#e2e2e5] ml-8 inter-regular  opacity-0'>Front End Developer</div>
      <div id='bio' className="flex flex-wrap mt-32 lg:mt-24 ml-8 mr-30 sm:mr-40 md:mr-34 lg:mr-56 xl:mr-72 opacity-0">{splitWords(phrase)}</div>
    </main>
  );
}
