import { AxiosRequestConfig, AxiosResponse } from './types'
import qs from 'qs'
import parseHeader from 'parse-headers'

export default class Axios {
  // T用来限制响应对象response里data的类型
  request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.dispatchRequest(config)
  }
  // 定义一个派发请求的方法
  dispatchRequest<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return new Promise<AxiosResponse<T>>(function(resolve, reject){
      let { method, url, params, headers, data, timeout } = config
      let request = new XMLHttpRequest();
      // 序列化参数
      if(params){
        params = qs.stringify(params)
        url += ((url!.indexOf('?') == -1?'?':'&') + params)
      }
      request.open(method!, url!, true)
      request.responseType = 'json';
      request.onreadystatechange = function(){
        if(request.readyState === 4){
          if(request.status >= 200 && request.status < 300){
            let response:AxiosResponse<T> = {
              data: request.response?request.response:request.responseText,
              status: request.status,
              statusText: request.statusText,
              headers: parseHeader(request.getAllResponseHeaders()),
              config,
              request
            }
            resolve(response)

          } else {
            reject(`Error: Request faild with status code ${request.status}`)
          }
        }
      }
      if(headers){
         for(let key in headers){
           request.setRequestHeader(key, headers[key])
         }
      }
      let body: string | null = null;
      if(data){
         // 转字符串
        body = JOSN.stringify(data)
      }
      // 网络错误
      request.onerror = function(){
        reject('net::ERR_INTERNET_DISCONNECTED')
      }
      // 超时
      if(timeout){
        request.timeout = timeout;
        request.ontimeout = function(){
          reject(`Error: timeout of ${timeout}ms exceeded`)
        }
      }
      request.send(body)
    })
  }
}
