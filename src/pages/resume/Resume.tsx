import Skills from "../../components/skills/Skills";
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
                <div className="row">
                    <div className="col mt-1">
                        <Skills />
                    </div>
                    <div className="col mt-1">
                        <Skills />
                    </div>
                    <div className="col mt-1">
                        <Skills />
                    </div>
                    <div className="col mt-1">
                        <Skills />
                    </div>
                    <div className="col mt-1">
                        <Skills />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;