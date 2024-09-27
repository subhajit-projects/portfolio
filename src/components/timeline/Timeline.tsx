
import { Placeholder } from 'reactstrap';
import styles from './timeline.module.css';

interface timeLineData {
    timeYear: String,
    purpose: String,
    orgnizationName: String,
    isActive: Boolean,
    content?: String
}

interface timeLineDataArray {
    data: timeLineData[],
    isLoading: Boolean
}

const Timeline = (props: timeLineDataArray) => {
    return(
        <ul className={styles.timeline}>
            {
                (!props.isLoading) ?
                    props.data.map( (data, key) => (
                        <li className={`${styles.timeline_item}`}>
                            <div className={styles.timeline_arrow}></div>
                            <div className={data.isActive ? styles.active : ''}><span className={styles.year}>{data.timeYear}</span></div>
                            <div className='pt-2'><span className={styles.possition}>{data.purpose}</span></div>
                            <div><span className={styles.company}>{data.orgnizationName}</span></div>
                            <div>{data.content}</div>
                            
                        </li>
                    ) )
                :
                    <>
                        <li className={`${styles.timeline_item}`}>
                            <div className={styles.timeline_arrow}></div>
                            <Placeholder as="title" animation="glow">
                                <div>
                                    <Placeholder xs={3} />
                                </div>
                                <div>
                                    <Placeholder xs={6} /> &nbsp;
                                    <Placeholder xs={4} />
                                    <Placeholder xs={8} /> &nbsp;
                                    <Placeholder xs={3} />
                                    <Placeholder xs={12} />
                                </div>
                            </Placeholder>
                        </li>
                        <li className={`${styles.timeline_item}`}>
                            <div className={styles.timeline_arrow}></div>
                            <Placeholder as="title" animation="glow">
                                <div>
                                    <Placeholder xs={3} />
                                </div>
                                <div>
                                    <Placeholder xs={6} /> &nbsp;
                                    <Placeholder xs={4} />
                                    <Placeholder xs={8} /> &nbsp;
                                    <Placeholder xs={3} />
                                    <Placeholder xs={12} />
                                </div>
                            </Placeholder>
                        </li>
                    </>
            }
            
            {/* <li className={`${styles.timeline_item}`}>
                <div className={styles.timeline_arrow}></div>
                <div><span className={styles.year}>2024 - Present</span></div>
                <div className='pt-2'><span className={styles.possition}>Project Enigneer</span></div>
                <div><span className={styles.company}>CDAC</span></div>
                <h2 className="h5 mb-0">Title of section 1</h2><span className="small text-gray"><i className="fa fa-clock-o mr-1"></i>21 March, 2019</span>
                <p className="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
            </li> */}
        </ul>
    )
}

export default Timeline;