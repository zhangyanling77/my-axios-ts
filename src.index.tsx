import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

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
  method: 'get', // 方法名
  url: baseURL, // 访问路径
  params: user // 查询参数对象，它会转成查询字符串放在？后面
}).then((response: AxiosResponse) => {
  console.log(response)
  return response.data
}).catch((error: any) => {
  console.log(error)
  // throw Error(error)
})
