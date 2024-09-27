import { ServiceConfig } from "../ServiceConfig";
import { ServiceUrls } from "../ServiceUrls";


export const EducationData = async(loaderCallBack: () => void) => {
    return await ServiceConfig()
    .get(ServiceUrls.getUrl("get_all_education"))
    .then( resp => {
        return resp.data;
    })
    .catch( err => {
        console.log("Error from education service: ", err)
        return "error"
    })
    .finally( () => {
        loaderCallBack();
    })
}