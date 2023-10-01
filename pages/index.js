/* eslint-disable jsx-a11y/media-has-caption */
import Notice from '@/components/Notice';
import Head from 'next/head';
import GridGallery from '../components/gridGallery/GridGallery';
import HomeAbout from '../components/homeAbout/HomeAbout';
import Screen from '../components/screen/Screen';
import TechStack from '../components/techStack/TechStack';
import Video from '../components/video/Video';
import CountdownTimer from '../components/CountDown/CountDownTimer';
import RegCounter from '@/components/Regcount/REgcount';


export default function Home() {
  return (
    <Screen>
      <Notice />
      <Head>
        <title>Altruix</title>
        <meta
          name="description"
          content="Altruix is an National level symposium"
        />
        <meta
          name="keywords"
          content="Symposium and Hackathon"
        />
      </Head>
      <Video />
      <CountdownTimer />
      <RegCounter/>
      <HomeAbout />
      <TechStack />
      <GridGallery />
    </Screen>
  );
}
