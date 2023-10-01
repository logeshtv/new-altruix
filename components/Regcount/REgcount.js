import { useRef, useEffect, useState } from "react";
import styles from './counter.module.css';
import axios from "axios";

function RegCounter(){
    const ref = useRef();

    const [profile, setProfile] = useState([])
    useEffect(async ()=>{  
        const res = await axios.get('/api/getAll');
        setProfile(res.data.profiles);     
    },[])

    useEffect(() => {
        const handleScroll = () => {
        if (ref.current) {
            if (window.innerHeight + 80 > ref.current.getBoundingClientRect().y) {
            ref.current.classList.add('active');
            } else {
            ref.current.classList.remove('active');
            }
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <section ref={ref} className="container-70 items-center pt-8 fadeonscroll sm:transform-none sm:opacity-100">
            <div className="flex xl:flex-col sm:flex-col 2xl:flex-col justify-around">
                <div className="max-w-md py-4 px-8 border-4 border-aneesh shadow-lg rounded-lg my-20">
                    <div>
                        <h2 className={styles.text}>Total Registration</h2>
                        <h2 className={styles.number}>{50+profile.length}</h2>
                    </div>
                </div>
                <div className="max-w-md py-4 px-8 border-4 border-aneesh shadow-lg rounded-lg my-20">
                    <div>
                        <h2 className={styles.text}>Total Prize-Pool</h2>
                        <h2 className={styles.number}>{14000}</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default RegCounter;