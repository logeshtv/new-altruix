import Head from 'next/head';
import Events from '../components/event/Events';
import Screen from '../components/screen/Screen';
import BottomGlitter from '../components/StyledText/BottomGlitter';
import EventCard from '../components/event/EventGenral';

function About() {
  return (
    <Screen>
      <Head>
        <title>About AltruIx</title>
        <meta
          name="description"
          content="Altruix is a National level symposium"
        />
        <meta
          name="keywords"
          content="About Us"
        />
      </Head>
      <section className="container-70 pt-28 md:pt-16 sm:pt-12">
        <div className="mt-20 mb-6 sm:mt-8 sm:mb-4">
          <BottomGlitter text="About SRM Valliammai" />
          <div className="department">
            <div className="flex 2xl:flex-col xl:flex-col lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse mt-6">
              <div className="w-4/6 sm:w-full md:w-full lg:full xl:w-full 2xl:w-full">
                <p className="text-lg text-sky-400 !important">
                  SRM Valliammai Engineering college (An Autonomous Institution) was established on September 9,
                  1999, and presently conducts 11 Undergraduate courses and 8 Postgraduate courses. The college
                  has highly qualified, dynamic and dedicated renowned faculty both from academic and industrial
                  background. Besides, the students bring laurels to the college by securing university ranks.
                  The SRM Valliammai Engineering College is a part of the SRM Group of Educational Institutions,
                  sponsored by the Valliammai Society. The Valliammai Society was founded by
                  Dr.T.R.Paarivendhar, a well-known educationist, in the name of his mother Tmt.
                  R.Valliammai, under whose care and guidance he attained greater heights in his
                  personal development and whose ideals continue to inspire him.
                </p>
              </div>
              <div className='ml-16 sm:mb-8 sm:ml-0 md:mb-8 md:ml-0 lg:mb-8 lg:ml-0 xl:mt-8 xl:ml-0 2xl:mt-8 2xl:ml-0'>
                <EventCard
                  title="SRM VALLIAMMAI ENGINEERING COLLEGE"
                  description="Institutions for privileged Learning"
                  bgImage="/gallery/mobile/srm.webp"
                />
              </div>
            </div>
          </div>
        </div>


        <div className="mt-28 mb-6 sm:mt-8 sm:mb-4">
          <BottomGlitter text="About Department" />
          <div className="department">
          <div className="flex 2xl:flex-col xl:flex-col lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse mt-6">
              <div className="w-4/6 sm:w-full md:w-full lg:full xl:w-full 2xl:w-full">
                <p className="text-lg text-sky-400 !important">
                  Bachelor of technology in Artificial Intelligence and Data Science that is a
                  blend of Artificial Intelligence and Data Science designed to develop a basic
                  understanding of problem-solving, knowledge representation, reasoning, and learning
                  methods of AI. This course enables the students to develop their skillset to do
                  intelligent data analysis, which is a key component in the emerging Data Science
                  careers in the IT field. AI technology enables software, apps, and machines to learn,
                  think, and correct themselves the same way humans do. A large part of AI involves
                  machine learning, which allows computers to understand and copy human behavior by
                  finding data patterns. Machine learning is the link that connects Data Science and AI.
                  AI is the tool that helps data science get results and solutions for specific problems.
                </p>
              </div>
              <div className='ml-16 sm:mb-8 sm:ml-0 md:mb-8 md:ml-0 lg:mb-8 lg:ml-0 xl:mt-8 xl:ml-0 2xl:mt-8 2xl:ml-0'>
                <EventCard
                  title="Artifical Intelligence & Data Science"
                  description="A Monthly event of coding contest based on algorithms, data structures, and problem solving."
                  bgImage="/gallery/mobile/ai.webp"
                />
              </div>
            </div>
          </div>
        

        </div>
        <Events />
      </section>
    </Screen>
  );
}

export default About;
