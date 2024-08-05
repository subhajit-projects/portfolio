import Experience from "../experience/Experience";

const Resume = () => {
    return (
        <div className="row">
            <div className='col-12 col-md-6'>
                <h4>Experience</h4>
                <Experience />
            </div>
            <div className='col-12 col-md-6'>
                <h4>Skills</h4>
                <Experience />
            </div>
        </div>
    )
}

export default Resume;