import { ServiceConfig } from "../ServiceConfig";
import { ServiceUrls } from "../ServiceUrls";


export const AboutData = async(loaderCallBack: () => void) => {
    return await ServiceConfig()
    .get(ServiceUrls.getUrl("get_about"))
    .then( resp => {
        return resp.data;
    })
    .catch( err => {
        console.log("Error from about service: ", err)
        return "error"
    })
    .finally( () => {
        loaderCallBack();
    })
}