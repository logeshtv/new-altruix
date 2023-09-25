import Styles from './genral.module.css';

function EventCard({ title, description, bgImage = '' }) {
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className={Styles.card}>
      <div className={Styles.cardBody}>
        <h2 className={Styles.cardTitle}>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default EventCard;
