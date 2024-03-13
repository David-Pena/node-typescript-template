import { type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';

export type InstanceConfig = {
  baseUrl: string;
  interceptors?: {
    request?: {
      successCallback: RequestSuccessCallback;
      errorCallback: any;
    }[];
    response?: {
      successCallback: ResponseSuccessCallback;
      errorCallback: any;
    }[];
  };
};

export type RequestSuccessCallback = () => InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>;
export type ResponseSuccessCallback = () => AxiosResponse<any> | Promise<AxiosResponse<any>>;
