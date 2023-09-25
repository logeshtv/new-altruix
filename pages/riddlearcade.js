import Button from '@/components/button/Button';
import Screen from '../components/screen/Screen';
import BottomGlitter from '../components/StyledText/BottomGlitter';
import Styles from '../components/teams/Team.module.css';
import TeamCard from '../components/teams/TeamCard';
import { Symposium } from '../lib/data/TeamData';


function About() {
  return (
    <Screen>
      <section className="container mx-auto px-16 sm:px-4 pt-4 md:pt-16 sm:pt-12">
        <div className="my-16 w-full text-center">
          <BottomGlitter h2="Riddle ARcade" />
          <h2 className="text-xl mt-3">
            <BottomGlitter p="A Fusion of Mind and Adventure" />
          </h2>
        </div>
        <div className="mt-10 mb-6 sm:mt-8 sm:mb-4">
          <div className="department">
            <div className="flex 2xl:flex-col xl:flex-col lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse mt-6">
              <div className="w-4/6 5xl:w-full sm:w-full md:w-full lg:full xl:w-full 2xl:w-full">
                
                <BottomGlitter p="Event Overview :" />
                <p className="px-8 py-4 text-lg text-sky-400 !important">
                  This unique event combines the excitement of brain-teasing
                  riddles, the hilarity of charades, the intrigue of Akinator,
                  and the challenge of survival and teamwork .
                </p>
                <BottomGlitter p="Round 1: PuzzleCharade  (15 mins per batch)" />
                <p className="px-8 py-4 text-lg text-sky-400 !important">
                  In this fusion round, teams will be selected to compete. Test
                  your wit and creativity by solving riddles, but with a twist!
                  You must act out the answer to your riddle, much like a game
                  of dumb charades. Fast thinking and team work will be your
                  greatest assets.
                </p>
                <BottomGlitter p="Round 2: GuessWhiz (15 mins per batch)" />
                <p className="px-8 py-4 text-lg text-sky-400 !important">
                  Are you a master of deduction? In this Challenge, one
                  member of your team will become the Akinator. Their mission?
                  To guess the famous personality or celebrity assigned to them
                  by the event organizers. The catch? They can only ask yes or
                  no questions, and your team must provide the answers
                </p>
                <BottomGlitter p="Round 3:  Caught Adrif (30 mins per batch)" />
                <p className="px-8 py-4 text-lg text-sky-400 !important">
                  The final round will put your survival instincts to the test.
                  You'll find yourselves "Caught Adrift" in a scenario inspired
                  by the classic "LIFE OF PI" movie. Teams will have to make
                  life-and-death decisions to navigate treacherous waters and
                  survive.
                </p>
                <BottomGlitter p="Event Highlights:" />
                <ul className="px-8 py-2 text-lg list-disc p-5">
                  <li>Each team can consist of 2-4 members only</li>
                  <li>
                    A thrilling fusion of riddles, dumb charades, and guessing
                    games.
                  </li>
                  <li> Decisions by event coordinators are final.</li>
                  <li>
                    Immerse yourself in a survival scenario and become “Bear
                    grylls”.
                  </li>
                  <li>
                    Prizes await the most enigmatic and resourceful teams. 
                  </li>
                </ul>
                <BottomGlitter p="Contact:" />

                  <ul className="px-8 py-3 text-xl list-disc p-5">
                    <li>ajaiysuriya - 7871871816</li>
                    <li>Ramya A - 8939470605</li>
                  </ul>
                <a
                  href="/forms"
                  className="flex pt-8 w-[fit-content] rounded-full"
                  rel="noreferrer"
                >
                  <Button className='bg-aneesh'>
                    <span className="z-50  block">Register</span>
                  </Button>
                </a>
              </div>

              <div className="ml-0 sm:mb-8 sm:ml-0 md:mb-8 md:ml-16 lg:mb-8 lg:ml-16 xl:mt-8 xl:ml-16 2xl:mt-8 2xl:ml-16">
                <img
                  className="pl-16 mt-16  sm:mt-0 sm:pl-0"
                  src="/events/riddlearcade.webp"
                  alt="abc"
                />
              </div>
            </div>
          </div>
        </div>
        <h2 className={Styles.postHead}>
          <BottomGlitter h2="Event Members" />
        </h2>
          <div className={Styles.cardContainer}>
          {Symposium.slice(24, 28).map((item, index) => {
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