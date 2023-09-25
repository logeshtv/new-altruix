import Head from 'next/head';
import Events from '../components/event/Events';
import Screen from '../components/screen/Screen';
import BottomGlitter from '../components/StyledText/BottomGlitter';
import EventCard from '../components/event/EventGenral';
import Form from '@/components/forms/Forms';
import Button from '../components/button/Button';

function About() {
  return (
    <Screen>
      <Head>
        <title>Register AltruIx</title>
        <meta
          name="description"
          content="Altruix is a National level symposium"
        />
        <meta
          name="keywords"
          content="About Us"
        />
      </Head>
      <Form />
    </Screen>
  );
}

export default About;
