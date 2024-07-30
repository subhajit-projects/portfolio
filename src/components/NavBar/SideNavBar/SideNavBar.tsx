
import styles from './sidenav.module.css';

const SideNavBar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar_content}>
                <div className={styles.menu}>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Resume</li>
                        <li>Project</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className={styles.theme_change}>sun</div>
            </div>
        </div>
    )
}

export default SideNavBar;