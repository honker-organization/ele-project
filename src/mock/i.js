const fs = require('fs')
let id = Date.now() + Math.floor(Math.random() * 1000 + 1)
let distance = Math.floor(Math.random() * 1000 + 100)
let str = ''
let randomShop = Math.floor(Math.random() * 22)
let shopNameList = [
  '奶茶',
  '烧烤',
  '水果',
  '蛋糕',
  '西瓜',
  '双皮奶',
  '烤鸭',
  '炸鸡',
  '烤串',
  '猪蹄',
  '一点点',
  '华莱士',
  '麻辣香锅',
  '永和大王',
  '韩国炸鸡',
  '披萨',
  '肯德基',
  '卤肉饭',
  '蛋糕店',
  '覃塘烧烤',
  '一盒糖',
  '炸酱面'
]

let imagePath = [
  '46e483e3c017f965a69464252cd7abf3png',
  '2005c8fcd9444ad6017dc50c68dbfbcapng',
  "d5713aa75fd99246c7839929a735f1d2png",
  "5256a8bb0a69a1a47a4ed5a6e4ca8edfjpeg",
  "25dddf73d27776f14f551282d637e3f6JPEG",
  "98F0256B59DE424D8B6D3D4700C88465jpeg",
  "3f93d74047272748ef06842b7a3b6b14jpeg"
]
let shopList = {
  "has_next": true,
  "items": [],
  "meta": {
    "rankId": "ab21dd4a076645fc8021283aeb1fbfc8",
    "rankType": {
      "141531775": "8",
      "2043843068": "8"
    }
  }
}
for (let i = 0; i < 2000; i++) {
  shopList.items.push({
    "restaurant": {
      "act_tag": 0,
      "activities": [],
      "address": null,
      "authentic_id": id,
      "average_cost": null,
      "baidu_id": null,
      "bidding": null,
      "brand_id": id * 1000,
      "business_info": "{\"pickup_scheme\":\"https://h5.ele.me/shop/#id=E16827995372466805130\",\"ad_info\":{\"isAd\":\"false\"},\"recent_order_num_display\":\"月售45\"}",
      "closing_count_down": 0,
      "delivery_fee_discount": 0.0,
      "delivery_mode": {
        "border": "",
        "color": "2395FF",
        "gradient": {
          "rgb_from": "00a6ff",
          "rgb_to": "00a6ff"
        },
        "icon_hash": "b9b45d2f6ff0dbeef3a78ef0e4e90abapng",
        "id": id * 2000,
        "is_solid": true,
        "text": "蜂鸟专送",
        "text_color": "FFFFFF"
      },
      "description": "点外卖上饿了么",
      "distance": distance,
      "favor_time": null,
      "favored": false,
      "flavors": [
        {
          "id": i,
          "name": "烧烤"
        },
        {
          "id": i + 10000,
          "name": "小龙虾"
        }
      ],
      "float_delivery_fee": 2.5,
      "float_minimum_order_amount": 15.0,
      "folding_restaurant_brand": null,
      "folding_restaurants": [],
      "has_story": false,
      "id": "E16827995372466805130",
      "image_path": imagePath[Math.floor(Math.random() * 7)],
      "is_new": false,
      "is_premium": false,
      "is_star": false,
      "is_stock_empty": 0,
      "is_valid": 1,
      "latitude": 30.542373,
      "longitude": 117.061204,
      "max_applied_quantity_per_order": -1,
      "name": shopNameList[randomShop],
      "next_business_time": "17:00",
      "only_use_poi": null,
      "opening_hours": [
        "0:00/0:05",
        "17:00/23:55"
      ],
      "order_lead_time": 30,
      "out_of_range": false,
      "phone": null,
      "piecewise_agent_fee": {
        "description": "配送¥2.5",
        "extra_fee": 0.0,
        "is_extra": false,
        "no_subsidy_fee": "",
        "rules": [
          {
            "fee": 2.5,
            "price": 15.0
          }
        ],
        "tips": "配送¥2.5"
      },
      "platform": 0,
      "posters": [],
      "promotion_info": "点外卖上饿了么",
      "rating": 3.7,
      "rating_count": 412,
      "recent_order_num": 45,
      "recommend": {
        "is_ad": false,
        "reason": ""
      },
      "recommend_reasons": [
        {
          "name": "配送飞快"
        }
      ],
      "regular_customer_count": 0,
      "restaurant_info": null,
      "scheme": "https://h5.ele.me/shop/#id=E16827995372466805130?o2o_extra_param=%7B%22rank_id%22%3A%22ab21dd4a076645fc8021283aeb1fbfc8%22%7D",
      "status": 5,
      "support_tags": [
        {
          "border": "dddddd",
          "color": "666666",
          "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
          "text": "烧烤",
          "type": 1
        }
      ],
      "supports": [
        {
          "border": "dddddd",
          "description": "该商户食品安全已由国泰产险承担，食品安全有保障",
          "icon_color": "666666",
          "icon_name": "保",
          "id": 7,
          "name": "食无忧",
          "text_color": "666666",
          "two_characters_icon_name": "保险"
        }
      ],
      "target_tag_path": null,
      "theme": {
        "default_color": "2395ff",
        "header_style": 3,
        "hongbao_style": 0,
        "logo_sub": null,
        "price_color": "ff5339",
        "third_tab_name": "商家",
        "vanish_fields": []
      },
      "type": 0
    }
  })
}

fs.writeFile('./data/newShopList.json', shopList, err => {
  if (!err) {
    console.log('写入成功')
  }else{
    
  }
})

