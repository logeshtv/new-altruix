import Styles from './Glitter.module.css';

function BottomGlitter({ text,p,h2 }) {
  return (
    <div className={Styles.heading}>
      <h1 className={Styles.headingText}>{text}</h1>
      <h1 className={Styles.headingp}>{p}</h1>
      <h2 className={Styles.headingh2}>{h2}</h2>
      <span />
      <span />
    </div>
  );
}

export default BottomGlitter;
