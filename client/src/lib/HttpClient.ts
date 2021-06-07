import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

const httpRequest = async <T>(config: AxiosRequestConfig, callback: (status: number, data: T) => void) => {
    axios(config)
    .then((response: AxiosResponse) => {
        callback(response.status, response.data);
    })
    .catch((error: AxiosError) => {
        console.error(`http client error: ${error.message}`);
    })
}

export default httpRequest