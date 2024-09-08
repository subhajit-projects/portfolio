export class ServiceUrls {
    private static urls:any = {
        "base_url": process.env.REACT_APP_API_BASE_URL+""+process.env.REACT_APP_API_VERSION,
        "login_url": "",
        "get_all_experience_url": "/experience/"
    }

    public static getUrl(urlName: string) {
        return this.urls[urlName];
    }
}