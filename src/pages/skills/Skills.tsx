
import { useEffect, useState } from 'react';
import SkillBox from '../../components/skillbox/SkillBox';
import styles from './skills.module.css';
import { SkillData } from '../../services/api/SkillData';

const Skills = () => {

    const [data, setData] = useState({apiData: Array(), isLoading: false})
    
    useEffect(() => {
        if(data.isLoading === false && data.apiData.length == 0) {
            callApi()
        }
    });

    const callApi = () => {
        handleLoader();
        SkillData(handleLoader).then(resp => {
            let copyData = {...data};
            let dataArray = Array();
            if(resp !== undefined) {
                resp.data.map((data:any, key: Number) => {
                    let objData:any = {};
                    objData['skillIconName'] = data.skill_icon_name
                    objData['skillRating'] = data.skill_rating

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

            objData['skillIconName'] = ""
            objData['skillRating'] = 0

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

    return (
        <>
            {data.apiData.map((skillData, key) => (
                <div key={key} className="col-3 col-lg-2 mt-1">
                <SkillBox uniqueKey={key} skillIconName={skillData.skillIconName} skillRating={10} />
            </div>
            ))}
        </>
    )
}

export default Skills;