// import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import axios, { AxiosResponse, AxiosRequestConfig } from './axios';

const baseURL = 'http://localhost:8080';
// 服务器返回的对象
interface User {
  name: string;
  password: string;
}
let user:User = {
  name: 'zhangsan',
  password: '123456'
}

/*
* 先看一下怎么使用官方库
*/
axios({
  method: 'post', //'get', // 方法名
  url: baseURL + '/post', //'/get', // 访问路径
  // params: user // 查询参数对象，它会转成查询字符串放在？后面
  headers: {
    'content-type': 'application/json',
  }
}).then((response: AxiosResponse<User>) => {
  console.log(response)
  conosle.log(response.data)
  // return response.data
})
.catch((error: any) => {
  console.log(error)
})
