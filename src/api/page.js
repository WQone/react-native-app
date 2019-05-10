import api from './index';

const path = {
  list: '/v2/movie/in_theaters/', // 文件上传
};

const list = () =>
  api.get(path.list, {
    params: {
      city: '深圳',
      start: 0,
      count: 10,
    },
  });

export default {
  path,
  list,
};
