import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import gsap from 'gsap';
import { phrase } from '../constants'

gsap.registerPlugin(ScrollTrigger);

export default function Bio() {
  let refs = useRef([]);
  const container = useRef(null);

  const [title] = useTypewriter({
    words: ['Front End Developer', "UI/UX Designer", "React Developer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 50,
  })

  useEffect(() => {
    gsap.to('#name', { opacity: 1, delay: 1.5, duration: 1.5 });
    gsap.to('#title', { opacity: 1, delay: 1.8, duration: 1.5 });
    gsap.to('#bio', { opacity: 1, delay: 2.2, duration: 1.5 });
    gsap.to('#bio_footer', { opacity: '40%', delay: 2.6, duration: 1.5 });

    createAnimation();
  }, [])

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
          trigger: container.current,
          scrub: true,
          markers: false,
          start: `0%`,
          end: `22%`,
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
        <p key={word + "_" + i} className="text-xl md:text-2xl mr-1 font-bold inconsolata-regular">
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

  useEffect(() => {
    const divScale = document.querySelectorAll('.reveal');

    divScale.forEach((div) => {
      gsap.fromTo(
        div,
        {
          width: '100%',
          borderRadius: 0,
        
        },
        {
          width: '90%',
          duration: 1,
          borderRadius: '32px',
          scrollTrigger: {
            trigger: div,
            start: 'top 60%',
            end: 'top 45%',
            scrub: true,
            markers: false,
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main
      ref={container} id='discover' className='-mt-80 pt-90'>
        <div className="reveal flex flex-col h-full w-[90%] mx-auto items-start justify-start bg-[#2a2a2a] rounded-4xl">
          <div className='flex flex-row mx-auto justify-between w-[97.5%] px-4 lg:px-2 m-5'>
            <div className='h-6 w-6 bg-[#fe4e4d] rounded-full'></div>
            <div className='h-6 w-6 bg-[#feb800] rounded-full'></div>
            <div className='h-6 w-6 bg-[#00cb19] rounded-full'></div>
            <div className='h-6 w-[70%] sm:w-[78%] md:w-[84%] lg:w-[89%] xl:w-[90%] bg-[#6c7173] rounded-full'></div>
          </div>
        
          <div className='mt-30 flex flex-col items-center justify-center mx-auto'>
            <div id="name" className='text-4xl sm:text-5xl text-[#44c1f1] inconsolata-medium tracking-wide opacity-0'>JESSAMIN JHOY GODIO</div>
            <div id="title" className='text-2xl md:text-3xl  text-[#dcdcaa] inconsolata-regular-italic tracking-wide opacity-0 m-3'>&#8203;{title}</div>
          </div>

          <div>
            <div id='bio' className="flex flex-wrap mt-32 lg:mt-24 ml-8 lg:ml-30 mr-30 sm:mr-40 md:mr-34 lg:mr-56 xl:mr-72 text-[#dcaf9d] opacity-0">{splitWords(phrase)}</div>
              <br/><br/><br/>
              <div  id="bio_footer" className='text-xs md:text-sm lg:text-md text-gray-300 mt-15 ml-8 mb-30 lg:ml-30  mr-32 md:mr-64 lg:mr-121 inconsolata-regular opacity-20'><i>Glow Through the Code</i> embodies my personal vision of driving innovation to make a meaningful impact through code. In another sense, it also means being distinctive and exceptional in the way you approach life, challenges, and opportunities.
              </div> 
            </div>        
        </div>
    </main>
  );
}
