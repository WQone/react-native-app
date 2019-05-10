/**
 * axios初始化配置
 */
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.douban.com/',
  withCredentials: true,
  params: {},
  timeout: 25000, // 请求超时时间
});

instance.interceptors.request.use((request) => {
  const axiosRequest = {
    ...request,
    params: {
      ...request.params,
    },
    responseType: request.responseType,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  return axiosRequest;
});

instance.interceptors.response.use(
  (response) => {
    const code = Number(response.data.respCode);
    if (code !== 0 && code !== -2 && !isNaN(code)) {
      // Message({
      //   message: response.data.respMsg,
      //   type: 'error',
      // });
    }
    return response;
  },
  (error) => {
    let message = error.message;
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
      message = '请求超时';
      // return service.request(originalRequest);//例如再重复请求一次
    }
    // Message({
    //   message,
    //   type: 'error',
    // });
    return Promise.reject(error);
  },
);
export default instance;
