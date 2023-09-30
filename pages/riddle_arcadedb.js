import EventPage from '@/components/dashboard/pages/EventPage';
import { useRouter } from 'next/router';

function EventRegistrationPage() {
  const router = useRouter();
  const { eventName } = router.query;

    return(
        <div>
            <EventPage eventName={"riddle_arcade"}/>
        </div>
    )

}


export default EventRegistrationPage;
