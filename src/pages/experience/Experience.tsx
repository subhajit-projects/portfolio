import { useEffect, useState } from 'react';
import Timeline from '../../components/timeline/Timeline';
import { ExperienceData } from '../../services/api/ExperienceData';
import { DateFormat } from '../../utils/DateFormat';

const Experience = () => {
    const [data, setData] = useState({apiData: Array(), isLoading: false})
    
    useEffect(() => {
        if(data.isLoading === false && data.apiData.length == 0) {
            callApi()
        }
    });

    const callApi = () => {
        handleLoader();
        ExperienceData(handleLoader).then(resp => {
            let copyData = {...data};
            let dataArray = Array();
            if(resp !== undefined) {
                resp.data.map((data:any, key: Number) => {
                    let objData:any = {};
                    objData['timeYear'] = DateFormat.doFormat(data.work_start, "YYYY") +" - "+DateFormat.doFormat(data.work_end, "YYYY")
                    objData['purpose'] = data.designation
                    objData['orgnizationName'] = data.company_name
                    objData['isActive'] = data.is_continue
                    objData['content'] = data.what_to_do
    
                    dataArray.push(objData);
                })                
            }
            copyData['apiData'] = dataArray;
            setData(copyData);
            // console.log("From page: ", resp);
        }).catch( err => {
            let copyData = {...data};
            let dataArray = Array();
            let objData:any = {};

            objData['timeYear'] = "0000 - 0000"
            objData['purpose'] = "Something was wrong"
            objData['orgnizationName'] = "";
            objData['isActive'] = false
            objData['content'] = "Sorry for the inconvience."

            dataArray.push(objData);
            copyData['apiData'] = dataArray;
            setData(copyData);
        })
    }

    const handleLoader = () => {
        let copyData = {...data};
        copyData.isLoading = !data.isLoading;
        setData(copyData);
    }

    const experienceData = [
        {
            timeYear: "2024 - Present",
            purpose: "Project Engineer",
            orgnizationName: "CDAC, Noida",
            isActive: true,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula...."
        },
        {
            timeYear: "2022 - 2024",
            purpose: "Project Engineer",
            orgnizationName: "CDAC",
            isActive: false,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula...."
        }
    ]
    return (
        <>
        {console.log(data)}
        <Timeline data={data.apiData} isLoading={data.isLoading} />
        </>
    )
}

export default Experience;



{/* <div>
            <div className="container py-5"> 




    <div className="row">
        <div className="col-lg-7">
            
            <!-- Timeline -->
            <ul className="timeline">
                <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div className="timeline-arrow"></div>
                    <h2 className="h5 mb-0">Title of section 1</h2><span className="small text-gray"><i className="fa fa-clock-o mr-1"></i>21 March, 2019</span>
                    <p className="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                </li>
                <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div className="timeline-arrow"></div>
                    <h2 className="h5 mb-0">Title of section 2</h2><span className="small text-gray"><i className="fa fa-clock-o mr-1"></i>5 April, 2019</span>
                    <p className="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper.</p>
                    <p className="text-small mt-2 font-weight-light">Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error architecto recusandae natus sapiente sit nam eaque, consectetur porro molestiae ipsam! Deleniti.</p>
                </li>
                <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div className="timeline-arrow"></div>
                    <h2 className="h5 mb-0">Title of section 3</h2><span className="small text-gray"><i className="fa fa-clock-o mr-1"></i>18 August, 2019</span>
                    <p className="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                </li>
                <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div className="timeline-arrow"></div>
                    <h2 className="h5 mb-0">Title of section 4</h2><span className="small text-gray"><i className="fa fa-clock-o mr-1"></i>10 October, 2019</span>
                    <p className="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                    <p className="text-small mt-2 font-weight-light">Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit natus! Eum corporis illum nihil officiis tempore. Excepturi illo natus libero sit doloremque, laborum molestias rerum pariatur quam ipsam necessitatibus incidunt, explicabo.</p>
                </li>
            </ul>
            <!-- End -->

        </div>
    </div>
</div> */}