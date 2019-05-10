import mockjs from 'mockjs';
import page from './page'; //  此处引入api

const Random = mockjs.Random; //  注明要使用mockjs替换的模块

const apiArr = [page];

let apiPathArr = [];

for (let i = 0; i < apiArr.length; i += 1) {
  const apiPathJson = apiArr[i].path;
  const item = Object.entries(apiPathJson);
  apiPathArr = [...apiPathArr, ...item];
}

const init = () => {
  for (let i = 0; i < apiPathArr.length; i += 1) {
    const item = apiPathArr[i];
    const path = new RegExp(`.*(${item[1]})`);
    mockjs.mock(path, {
      'data|20': [
        {
          _id: '@ID',
          thumb: "@IMG(1024x700,@COLOR(),'\u56fe\u7247\u4e0a\u7684\u6587\u5b57')",
          title: '@cparagraph(1, 3)',
          video: "s",
        },
      ],
      success: true,
    });
  }
};

export default init;
