import React from 'react'
import Button from '@/components/button/Button';
import Screen from '@/components/screen/Screen';
import BottomGlitter from '../components/StyledText/BottomGlitter';
import Styles from '../components/teams/Team.module.css';
import TeamCard from '../components/teams/TeamCard';
import { Symposium } from '../lib/data/TeamData';


function About() {
  return (
    <Screen>
      <section className="container mx-auto px-16 sm:px-4 pt-4 md:pt-16 sm:pt-12">
        <div className="my-16 w-full text-center">
          <BottomGlitter h2="Film Fiesta" />
          <h2 className="text-xl mt-3">
            <BottomGlitter p=" Dive into the Magic of Kollywood" />
          </h2>
        </div>
        <div className="mt-10 mb-6 sm:mt-8 sm:mb-4">
          <div className="department">
            <div className="flex 2xl:flex-col xl:flex-col lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse mt-6">
              <div className="w-4/6 5xl:w-full sm:w-full md:w-full lg:full xl:w-full 2xl:w-full">

                <BottomGlitter p="General Rules :" />
                <p className="px-8 py-4 text-lg text-sky-400 !important">
                  Participants can compete individually or in teams of up to 3
                  members.No use of electronic devices or external help is
                  allowed during this round.
                </p>
                <BottomGlitter p="Round 1: Grab the Snaps  (30 mins per batch)" />
                <p className="px-8 py-4 text-lg text-sky-400 !important">
                  Every film is built around core elements that give its
                  unique identity. Whether it’s a signature prop, a specific
                  setting, or a unique character trait, these elements become
                  synonymous with the movie itself. In Grab the Snaps,
                  participants will be provided with some of these core elements
                  or clues. Your challenge? Identify the movie they belong to.
                  If you pride yourself on understanding the essence of a film,
                  prepare to prove it in this round!
                </p>
                <BottomGlitter p="Round 2: Rythmic Riddles (15 mins per batch)" />
                <ul className="px-8 py-3 text-lg list-disc p-5">
                    <li>
                    Participants will be played an interlude or background music
                  (BGM) from a film.
                    </li>
                    <li>
                    The catch? Identify the song or the movie
                  it hails from.
                    </li>
                    <li>
                    Each song snippet will be played a maximum of
                      two times.
                    </li>
                  
                  </ul>

                <BottomGlitter p="Round 3:  Freeze Frame (Finals)" />
                <p className="px-8 py-4 text-lg text-sky-400 !important">
                  Participants will be shown frames or stills from movies. Your
                  challenge is to identify the movie based solely on that still
                  shot.
                </p>
                <BottomGlitter p="Contact:" />

                  <ul className="px-8 py-3 text-xl list-disc p-5">
                    <li>Sanjay A - 7305838751</li>
                    <li>Shivasurya S T - 9789067337</li>
                  </ul>
                <a
                  href="/forms"
                  className="flex pt-8 w-[fit-content] rounded-full"
                  rel="noreferrer"
                >
                  <Button>
                    <span className="z-50  block">Register</span>
                  </Button>
                </a>
              </div>

              <div className="ml-0 sm:mb-8 sm:ml-0 md:mb-8 md:ml-16 lg:mb-8 lg:ml-16 xl:mt-8 xl:ml-16 2xl:mt-8 2xl:ml-16">
                <img
                  className="pl-16 mt-16 sm:mt-0 sm:pl-0"
                  src="/events/filmfiesta.webp"
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
          {Symposium.slice(26, 32).map((item, index) => {
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
