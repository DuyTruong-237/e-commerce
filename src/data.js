let CategoriesData = [
  { url: 'https://media3.scdn.vn/img3/2019/6_1/3teCqf.jpg', name: "Jackets" },
  { url: 'https://vietartproductions.com/wp-content/uploads/2022/04/1_Anh-2-4.jpg', name: "Shoes" },
  { url: 'https://channel.mediacdn.vn/428462621602512896/2023/11/28/image009-17011454931591136603249.jpg', name: "Cosmetics" },
  { url: 'https://tse2.mm.bing.net/th?id=OIP.TmNTLye_5_vLC8CAEazfBgHaE_&pid=Api&P=0&h=220', name: "TVs" },
  { url: 'https://cdn.nguyenkimmall.com/images/detailed/691/10047356-dien-thoai-xiaomi-redmi-9a-2gb-32gb-xanh-la-1.jpg', name: "Phones" },
  { url: 'https://tse4.mm.bing.net/th?id=OIP.Y21yS2_X-nMixlIQHmKy-wHaHa&pid=Api&P=0&h=220', name: "Tools" },
  { url: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfox84sw6l5069', name: "Motors" },
  { url: 'https://down-vn.img.susercontent.com/file/79527aad65104aea685333194d3183c5', name: "Laptops" },
  { url: 'https://down-vn.img.susercontent.com/file/222364c0321fb7669df1570672c31ae6', name: "Refriges" },
  { url: 'https://down-vn.img.susercontent.com/file/062b8cbcd638a6c8730c411c88c129b9', name: "Washing Machine" },
  { url: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg3js55ys8ru25', name: "Air-Conditioner" },
  { url: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lji6w6gg1urmc6', name: "Air Purifier" },
  { url: 'https://down-vn.img.susercontent.com/file/02a06ae9c4c4638ec30dcb4990ccb75c', name: "Glasses" },
  { url: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llt6eul6d7tr35', name: "Iphone" },
  { url: 'https://down-vn.img.susercontent.com/file/vn-11134201-23020-frc1z2psaxnv23', name: "Hand Bags" },
  { url: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lnph44epqsbxa2', name: "Pants" },
  { url: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln8td59no6agc9', name: "Tees" },
  { url: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbng-lln51xr19i270b', name: "Shirts" },
];

let ProductData = [
  {
    image: [
      'https://media3.scdn.vn/img3/2019/6_1/3teCqf.jpg',
      'https://down-vn.img.susercontent.com/file/712a48dc328ae2e2fdcf88c0a87cd9b0',
      'https://down-vn.img.susercontent.com/file/7519b7b794ff3e09fc5e4b11111b16d4',
      'https://down-vn.img.susercontent.com/file/a02eb2a96048b22f44c195c3ad4d64f0'
    ],
    name: "Angel Land Jacket",
    price: "₫381.000",
    reviews: 100,
    sold: 500,
    available: 1000,
    rate: "4",
  },
  {
    image: [
      'https://down-vn.img.susercontent.com/file/sg-11134201-7rbk0-lkku21xqi6ts96',
      'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lo5fxmnrug0bac',
      'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lo5fk1j1wid394',
      'https://down-vn.img.susercontent.com/file/sg-11134201-7rbk0-lkku223aa2exbf'
    ],
    name: "Aasics Shoes",
    rate: "4",
    reviews: 99,
    sold: 150,
    available: 300,
    price: "₫799.000"
    
  },
  {
    image: [
      'https://down-vn.img.susercontent.com/file/b2823b4b82cea7ac6d51a6973ae9f8b4',
      'https://down-vn.img.susercontent.com/file/cf5d04d4088fe90ecb1de4f3bb8c1ed4',
      'https://down-vn.img.susercontent.com/file/5b97126a7f3b9610864bf4f3d5621af6',
      'https://down-vn.img.susercontent.com/file/9d852449cbd452aaa694ece6d113a506'
    ],
    name: "Focallure Skin Evolution",
    rate: "4",
    reviews: 200,
    sold: 500,
    available: 500,
    price: "₫149.000"
  },
  {
    image: [
      'https://down-vn.img.susercontent.com/file/vn-11134211-23030-xob51g6gwtovd5',
      'https://down-vn.img.susercontent.com/file/vn-11134201-23030-wvbycf0bvjovd8',
      'https://down-vn.img.susercontent.com/file/vn-11134201-23030-8fsff49bvjov17',
      'https://down-vn.img.susercontent.com/file/vn-11134201-23030-49zplwvozjova8'
    ],
    name: "TV Samsung",
    rate: "5",
    reviews: 10,
    sold: 50,
    available: 1000,
    price: "₫219.900.000"
  },
  {
    image: [
      'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lo50p2n4y8zb37',
      'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lo52gr1dx0uj99',
      'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lo50p2n4znjr15',
      'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lo52gr1e5g9733'
    ],
    name: "Ergonomic Desk",
    rate: "5",
    reviews: 5,
    sold: 1,
    available: 100,
    price: "₫27.790.000"
  },
  {
    image: [
      'https://down-vn.img.susercontent.com/file/4810f7ee4c4a5c495fb853db530f16e2',
      'https://down-vn.img.susercontent.com/file/9f862eccd3033fa87da92e4b5f7408ee',
      'https://down-vn.img.susercontent.com/file/ac82d7eedcf46366d03b8065540af24a',
      'https://down-vn.img.susercontent.com/file/ba30d99db990300761e92c1c2507cf79'
    ],
    name: "Massage Chair",
    rate: "5",
    reviews: 50,
    sold: 25,
    available: 2000,
    price: "₫120.000.000"
  },
  {
    image: [
      'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfox84sw3rzp78',
      'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfox84sw3s0444',
      'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfox84sw56kkcd',
      'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfox84sw6l5069'
    ],
    name: "Yamaha R3",
    rate: "5",
    reviews: 5,
    sold: 3,
    available: 1000,
    price: "₫120.000.000"
  },
  {
    image: [
      'https://down-vn.img.susercontent.com/file/79527aad65104aea685333194d3183c5',
      'https://down-vn.img.susercontent.com/file/ddd101ac12fd78834384e4902aca2e05',
      'https://down-vn.img.susercontent.com/file/e47ac5872823a2756956350081f43c79',
      'https://down-vn.img.susercontent.com/file/dc66bf96aaa163961d755d4074b1127c'
    ],
    name: "Laptop AcerPredator Triton500SE PT516-52s-91XH i912900H|32GB|2TB|3080Ti|16'240Hz|W11",
    rate: "4",
    reviews: 1,
    sold: 1,
    available: 4000,
    price: "₫109.980.000"
  },
  {
    image: [
      'https://down-vn.img.susercontent.com/file/222364c0321fb7669df1570672c31ae6',
      'https://down-vn.img.susercontent.com/file/e224b040c3df6532c82498568b0b5599',
      'https://down-vn.img.susercontent.com/file/e224b040c3df6532c82498568b0b5599',
      'https://down-vn.img.susercontent.com/file/319aef02d7393281a892a6e75d438fc9'
    ],
    name: "Hitachi Refrigerator",
    rate: "4",
    reviews: 0,
    sold: 1,
    available: 10,
    price: "₫45.680.000"
  },
  {
    image: [
      'https://down-vn.img.susercontent.com/file/062b8cbcd638a6c8730c411c88c129b9',
      'https://down-vn.img.susercontent.com/file/7e99804c211465acf07ded535a56a99f',
      'https://down-vn.img.susercontent.com/file/f248561db8fc95f66b31e0a7cfb10d87',
      'https://down-vn.img.susercontent.com/file/5b302849c52e372a0f35107284a15097'
    ],
    name: "Bosch WAV28L40SG 9kg",
    rate: "5",
    reviews: 111,
    sold: 999,
    available: 1,
    price: "₫45.680.000"
  },
  {
    image: [
      'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg3js55ys8ru25',
      'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg3kkf4wptgqdd',
      'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg3kkf4wr816be',
      'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lg3kkf4wsmlmd0'
    ],
    name: "Multi NX Daikin 3.5HP",
    rate: "5",
    price: "₫66.159.000"
  },
  
  {
    image: [
      'https://down-vn.img.susercontent.com/file/02a06ae9c4c4638ec30dcb4990ccb75c',
      'https://down-vn.img.susercontent.com/file/5d377b53193ae4c63fa52838a3f3d942',
      'https://down-vn.img.susercontent.com/file/8529e94fed9efd5e7be8c1ac3cd6fc17',
      'https://down-vn.img.susercontent.com/file/036899e83064905239e9809f26d0d087'
    ],
    name: "RAY-BAN Polarized",
    rate: "4",
    price: "₫11.617.000"
  },
  {
    image: [
      'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llt6pq256m734f',
      'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llt6eul6eme758',
      'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llt6eul6d7tr35',
      'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llt6eul6g0yn0d'   
    ],
    name: "Apple iPhone 15 Pro Max 256GB",
    rate: "5",
    price: "₫35.490.000"
  },
  {
    image: [
      'https://down-vn.img.susercontent.com/file/4810f7ee4c4a5c495fb853db530f16e2',
      'https://down-vn.img.susercontent.com/file/9f862eccd3033fa87da92e4b5f7408ee',
      'https://down-vn.img.susercontent.com/file/ac82d7eedcf46366d03b8065540af24a',
      'https://down-vn.img.susercontent.com/file/ba30d99db990300761e92c1c2507cf79'
    ],
    name: "Massage Chair",
    rate: "5",
    reviews: 50,
    sold: 25,
    available: 2000,
    price: "₫120.000.000"
  },
  {
    image: [
      'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfox84sw3rzp78',
      'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfox84sw3s0444',
      'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfox84sw56kkcd',
      'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfox84sw6l5069'
    ],
    name: "Yamaha R3",
    rate: "5",
    reviews: 5,
    sold: 3,
    available: 1000,
    price: "₫120.000.000"
  },
  {
    image: [
      'https://down-vn.img.susercontent.com/file/79527aad65104aea685333194d3183c5',
      'https://down-vn.img.susercontent.com/file/ddd101ac12fd78834384e4902aca2e05',
      'https://down-vn.img.susercontent.com/file/e47ac5872823a2756956350081f43c79',
      'https://down-vn.img.susercontent.com/file/dc66bf96aaa163961d755d4074b1127c'
    ],
    name: "Laptop AcerPredator Triton500SE PT516-52s-91XH i912900H|32GB|2TB|3080Ti|16'240Hz|W11",
    rate: "4",
    reviews: 1,
    sold: 1,
    available: 4000,
    price: "₫109.980.000"
  },
  {
    image: [
      'https://down-vn.img.susercontent.com/file/222364c0321fb7669df1570672c31ae6',
      'https://down-vn.img.susercontent.com/file/e224b040c3df6532c82498568b0b5599',
      'https://down-vn.img.susercontent.com/file/e224b040c3df6532c82498568b0b5599',
      'https://down-vn.img.susercontent.com/file/319aef02d7393281a892a6e75d438fc9'
    ],
    name: "Hitachi Refrigerator",
    rate: "4",
    reviews: 0,
    sold: 1,
    available: 10,
    price: "₫45.680.000"
  },
  {
    image: [
      'https://down-vn.img.susercontent.com/file/062b8cbcd638a6c8730c411c88c129b9',
      'https://down-vn.img.susercontent.com/file/7e99804c211465acf07ded535a56a99f',
      'https://down-vn.img.susercontent.com/file/f248561db8fc95f66b31e0a7cfb10d87',
      'https://down-vn.img.susercontent.com/file/5b302849c52e372a0f35107284a15097'
    ],
    name: "Bosch WAV28L40SG 9kg",
    rate: "5",
    reviews: 111,
    sold: 999,
    available: 1,
    price: "₫45.680.000"
  },
];

let CommentData = [
  {
    name: "Nhy Thanh",
    comment: "Vận chuyển nhanh chóng, rất tốt. Mua ở đây yên tâm hơn mua ở Shopee nhiều. Sẽ ủng hộ PamPam Shop.",
    rate: "5"
  },

  {
    name: "Dương Duy Trường",
    comment: "Giao nhanh, bọc chống shock rất là okela luônnnn. Seal đầy đủ. Mua nhiều lần ở shop rồi thấy hỗ trợ nhiệt tình phết",
    rate: "5"
  },

  {
    name: "Phạm Tuấn",
    comment: "Hàng nhận đẹp đúng như mô tả, đóng gói cẩn thận. Giao hàng nhanh.",
    rate: "4"
  },

];

export { CategoriesData, ProductData, CommentData};
