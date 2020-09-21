import mockAjax from "@/ajax/mockAjax";
import Ajax from "@/ajax/detailAjax";

// const url = 'https://h5.ele.me/pizza/shopping/restaurants/E1009548070097512971/batch_shop?user_id=499323866&code=0.00887038958405828&extras=%5B%22activities%22%2C%22albums%22%2C%22license%22%2C%22identification%22%2C%22qualification%22%5D&terminal=h5&latitude=22.626954&longitude=113.840377'
const url = "shopInfo";

//请求店铺数据

export const reqShopInfo = () => mockAjax.get(url);

//请求加减菜品(已有)
//参数：商品id，商品数量，备注remarks

export const updateFood = (id, num, remarks) =>
  Ajax.patch(`/chicken/${id}`, { num, remarks });

//请求新增菜品
export const reqAddFood = (id, num, name, price, remarks = "") =>
  Ajax.post(`/chicken`, { id, num, name, price, remarks });
//请求获取已点餐详情
export const reqFoods = () => Ajax.get("/chicken");

//删除菜品
export const deleteFood = (id) => Ajax.delete(`/chicken/${id}`);
