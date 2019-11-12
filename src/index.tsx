// import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import axios, { AxiosResponse, AxiosRequestConfig } from './axios'; // 自己的库

const baseURL = 'http://localhost:8080';
// 服务器返回的对象
interface User {
  name: string;
  password: string;
}

let user:User = { name: 'zhangsan', password: '123456' }

/*
* 先看一下怎么使用官方库
* get
* post
* 错误处理（网络错误，超时错误，状态码错误）
*/
// setTimeout(function(){
  axios({
    method: 'post', //'get', // 方法名
    url: baseURL + '/post_status?code=400', //'/post_timeout?timeout=3000', //'/post', //'/get', // 访问路径
    // params: user // 查询参数对象，它会转成查询字符串放在？后面 （是get请求可以传的参数）
    headers: {
      'content-type': 'application/json',
    },
    timeout: 1000,
    data: user, // 查询参数，会转成查询字符串放在?的后面 （是post请求需要带的参数）
  }).then((response: AxiosResponse<User>) => {
    console.log(response)
    conosle.log(response.data)
    // return response.data
  })
  .catch((error: any) => {
    console.log(error)
  })
// }, 5000)

