import Taro from "@tarojs/taro";

/**
 * 将对象解析成查询字符串
 * @param {*} obj
 * @returns
 */
export const objectToQueryString = (obj: object) => {
  let searchKeys: Array<string> = [];
  if (Object.keys(obj).length) {
    for (let key in obj) {
      searchKeys.push(`${key}=${obj[key]}`);
    }
  }
  return searchKeys.join("&");
};

interface INavigateToParams {
  url: string;
  params?: object;
}

/**
 * 路由跳转函数
 * url 页面路径
 * params 页面参数
 * @param params
 * @returns
 */
export const navigateTo = ({ url, params }: INavigateToParams) => {
  let queryString: string = "";
  if (params) queryString = `?${objectToQueryString(params)}`;
  return Taro.navigateTo({ url: `${url}${queryString}` });
};
