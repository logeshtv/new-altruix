import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import Styles from './SocialsBar.module.css';

const ICON_SIZE = 36;
function SocialsBar() {
  return (
    <section className={Styles.socialsBar}>
      <a
        href="https://www.facebook.com/profile.php?id=61551360785090"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a>
      <a
        href="https://instagram.com/altruix_2k23?igshid=OGQ5ZDc2ODk2ZA=="
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a>
      <a
        href="http://linkedin.com/in/altruix-x-b0b9a5292"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a><a
        href="https://twitter.com/altruix2k23"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a>
    </section>
  );
}

export default SocialsBar;
