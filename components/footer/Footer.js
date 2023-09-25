import Link from 'next/link';
import BottomGlitter from '../StyledText/BottomGlitter';
import Styles from './Footer.module.css';

function Footer() {
  return (
    <footer className= "container-70">
      <div className="mt-8 sm:mt-4 md:mt-12">
        <BottomGlitter text="Get In Touch" />
      </div>

      <div className={Styles.linksContainer}>
        {/* <div className='flex-wrap'> */}
          <div >
            <iframe className="w-full mb-10" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.2700429687116!2d80.04044376427917!3d12.82581866628666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f70d79722631%3A0x49afcd4648f94894!2sSRM%20Valliammai%20Engineering%20College!5e0!3m2!1sen!2sin!4v1695450243417!5m2!1sen!2sin" height="350px" allowfullscreen=""  referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div> 
          <div className="flex mr-2 md:mx-4 sm:mx-0 sm:mt-8">
            <div className='flex flex-col'>
              <div>
                  <h2 className="text-2xl text-aneesh font-bold">Other Pages</h2>
                  <a
                    href="https://srmvalliammai.ac.in/"
                    className="block pl-1 text-lg my-1 font-extralight"
                    target="_blank"
                    rel="noreferrer"
                  >
                    SRM-VEC
                  </a>
                  <Link href="/events">
                    <a className="pl-1 block text-lg my-1 font-extralight">Events</a>
                  </Link>
                  <Link href="/about">
                    <a className="pl-1 block text-lg my-1 font-extralight">About</a>
                  </Link>
                  <Link href="/teams">
                    <a className="pl-1 block text-lg my-1 font-extralight">Teams</a>
                  </Link>
              </div>
              <br/>
              <div>
                  <h2 className="text-2xl text-aneesh font-bold">Social Media</h2>
                  <a
                    href="https://www.instagram.com/altruix_2k23/"
                    className="block pl-1 text-lg my-1 font-extralight"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61551360785090"
                    className="block pl-1 text-lg my-1 font-extralight"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                  <a
                    href="http://linkedin.com/in/altruix-x-b0b9a5292"
                    className="block pl-1 text-lg my-1 font-extralight"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://twitter.com/altruix2k23"
                    className="block pl-1 text-lg my-1 font-extralight"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                  <a 
                    href="mailto:altruix2k23@gmail.com"
                    className="block pl-1 text-lg my-1 font-extralight"
                    target="_blank"
                    rel="noreferrer"
                  >
                    altruix2k23@gmail.com
                  </a>
                  
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:mt-8 ">
            <h2 className="text-2xl text-aneesh font-bold">Get Help</h2>
            <Link href="/forms">
              <a className="pl-1 block text-lg my-1 font-extralight">Join us</a>
            </Link>
            <Link href="/faqs">
              <a className="block pl-1 text-lg my-1 font-extralight">FAQs</a>
            </Link>
            <Link href="/contact">
              <a className="pl-1 block text-lg my-1 font-extralight">
                Contact Us
              </a>
            </Link>
            <h3>+91 9486985820</h3>
            <h3>+91 7871363570</h3>
          </div>

          <div className={Styles.copyrightBottom}>
            <h6>
               © {new Date().getFullYear()} ALTRUIX
            </h6>

            {/* <h6 className="flex items-center"> */}
              {/* Crafted with&nbsp;<span className="text-2xl">♥</span>&nbsp;by Artificial-inteL Hub  */}
              <a 
                    href="mailto:alphadevtech07@gmail.com"
                    className="block pl-1 text-lg my-1 font-extralight"
                    target="_blank"
                    rel="noreferrer"
                  ><h6 className="flex items-center">
                  Crafted with&nbsp;<span className="text-2xl">♥</span>&nbsp;by Alpha Developers</h6></a>
            {/* </h6> */}
          </div>
        </div>
    </footer>
  );
}

export default Footer;
