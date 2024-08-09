import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create(
    {
        baseURL:"https://api.nal.usda.gov/fdc/v1/foods",
        params:{
            api_key:"SaQy2io5EY4siiZgsIKGCHkQxrLaJE7SPZdfkveT"
        }
    }
)
class APIClient<T>{
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll = (config?: AxiosRequestConfig) => {
        return axiosInstance.get(this.endpoint, config)
        .then(res => res.data)
    }
}

export default APIClient;