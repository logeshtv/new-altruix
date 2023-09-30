import Notice from '@/components/Notice';
import Head from 'next/head';
import AdminCard from '../components/adminCard/adminCard';
import EventPort from '../components/eventCard/EventPort';
import Dashnavbar from '../components/navbar/navbar';

export default function MainDash() {
  return (
    <>
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
      <Dashnavbar/>
      <section className='container-70  md:pt-16 sm:pt-12'>

        <AdminCard />
        <EventPort />
      </section>
    </>
  );
}