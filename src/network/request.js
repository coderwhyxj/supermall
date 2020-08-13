import axios from "axios"

// export function request(config){
   
//    return new Promise((resolved,reject)=>{
//    //1.创建实例
//    const instance=axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//    })
//   instance(config)
//   .then(res=>resolved(res))//如果网络请求成功，执行成功的then，并把newpromise改成resolved
//   .catch (err=>reject(err))               

//    })
// }


export function request(config){
    //1.创建实例
    const instance=axios.create({
     baseURL:'http://152.136.185.210:8000/api/z8',
     timeout:5000
    })

// 2.添加请求拦截器
instance.interceptors.request.use(function (config) {
     /*  // 在发送请求之前做些什么
       1.config的信息不符合服务器要求，必须对config的配置做变换再给服务器传过去
       2.每次发送请求，都希望在界面显示请求圈圈图标。
       3.某些网络请求如登录，有无携带token信息
    */
    return config;
  }, function (error) {
    // 对请求错误做些什么，一般不会，除非断网
    return Promise.reject(error);
  });

// 2.添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么，比如axios框架自己家的一些数据
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });


    //3.发送请求返回promise
  return instance(config)   //返回值就是promise，
  //可能内部看状态码请求成功自动执行resolve并把结果放resolve（res），之后你写then就调用成功的
 }
 