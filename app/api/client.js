import {create} from "apisauce"

const apiClient = create({
    baseURL: "http://172.17.146.49:9000/api"
})

export default apiClient;