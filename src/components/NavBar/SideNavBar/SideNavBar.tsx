import React, { useContext } from 'react';
import styles from './sidenav.module.css';
import { AppContext } from '../../../store/AppContext';

const SideNavBar = () => {
    const { appContextData, setAppContextData }:any = useContext(AppContext);

    const theme_change = () => {
        let copy_data = {...appContextData};        
        let current_theme = copy_data.appContextData.theme;
        if(current_theme === 'theme-dark') {
            copy_data.appContextData.theme = '';
        }else {
            copy_data.appContextData.theme = 'theme-dark';
        }
        setAppContextData(copy_data);
    }
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar_content_bg}>
                <div className={styles.sidebar_content}>
                    <div className={styles.menu}>
                        <ul>
                            <li>
                                <a href="#home">
                                    <img src={window.location.origin+"/assets/images/home.png"} alt='resume-logo' />
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#about">
                                    <img src={window.location.origin+"/assets/images/about.png"} alt='resume-logo' />
                                    <span>About</span>
                                </a>
                            </li>
                            <li>
                                <a href="#resume">
                                    <img src={window.location.origin+"/assets/images/resume.png"} alt='resume-logo' />
                                    <span>Resume</span>
                                </a>
                            </li>
                            <li>
                                <a href="#project">
                                    <img src={window.location.origin+"/assets/images/project.png"} alt='resume-logo' />
                                    <span>Project</span>
                                </a>
                            </li>
                            <li>
                                <a href="#contact">
                                    <img src={window.location.origin+"/assets/images/contact.png"} alt='resume-logo' />
                                    <span>Contact</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.theme_change} onClick={theme_change}>{appContextData.appContextData.theme === 'theme-dark'?<img src={window.location.origin+"/assets/images/light_theme.png"} alt="change to light theme" />:<img src={window.location.origin+"/assets/images/dark_theme.png"} alt="change to dark theme" />}</div>
                </div>
            </div>
        </div>
    )
}

export default SideNavBar;