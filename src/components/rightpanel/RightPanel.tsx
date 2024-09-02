import React from 'react';
import styles from './rightpanel.module.css';
import { Col, Row } from 'reactstrap';
import Resume from '../../pages/resume/Resume';
import Projects from '../../pages/project/Projects';
import Contact from '../../pages/contact/Contact';

const RightPanel = () => {
    return (
        <div className={styles.rightpanel_container}>
            <div className={styles.rightpanel_card}>
                <div className={styles.rightpanel_card_content}>
                    {/* <Row>
                        <Col>
                            <section id="home" className={styles.about}>
                                <div className={styles.title}>
                                    <label>Home</label>
                                    <span>Home</span>
                                </div>
                                <div>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed</div> 
                            </section>
                            
                        </Col>
                    </Row> */}
                    <Row>
                        <Col>
                            <section id="about" className={styles.about}>
                                <div className={styles.title}>
                                    <label>About Me</label>
                                    <span>About Me</span>
                                </div>
                                <div>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed</div> 
                            </section>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <section id="resume" className={styles.about}>
                                <div className={styles.title}>
                                    <label>Resume</label>
                                    <span>Resume</span>
                                </div>
                                <div>
                                    <Resume />
                                </div> 
                            </section>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <section id="project" className={styles.about}>
                            <div className={styles.title}>
                                <label>Projects</label>
                                <span>Projects</span>
                            </div>
                            <div>
                                <Projects />
                            </div> 
                        </section>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <section id="contact" className={styles.about}>
                            <div className={styles.title}>
                                <label>Contact</label>
                                <span>Contact</span>
                            </div>
                            <Contact />
                        </section>
                            
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default RightPanel;