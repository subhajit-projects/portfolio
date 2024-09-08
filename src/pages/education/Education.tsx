import { useEffect, useState } from 'react';
import Timeline from '../../components/timeline/Timeline';
import { EducationData } from '../../services/api/EducationData';

const Education = () => {
    const [data, setData] = useState({apiData: Array(), isLoading: false})
    
    useEffect(() => {
        if(data.isLoading === false && data.apiData.length == 0) {
            callApi()
        }
    });

    const callApi = () => {
        handleLoader();
        EducationData(handleLoader).then(resp => {
            let copyData = {...data};
            let dataArray = Array();
            if(resp !== undefined) {
                resp.data.map((data:any, key: Number) => {
                    let objData:any = {};
                    objData['timeYear'] = data.start_year +" - "+data.end_year
                    objData['purpose'] = data.streem
                    objData['orgnizationName'] = data.institute_name
                    objData['isActive'] = data.is_continue
                    objData['content'] = "Will be come soon..."
    
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
            timeYear: "2018 - 2021",
            purpose: "MCA",
            orgnizationName: "FIEM",
            isActive: false,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula...."
        },
        {
            timeYear: "2015 - 2018",
            purpose: "BCA",
            orgnizationName: "FIEM",
            isActive: false,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula...."
        }
    ]
    return (
        <Timeline data={data.apiData} isLoading={false} />
    )
}

export default Education;