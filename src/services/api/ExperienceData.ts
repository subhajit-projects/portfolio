import { ServiceConfig } from "../ServiceConfig";
import { ServiceUrls } from "../ServiceUrls";



export const ExperienceData = async(loaderCallBack:() => void) => {
    return await ServiceConfig()
    .get(ServiceUrls.getUrl("get_all_experience_url"))
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