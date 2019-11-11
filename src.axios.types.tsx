// 请求方法
export type Methods = 'get' | 'GET' | 'post' | 'POST' | 'put' | 'PUT' | 'delete' | 'DELETE' | 'options' | 'OPTIONS';

export interface AxiosRequestConfig {
  url: string;
  method: Methods; 
  params: Record<string, any> // 代表一个对象，属性是string，值是任何值
}

// 这个接口用来修饰Axios.prototype.request方法
// Promise的T代表此promise变成成功态后resolve的值 => resolve(T)
export interface AxiosInstance {
  <T = any>(config: AxiosRequestConfig): Promise<T>
}
