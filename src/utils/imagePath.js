/**
 * 处理文件类型的方法
 */
function setImagePath (arr) {
  const imageTypeConfig = {
    jpg: 'jpg',
    png: 'png',
    JPEG: 'JPEG',
    jpeg: 'jpeg'
  }
  return arr.map(item => {
    const http = 'https://cube.elemecdn.com/'
    const image = item.restaurant.image_path
    const oneTitle = image.slice(0, 1)
    const twoTitle = image.slice(1, 3)
    const newStr = image.slice(3)
    const endTypeCheckOne = image.slice(-4)
    const endTypeCheckTwo = image.slice(-3)
    let last = Object.values(imageTypeConfig).some(type => type === endTypeCheckOne)
    last = last ? endTypeCheckOne : endTypeCheckTwo
    const image_path = `${http}${oneTitle}/${twoTitle}/${newStr}.${last}`
    return {
      ...item.restaurant,
      image_path
    }
  })
}
export default setImagePath