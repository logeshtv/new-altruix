import Button from '@/components/button/Button';
import Head from 'next/head';
import Screen from '../components/screen/Screen';
import BottomGlitter from '../components/StyledText/BottomGlitter';
import Styles from '../components/teams/Team.module.css';
import TeamCard from '../components/teams/TeamCard';


import { Symposium } from '../lib/data/TeamData';


function About() {
  return (
    <Screen>
      <Head>
        <title>TECH FUSION ✨</title>
      </Head>
      <section className="container mx-auto px-16 sm:px-4 pt-4 md:pt-16 sm:pt-12">
        <div className="my-16 w-full text-center">
          <BottomGlitter h2="Tech Fusion" />
          <h2 className="text-xl mt-3">
            <BottomGlitter p="Tech Fusion Quest: Where Knowledge Meets the Unexpected" />
          </h2>
        </div>
        <div className="mt-10 mb-6 sm:mt-8 sm:mb-4">
          <div className="department">
            <div className="flex 2xl:flex-col xl:flex-col lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse mt-6">
              <div className="w-4/6 5xl:w-full sm:w-full md:w-full lg:full xl:w-full 2xl:w-full">
                <BottomGlitter p="Event Overview:" />
                <p className="px-8 py-4 text-lg text-sky-400 !important">
                Tech Fusion Quest is an unforgettable two-round experience designed 
                to push the boundaries of your knowledge and creativity while keeping
                you on the edge of your seat. Get ready to be tested, inspired, and 
                amazed as you navigate through this thrilling quest.
                </p>
                <BottomGlitter p="Round 1 : Fusioned Questions (30 mins per batch)" />
                <p className="px-8 py-4 text-xl text-sky-400 !important">
                In the opening round, participants will attend the Fusioned Questions round 
                presents a mind-bending fusion of topics drawn from various domains, including 
                Artificial Intelligence, Machine Learning, Deep Learning, and more. Gather your 
                team and brace yourselves for a challenge that will take your combined expertise 
                to decode and conquer.Participants will face an exciting challenge that will put 
                their coding skills to the test. They will be presented with a series of coding questions 
                that span various difficulty levels, ranging from beginner to advanced. The fusion of knowledge awaits!
                </p>
                <BottomGlitter p="Round 2 : The Surprise Technical Round" />
                <p className="px-8 py-4 text-xl text-sky-400 !important">
                The second round is where the excitement reaches its peak! At this 
                point, we unveil the surprise technical challenge that will put your 
                skills and adaptability to the test. But here's the twist: this challenge 
                is a closely guarded secret, revealed on the spot. Be ready to think on your 
                feet, harness your technical prowess, and face the unexpected head-on. 
                It's an adrenaline-pumping experience that will ignite your creativity and 
                problem-solving abilities.
                </p>

                <BottomGlitter p="Contact:" />

                  <ul className="px-8 py-3 text-xl list-disc p-5">
                    <li>Lakshmi Narayanan M - 6374210052</li>
                    <li>Chiranjeevi M - 9443258766</li>
                  </ul>
                <a
                  href="/forms"
                  className="flex pt-8 w-[fit-content] rounded-full"
                  rel="noreferrer"
                >
                  <Button className='bg-aneesh'>
                    <span className=" z-50  block">Register</span>
                  </Button>
                </a>
              </div>

              <div className="ml-0  sm:mb-8 sm:ml-0 md:mb-8 md:ml-16 lg:mb-8 lg:ml-16 xl:mt-8 xl:ml-16 2xl:mt-8 2xl:ml-16">
                <img
                  className="pl-16 mt-8 sm:mt-0 sm:pl-0"
                  src="/events/techfusionposter.webp"
                  alt="ac"
                />
              </div>
            </div>
          </div>
        </div>
        <h2 className={Styles.postHead}>
          <BottomGlitter h2="Event Members" />
        </h2>
        <div className={Styles.cardContainer}>
          {Symposium.slice(34, 38).map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                // <img src={item.imageSrc} alt="Team Member" />
                imageSrc={`/teams/Event/${item.imageSrc}.webp`}
                lazyImageSrc={`/teams/TechFusion/lazy/${item.imageSrc}-min.jpg`}
                socials={item.socials}
              />
            );
          })}
        </div>
      </section>
    </Screen>
  );
}

export default About;




// Participation is limited to a team of Two Members.
// Round 1 of the Event will include Technical MCQs followed by a Coding Challenge.
// The Team will have 15 minutes to finish the Technical Multiple-choice Questions.
// In the Coding Challenge, 15 minutes will be given to the Team to solve 3 Coding Challenges.
// In the Coding Challenge, the first member will start the Challenge. After 5 minutes the next team member will swap their position, and in the last 5 minutes both the team members will solve together.
// Advancement to the subsequent round will be determined based on the accuracy of answers and the time taken by each team.
// Round 2 of the Event consists of a surprise Challenge revealed on the spot.
// Participants will have a limited time to complete the challenge.
// Teams must work collaboratively to tackle the unknown task.