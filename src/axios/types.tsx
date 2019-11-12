// 请求方法
export type Methods = 'get' | 'GET' | 'post' | 'POST' | 'put' | 'PUT' | 'delete' | 'DELETE' | 'options' | 'OPTIONS';

export interface AxiosRequestConfig {
  url?: string;
  method?: Methods; 
  params?: any; // 代表一个对象，属性是string，值是任何值
  headers?: Record<string, any>;
  data?:Record<string, any>;
  timeout?: number;
}

// 这个接口用来修饰Axios.prototype.request方法
// Promise的T代表此promise变成成功态后resolve的值 => resolve(T)
export interface AxiosInstance {
  <T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  }
}

// T代表响应体的类型
export interface AxiosResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers?: Record<string, any>;
  config?: AxiosRequestConfig;
  request?: XMLHttpRequest;
}
