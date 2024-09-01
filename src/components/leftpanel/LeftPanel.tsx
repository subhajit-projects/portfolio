import React from 'react';
import styles from './leftpanel.module.css';

const LeftPanel = () => {
    return (
        <div className={styles.leftpanel_container}>
            <div className={styles.leftpanel_card}>
                <div className={styles.content}>
                    <div className={styles.image} style={{backgroundImage: 'url("/assets/images/profile.jpeg")'}}>
                        {/* <img src={ window.location.origin+"/assets/images/profile.jpeg" } /> */}
                    </div>
                    <div className={styles.text}>
                        <div className={styles.title}>Subhajit Dey</div>
                        <div className={styles.short_desc}>Software dev</div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.buttons}>
                            <div>Download CV</div>
                            <div>Contact With Me</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftPanel;