import { ServiceConfig } from "../ServiceConfig";
import { ServiceUrls } from "../ServiceUrls";



export const SkillData = async(loaderCallBack:() => void) => {
    return await ServiceConfig()
    .get(ServiceUrls.getUrl("get_all_skill"))
    .then( resp => {
        return resp.data;
    })
    .catch( err => {
        console.log("Error from service: ", err)
        return "error"
    })
    .finally( () => {
        loaderCallBack();
    })
}