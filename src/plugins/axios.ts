import axios, {AxiosRequestConfig, ResponseType} from 'axios'

const JWTRequestMiddleware = (request: AxiosRequestConfig) => {

    const JWTtoken = ""
    if (JWTtoken) request.headers['x-jwt'] = JWTtoken
  
    return request
}

const ApiKeyRequestMiddleware = (request: AxiosRequestConfig) => {

    const ApiKeyToken = ""
    if (ApiKeyToken) request.headers['x-access-key'] = ApiKeyToken
  
    return request
}

// Request interceptor
axios.interceptors.request.use(ApiKeyRequestMiddleware, JWTRequestMiddleware)

const BuildResponseMiddleware = (response: any) => response

const ErrorResponseMiddleware = (error: any) => {
    const { status } = error.response

    if (status >= 500) {
  
    }
  
    if (status === 401) {
      
    }
  
    return Promise.reject(error)
}

axios.interceptors.response.use(BuildResponseMiddleware, ErrorResponseMiddleware)