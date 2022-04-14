import productConfig from './product_ext.json'

// export function getDeviceName(device: IDevice) {
//   if (device.dev_alias) {
//     return device.dev_alias
//   } else {
//     const product = productConfig.product_list.find(p => p.productKey === device.product_key)
//     if (product) {
//       const macPerix = device.mac.substring(device.mac.length - 4, device.mac.length)
//       return `${product.name}-${macPerix}`
//     }
//   }
//   return ''
// }
