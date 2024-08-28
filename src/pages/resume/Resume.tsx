import Skills from "../../components/skills/Skills";
import Education from "../education/Education";
import Experience from "../experience/Experience";

const Resume = () => {
    return (
        <div className="row">
            <div className='col-12'>
                <h4>Skills</h4>
                <div className="row">
                    <div className="col-3 col-lg-2 mt-1">
                        <Skills />
                    </div>
                    <div className="col-3 col-lg-2 mt-1">
                        <Skills />
                    </div>
                    <div className="col-3 col-lg-2 mt-1">
                        <Skills />
                    </div>
                    <div className="col-3 col-lg-2 mt-1">
                        <Skills />
                    </div>
                    <div className="col-3 col-lg-2 mt-1">
                        <Skills />
                    </div>
                    <div className="col-3 col-lg-2 mt-1">
                        <Skills />
                    </div>
                    <div className="col-3 col-lg-2 mt-1">
                        <Skills />
                    </div>
                    <div className="col-3 col-lg-2 mt-1">
                        <Skills />
                    </div>
                    <div className="col-3 col-lg-2 mt-1">
                        <Skills />
                    </div>
                    <div className="col-3 col-lg-2 mt-1">
                        <Skills />
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-6 mt-4'>
                <h4>Experience</h4>
                <Experience />
            </div>
            <div className='col-12 col-md-6 mt-4'>
                <h4>Education</h4>
                <Education />
            </div>
        </div>
    )
}

export default Resume;