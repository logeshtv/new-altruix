import EventPage from '@/components/dashboard/pages/EventPage';
import { useRouter } from 'next/router';

function EventRegistrationPage() {
  const router = useRouter();
  const { eventName } = router.query;

    return(
        <div>
            <EventPage eventName={"techFusion"}/>
        </div>
    )

}


export default EventRegistrationPage;
