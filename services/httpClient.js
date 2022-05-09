import axios from "axios";
import {server, apiUrl, Not_CONNECT_NETWORK, NETWORK_CONNECTION_MESSSAGE} from "@/services/constants";
import router from "@/router";
import { config } from "vue/types/umd";

const isAbsoluteURlRegex = /^https?:\/\//i;

axios.interceptors.request.use(async config => {
    if (config.url.match(isAbsoluteURlRegex)) { 
        return config;
    }
    config.url = apiUrl + config.url;
    return config;
}
, error => {
    return Promise.reject(error);
}
);
