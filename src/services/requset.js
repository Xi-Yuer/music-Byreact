import originAxios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { Spin } from 'antd';
// import Cookies from 'js-cookie'  
export default function request(option) {
  return new Promise((resolve, reject) => {
    // 1.创建axios的实例
    const instance = originAxios.create({
      baseURL: "http://123.207.32.32:9001",
      timeout: 10000,
    });

    // 配置请求和响应拦截
    instance.interceptors.request.use(
      (config) => {
        // console.log('来到了request拦截success中');
        // 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画

        // 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面

        // 3.对请求的参数进行序列化(看服务器是否需要序列化)
        // config.data = qs.stringify(config.data)
        // 4.等等
        // const token = Cookies.get('pmcucookie') || window.localStorage.getItem('token')
        // token && (config.headers.token = token)
        // config.metadata = {startTime:new Date()}
        const dom = document.createElement('div')
        dom.setAttribute('id', 'loading')
        document.body.appendChild(dom)
        ReactDOM.render(<Spin tip="加载中" size="large" />, dom)
        return config;
      },
      (err) => {
        // console.log('来到了request拦截failure中');
        return err;
      }
    );

    instance.interceptors.response.use(
      (response) => {
        document.body.removeChild(document.getElementById('loading'))
        // console.log('来到了response拦截success中');
        return response.data;
      },
      (err) => {
        document.body.removeChild(document.getElementById('loading'))
        // message.error('您可能需要刷新一下哦！');
        // console.log("来到了response拦截failure中");
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = "请求错误";
              break;
            case 401:
              err.message = "未授权的访问";
              break;
            default:
              err.message = "其他错误信息";
          }
        }
        return err;
      }
    );

    // 2.传入对象进行网络请求
    instance(option)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
