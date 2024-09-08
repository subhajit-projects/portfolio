import axios from "axios"
import { ServiceUrls } from "./ServiceUrls"

export const ServiceConfig = () => (
    axios.create({
        baseURL: ServiceUrls.getUrl("base_url"),
        headers: {
            'Access-Control-Allow-Headers': 'content-type',
            'Content-Type': 'application/json',
            'REQUEST-FROM': 'WEB',
        }
    })
)