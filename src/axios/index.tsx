import Axios from './Axios';
import { AxiosInstance } from './types'
import { CancelToken, isCancel } from './cancel';
// 创建axios实例
// 定义一个类，类的原型，类的实例

function createInstance(): AxiosInstance{
  let context: Axios = new Axios() // this，上下文
  // 让request里的方法里的this永远指向context
  let instance = Axios.prototype.request.bind(context);
  // 把axios类的实例和类的原型上的方法都拷贝到instance上，即request方法上
  instance = Object.assign(instance, Axios.prototype, context);
  
  return instance as AxiosInstance;
}

let axios = createInstance()
axios.cancelToken = new CancelToken();
axios.isCancel = isCancel;

export default axios;
export * from './types'
