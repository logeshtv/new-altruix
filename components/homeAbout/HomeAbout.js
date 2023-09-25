import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Button from '../button/Button';
import BottomGlitter from '../StyledText/BottomGlitter';
import EventCard from '../event/EventGenral';

function HomeAbout() {
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if (window.innerHeight + 100 > ref.current.getBoundingClientRect().y) {
          ref.current.classList.add('active');
        } else {
          ref.current.classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section
      ref={ref}
      className="container-70 my-16 py-16 fadeonscroll sm:transform-none sm:opacity-100"
    >
      <div className="mt-28 mb-6 sm:mt-8 sm:mb-4">
          <BottomGlitter text="About AltruIx" />
          <div className="department">
            <div className="flex 2xl:flex-col xl:flex-col lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse mt-6">
                <div className="w-4/6 sm:w-full md:w-full lg:full xl:w-full 2xl:w-full"> 
                  <p className="text-lg text-sky-400 !important">
                    AltruIx, our eagerly anticipated symposium, is set to captivate minds on October 7th. 
                    This dynamic event combines the best of technology and creativity, featuring two 
                    exhilarating technical competitions, "Code N Tackle" and "Tech Fusion," designed to 
                    challenge and inspire. For those seeking a break from the digital realm, our non-technical 
                    offerings include "Film Fiesta" and "Riddle ARcade". Additionally, "Techno Think" provides 
                    a platform for innovators to showcase their projects. Join us for a day of exploration,
                    collaboration, and celebration at AltruIx!
                  </p>
                </div>
                <div className='ml-16 sm:mb-8 sm:ml-0 md:mb-8 md:ml-0 lg:mb-8 lg:ml-0 xl:mt-8 xl:ml-0 2xl:mt-8 2xl:ml-0'>
                  <EventCard
                    title="ALTRUIX"
                    description="Empowering Tech Enthusiasts"
                    bgImage="/gallery/mobile/altruix.webp"
                  />
                </div>
              </div>
            </div>
        </div>
      <Link href="/about">
        <a className="flex w-[fit-content] rounded-full">
          <Button className="bg-aneesh">
            <span className="z-50 block">View More</span>
          </Button>
        </a>
      </Link>
    </section>
  );
}

export default HomeAbout;
