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
          <BottomGlitter h2="Code N Tackle" />
          <h2 className="text-xl mt-3">
            <BottomGlitter p="Where coding gets quizzical and all magical !" />
          </h2>
        </div>
        <div className="mt-10 mb-6 sm:mt-8 sm:mb-4">
          <div className="department">
            <div className="flex 2xl:flex-col xl:flex-col lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse mt-6">
              <div className="w-4/6 5xl:w-full sm:w-full md:w-full lg:full xl:w-full 2xl:w-full">
                <BottomGlitter p="General Rules :" />
                <p className="px-8 py-4 text-lg text-sky-400 !important">
                  Sportsmanship is key throughout the event, and any disruptive
                  or unsportsmanlike behavior may result in disqualification.
                  The quizmaster's decisions on questions, answers, and scoring
                  are final.
                </p>
                <BottomGlitter p="Round 1 : Codequest (30 mins per batch)" />
                <ul className="px-8 py-2 text-lg list-disc p-5">
                  <li>
                    Participants have to select their problem by scanning
                    available QR code it will generate random problem for them.
                  </li>
                  <li>
                    A password protected file will be provided, and participants
                    must unlock it using the answer to their assigned problem.
                  </li>
                  <li>
                    Within the unlocked file, participants will discover a key,
                    which they must use to submit along with a screenshot of
                    their problem's code via a Google Form.
                  </li>
                  <li>
                    Only the top 16 participants who successfully complete this
                    process will advance to the next round.
                  </li>
                </ul>
                <BottomGlitter p="Round 2: Quiz Burst " />
                <ul className="px-8 py-2 text-lg list-disc p-5">
                  <li>
                    The 16 participants are divided into 2 groups of 8 each. A
                    technical quiz is displayed on the screen, visible to all
                    participants.(total question:5)
                  </li>
                  <li>
                    Balloons are placed, and the first team to pop a balloon
                    gets a chance to answer the quiz within 30 seconds.
                  </li>
                  <li>
                    Correct answers earn the team 2 points, while an incorrect
                    answer passes the question to the opposite team, which can
                    earn 1 point for a correct response.
                  </li>
                  <li>
                    The team with the highest total points advances to the next
                    round, where members are divided into 2 groups of 4 for a
                    repeat of the process. This continues until one member is
                    selected as the winner.
                  </li>
                </ul>
                <BottomGlitter p="Contact:" />

                  <ul className="px-8 py-3 text-xl list-disc p-5">
                    <li>Sanjana Babu - 8667574271</li>
                    <li>Yuvarani K - 8825446345</li>
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
                  className="pl-16 mt-16 sm:mt-0 sm:pl-0"
                  src="/events/codentackle.webp"
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
          {Symposium.slice(42, 46).map((item, index) => {
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