import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';
import { InstanceConfig } from '../../types';

export class HttpClient {
  public readonly client: AxiosInstance;

  constructor(public readonly config: InstanceConfig) {
    this.client = axios.create({ baseURL: config.baseUrl });

    this.config.interceptors?.request?.forEach(({ successCallback, errorCallback }) =>
      this.client.interceptors.request.use(successCallback, errorCallback)
    );

    this.config.interceptors?.response?.forEach(({ successCallback, errorCallback }) =>
      this.client.interceptors.response.use(successCallback, errorCallback)
    );
  }

  public async get<T>(path: string, config?: AxiosRequestConfig): Promise<T> {
    return (await this.client.get(path, config)).data;
  }

  public async post<T, R = void>(path: string, body: T, config?: AxiosRequestConfig): Promise<R> {
    return (await this.client.post(path, body, config)).data;
  }

  public async put<T, R = void>(path: string, body: T, config?: AxiosRequestConfig): Promise<R> {
    return (await this.client.put(path, body, config)).data;
  }

  public async delete<T>(path: string, config: AxiosRequestConfig = {}): Promise<T> {
    return (await this.client.delete(path, { ...config })).data;
  }
}
