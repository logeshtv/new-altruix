import React, { useEffect, useState } from 'react';
import styles from  '../CountDown/CountDown.module.css';

function CountdownTimer(deadline) {
    const [timer, setTimer] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        function updateTimer(deadline) {
            const time = deadline - new Date();
            setTimer({
                days: Math.floor(time / (1000 * 60 * 60 * 24)),
                hours: Math.floor((time / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((time / 1000 / 60) % 60),
                seconds: Math.floor((time / 1000) % 60),
            });
        }

        const deadline = new Date('October 07, 2023 8:00:00');
        const timerInterval = setInterval(() => {
            updateTimer(deadline);
        }, 1000);

        return () => {
            clearInterval(timerInterval);
        };
    }, []);

    const animateClock = (span) => {
        // Use state to apply styles instead of direct DOM manipulation
        span.classList.add(styles['animated-span']);
        setTimeout(() => {
            span.classList.remove(styles['animated-span']);
        }, 1000);
    };

    return (
        <div className={styles['countdown-root']}>
            <div id={styles.main}>
                <div id={styles.clock}>
                    <span style={{ animationName: 'animate__flipOutY' }} className={styles['countdown-span']}>
                        {timer.days}
                    </span> 
                    <span
                        style={{
                            animationName: 'animate__flipOutY',
                        }}
                        className={styles['countdown-span']}
                    >
                        {timer.hours}
                    </span>
                    <span
                        style={{
                            animationName: 'animate__flipOutY',
                        }}
                        className={styles['countdown-span']}
                    >
                        {timer.minutes}
                    </span>
                    <span
                        style={{
                            animationName: 'animate__flipOutY',
                        }}
                        className={styles['countdown-span']}
                    >
                        {timer.seconds}
                    </span>
                </div>
                <div id={styles.display}>
                    <span>Days</span> <span>Hours</span> <span>Minutes</span>
                    <span>Seconds</span>
                </div>
            </div>
        </div>
        );
}

export default CountdownTimer;
