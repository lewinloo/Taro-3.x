import appConfig from "@/config/template_ext.json";
import { getToken } from "@/utils/storage";
import Taro from "@tarojs/taro";

export function getAepAPIHost() {
  return (
    (appConfig.cloudServceInfo && appConfig.cloudServceInfo.aepInfo) ||
    "https://aep-app.gizwits.com"
  );
}

export function getOpenAPIHost() {
  return `https://${
    (appConfig.cloudServceInfo && appConfig.cloudServceInfo.openAPIInfo) ||
    "api.gizwits.com"
  }`;
}

interface IAepRequestParams {
  url: string;
  method?: keyof Taro.request.Method;
  data?: object;
}

export function aepRequest<T>({ url, method, data }: IAepRequestParams) {
  const aepApiHost = getAepAPIHost();
  const token = getToken()

  return Taro.request<IResponse<T>>({
    url: `${aepApiHost}${url}`,
    method,
    dataType: 'json',
    data: {
      appKey: appConfig.gizwits.appID,
      type: appConfig.gizwits.appID,
      version: '0.1',
      data
    },
    header: {
      'X-Gizwits-Application-Id': appConfig.gizwits.appID,
      'Authorization': token
    }
  })
}

export function openApiRequest<T>({ method, url, header, ...rest }: Taro.request.Option) {
  const openApiHost = getOpenAPIHost()
  const token = getToken()
  header!['X-Gizwits-Application-Id'] = appConfig.gizwits.appID
  if (token) {
    header!['X-Gizwits-User-token'] = token;
  }

  return Taro.request<IResponse<T>>({
    ...rest,
    url: `${openApiHost}${url}`,
    method,
    header,
    dataType: 'json',
  })
}
