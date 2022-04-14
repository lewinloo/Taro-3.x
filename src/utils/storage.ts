import Taro from "@tarojs/taro";

// 管理本地存储的key
enum STORAGE_KEY {
  TOKEN = 'token'
}

// 保存数据到本地
export const setItem = (key: string, value: any) => {
  Taro.setStorageSync(key, JSON.stringify(value));
};

// 获取本地数据
export const getItem = (key: string) => {
  const resJson = Taro.getStorageSync(key);
  if (resJson) {
    const result = JSON.parse(resJson);
    return result;
  }
  return null;
};

// 删除本地数据
export const removeItem = (key: string) => {
  Taro.removeStorageSync(key);
};

/**
 * 获取 token
 * @returns token
 */
export const getToken = () => {
  return getItem(STORAGE_KEY.TOKEN)
}
