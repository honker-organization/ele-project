import Mock from "mockjs";
// import shopData from '../mock/detail.json'
import shopData from "../mock/test.json";

// const url = 'https://h5.ele.me/pizza/shopping/restaurants/E1009548070097512971/batch_shop?user_id=499323866&code=0.00887038958405828&extras=%5B%22activities%22%2C%22albums%22%2C%22license%22%2C%22identification%22%2C%22qualification%22%5D&terminal=h5&latitude=22.626954&longitude=113.840377'
const url = "shopInfo";

// const shopData = JSON.parse(data)

Mock.mock(`/mock/${url}`, { data: shopData });
