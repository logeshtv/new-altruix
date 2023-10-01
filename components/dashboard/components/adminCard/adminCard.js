
import Styles from './event.module.css';
import DashboardData from '@/lib/data/dashboardData';
// import EventCard from '../enevtCard/eventCard';
import BottomGlitter from '@/components/StyledText/BottomGlitter';
import EventCard from '@/components/event/EventCard';

function AdminCard() {
  return (
    <section className={Styles.event}>
      <BottomGlitter text="Admin Dashboard" />
      <div className={Styles['cardContainer']}>
        {DashboardData.slice(0,3).map((item, index) => {
          return (
            <EventCard
              title={item.title}
              description={item.description}
              link={item.link}
              bgImage={item.bgImage}
              key={`${index + item.title}`}
            />
          );
        })}
      </div>
    </section>
  );
}

export default AdminCard;