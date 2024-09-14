import { useEffect, useState } from "react";
import { AboutData } from "../../services/api/AboutService";


const About = () => {
    const [data, setData] = useState({apiData: "", isLoading: false})

    useEffect(() => {
        if(data.isLoading === false && data.apiData === "") {
            callApi()
        }
    });

    const callApi = () => {
        handleLoader();
        AboutData(handleLoader).then( resp => {
            const getData = resp.data[0];
            let copyData = {...data};
            copyData.apiData = getData.about_content;
            setData(copyData);
        }).catch( err => {
            let copyData = {...data};
            copyData.apiData = "Somethings was wrong!!"
            setData(copyData);
        })
    }

    const handleLoader = () => {
        let copyData = {...data};
        copyData.isLoading = !data.isLoading;
        setData(copyData);
    }

    return (
        <div>{ data.apiData }</div>
    )
}

export default About;