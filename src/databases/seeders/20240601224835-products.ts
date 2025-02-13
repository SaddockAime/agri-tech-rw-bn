/* eslint-disable comma-dangle */
import { QueryInterface } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import {
  productOneId,
  productTwoId,
  productThreeId,
  productFourId,
  productFiveId,
  productSixId,
  productSevenId,
  productEightId,
  productNineId,
  productTenId,
  productElevenId,
  productTwelveId,
  shopOneId,
  shopTwoId,
  shopThreeId,
  shopFourId,
  shopFiveId,
  shopSixId,
} from "../../types/uuid";

const productOne = {
  id: productOneId,
  shopId: shopFourId,
  name: "Maize",
  description: "High-quality maize, perfect for consumption and animal feed.",
  price: 1.50,
  discount: "5%",
  category: "Grains",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free storage bag",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739396836/pexels-arina-krasnikova-6316526_ua3adx.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739396836/pexels-iriser-1353866_egw3oz.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739396837/pexels-cristian-rojas-10041328_szweqo.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739396836/pexels-iriser-1353865_h0z7bx.jpg"
  ],
  quantity: 1000,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productTwo = {
  id: productTwoId,
  shopId: shopThreeId,
  name: "Carrots",
  description: "Fresh and organic carrots, rich in vitamins and minerals.",
  price: 0.99,
  discount: "10%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739397104/pexels-mali-143133_gr5ksu.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739397102/pexels-hanamara-3650647_farwcx.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739397101/pexels-chokniti-khongchum-1197604-2280550_qrc9pk.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739397181/pexels-enginakyurt-15428957_d8r0iw.jpg"
  ],
  quantity: 500,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productThree = {
  id: productThreeId,
  shopId: shopTwoId,
  name: "Tea",
  description: "Premium quality tea leaves, perfect for a refreshing drink.",
  price: 5.00,
  discount: "8%",
  category: "Beverages",
  expiryDate: new Date("2040-12-31"),
  expired: false,
  bonus: "Free tea infuser",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739397380/pexels-quang-nguyen-vinh-222549-2884905_bubydd.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739397382/pexels-minan1398-981091_m1nlfh.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739397379/pexels-goodcitizen-2067255_fqj1m4.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739397380/pexels-nipananlifestyle-com-625927-1581484_nhcrqe.jpg"
  ],
  quantity: 300,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productFour = {
  id: productFourId,
  shopId: shopOneId,
  name: "Coffee",
  description: "Rich and aromatic coffee beans, perfect for a morning boost.",
  price: 10.00,
  discount: "15%",
  category: "Beverages",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free coffee scoop",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739397757/pexels-adam-lukac-254247-773958_vmtwbf.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739397755/pexels-juanpphotoandvideo-894695_g4hvpq.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739397755/pexels-sarah-33270-122370_kn1arv.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1739397755/pexels-igor-haritanovich-814387-1695052_esgc8c.jpg"
  ],
  quantity: 200,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productFive = {
  id: productFiveId,
  shopId: shopFourId,
  name: "Onions",
  description: "Fresh and flavorful onions, perfect for cooking.",
  price: 0.50,
  discount: "12%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free storage bag",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1720293781/aupwephwsobjjeyzuhhw.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1720293781/bkl7nxjaxu98ztuujigf.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1720293781/triqmiam6sk1ctzl0wlg.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1720293778/dhfmdrc7wfpezqu1ows1.jpg"
  ],
  quantity: 800,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productSix = {
  id: productSixId,
  shopId: shopFourId,
  name: "Potatoes",
  description: "High-quality potatoes, perfect for various dishes.",
  price: 0.75,
  discount: "10%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1720293966/trukezkdnmbtr0p0t5uh.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1720293966/pv4b33qzatrhvrwijicc.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1720293966/njjjflqcu0yy9q8exluc.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1720293967/ezkikavntcwj2usjuukc.jpg"
  ],
  quantity: 600,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productSeven = {
  id: productSevenId,
  shopId: shopFiveId,
  name: "Tomatoes",
  description: "Fresh and juicy tomatoes, perfect for salads and cooking.",
  price: 2.00,
  discount: "10%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1720294206/ohcd89wfptzywhez2azv.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1720294205/cgs68wubrksdsai8qgok.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1720294205/eiml7si0rsklsmye8l8w.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1720294204/ovkr2riub7vmzx9b9h5s.jpg"
  ],
  quantity: 150,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productEight = {
  id: productEightId,
  shopId: shopFiveId,
  name: "Cabbage",
  description: "Fresh and crisp cabbage, perfect for salads and cooking.",
  price: 1.20,
  discount: "5%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1720294521/cce1ffu7uw3j2vg9s2vl.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1720294523/wspe9bn0alzbbpvsqgsh.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1720294521/yw42mlyu0bxor9lkbbdq.jpg",
    "https://res.cloudinary.com/djrmfg6k9/image/upload/v1720294523/jdnigjgvatv3rw5ym7yz.jpg"
  ],
  quantity: 250,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productNine = {
  id: productNineId,
  shopId: shopFiveId,
  name: "Spinach",
  description: "Fresh and organic spinach, rich in vitamins and minerals.",
  price: 1.50,
  discount: "7%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://res.cloudinary.com/du0vvcuiz/image/upload/v1721923392/auilcu7ibtttacjonozl.jpg",
    "https://res.cloudinary.com/du0vvcuiz/image/upload/v1721923393/egibnnshd2jmt335yzma.jpg",
    "https://res.cloudinary.com/du0vvcuiz/image/upload/v1721923396/jojvqx5z6dunixeep1vd.jpg",
    "https://res.cloudinary.com/du0vvcuiz/image/upload/v1721923392/gem1f2uotaw3rgcpd95z.jpg"
  ],
  quantity: 50,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productTen = {
  id: productTenId,
  shopId: shopFiveId,
  name: "Peppers",
  description: "Fresh and colorful peppers, perfect for salads and cooking.",
  price: 3.00,
  discount: "15%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://res.cloudinary.com/du0vvcuiz/image/upload/v1721924072/eoknuaiwroxnvg7zhuvm.webp",
    "https://res.cloudinary.com/du0vvcuiz/image/upload/v1721924072/xm6k5zjjbmy8viz01y0w.webp",
    "https://res.cloudinary.com/du0vvcuiz/image/upload/v1721924072/tfxcklr1dxrlyczwz0uv.webp",
    "https://res.cloudinary.com/du0vvcuiz/image/upload/v1721924072/ucazormu3vd452t0ijv2.webp",
    "https://res.cloudinary.com/du0vvcuiz/image/upload/v1721924072/smxezgpkcps3cb0fvdq7.webp"
  ],
  quantity: 50,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productEleven = {
  id: productElevenId,
  shopId: shopFiveId,
  name: "Lettuce",
  description: "Fresh and crisp lettuce, perfect for salads and sandwiches.",
  price: 1.00,
  discount: "6%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Bonus 1",
  "images": [
    "https://res.cloudinary.com/du0vvcuiz/image/upload/v1721924368/ckqqguqwcg6gplhpp2za.jpg",
    "https://res.cloudinary.com/du0vvcuiz/image/upload/v1721924368/itheprnho9dfqioddpmi.jpg",
    "https://res.cloudinary.com/du0vvcuiz/image/upload/v1721924368/klb3npd418trkupivlnd.jpg",
    "https://res.cloudinary.com/du0vvcuiz/image/upload/v1721924368/rxsfmonky2iegr7hnsbu.jpg",
    "https://res.cloudinary.com/du0vvcuiz/image/upload/v1721924368/n8g2jwvsqip1d947flql.jpg"
  ],
  quantity: 5,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productTwelve = {
  id: productTwelveId,
  shopId: shopSixId,
  name: "Wheat",
  description: "High-quality wheat, perfect for baking and cooking.",
  price: 1.20,
  discount: "5%",
  category: "Grains",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free storage bag",
  images: [
    "https://m.media-amazon.com/images/I/61ZBxbrVF0L._AC_UY218_.jpg",
    "https://m.media-amazon.com/images/I/61ZBxbrVF0L._SX425_.jpg",
    "https://m.media-amazon.com/images/I/61ZBxbrVF0L._SX425_.jpg",
    "https://m.media-amazon.com/images/I/51u0EwClwkL._SL1200_.jpg"
  ],
  quantity: 1000,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productThirteen = {
  id: uuidv4(),
  shopId: shopSixId,
  name: "Barley",
  description: "Organic barley, ideal for soups and stews.",
  price: 1.00,
  discount: "8%",
  category: "Grains",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://m.media-amazon.com/images/I/71WgsPCbfpL._AC_SY450_.jpg",
    "https://m.media-amazon.com/images/I/61HTJjDOk9L._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/717Slt7NB-L._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71nL425Q-dL._AC_SL1500_.jpg"
  ],
  quantity: 800,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productFourteen = {
  id: uuidv4(),
  shopId: shopSixId,
  name: "Rice",
  description: "Premium quality rice, perfect for daily meals.",
  price: 0.90,
  discount: "10%",
  category: "Grains",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free storage bag",
  images: [
    "https://m.media-amazon.com/images/I/811pV4BCp8L._AC_SY450_.jpg",
    "https://m.media-amazon.com/images/I/81jS3yV68HL._AC_SX466_.jpg",
    "https://m.media-amazon.com/images/I/51d+uaPNhoL._AC_SX450_.jpg",
    "https://m.media-amazon.com/images/I/81Xo1RLXOHL._AC_SY679_.jpg"
  ],
  quantity: 1200,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productFifteen = {
  id: uuidv4(),
  shopId: shopFourId,
  name: "Soybeans",
  description: "High-protein soybeans, perfect for various dishes.",
  price: 1.30,
  discount: "7%",
  category: "Legumes",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://m.media-amazon.com/images/I/71CdNUA46fL._AC_SY450_.jpg",
    "https://m.media-amazon.com/images/I/81SpZ0I3VsL._AC_SY355_.jpg",
    "https://m.media-amazon.com/images/I/71Tu9wPQBmL._AC_SY355_.jpg",
    "https://m.media-amazon.com/images/I/81w1d1EA4PL._AC_SY355_.jpg"
  ],
  quantity: 700,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productSixteen = {
  id: uuidv4(),
  shopId: shopFourId,
  name: "Peas",
  description: "Fresh and organic peas, perfect for soups and salads.",
  price: 1.10,
  discount: "6%",
  category: "Legumes",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://m.media-amazon.com/images/I/61nNxaKDi+L._AC_SY355_.jpg",
    "https://m.media-amazon.com/images/I/61TtyCx5uRL._AC_SX355_.jpg",
    "https://m.media-amazon.com/images/I/71OwhqoZ91L._AC_SY450_.jpg",
    "https://m.media-amazon.com/images/I/61kVGgL4wHL._AC_SX355_.jpg"
  ],
  quantity: 600,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productSeventeen = {
  id: uuidv4(),
  shopId: shopFourId,
  name: "Corn",
  description: "Fresh and sweet corn, perfect for grilling and cooking.",
  price: 1.50,
  discount: "5%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://m.media-amazon.com/images/I/81SNpiAhomL._AC_SX522_.jpg",
    "https://m.media-amazon.com/images/I/91MfCBLpTHL._AC_SX425_.jpg",
    "https://m.media-amazon.com/images/I/81a94wiXlHL._AC_SX425_.jpg",
    "https://m.media-amazon.com/images/I/81Z+8EmGDsL._AC_SX425_.jpg"
  ],
  quantity: 120,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productEighteen = {
  id: uuidv4(),
  shopId: shopThreeId,
  name: "Green Beans",
  description: "Fresh and crisp green beans, perfect for salads and cooking.",
  price: 2.00,
  discount: "10%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://m.media-amazon.com/images/I/61ao0EKAJVL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    "https://m.media-amazon.com/images/I/71GkO9JEloL._AC_SX425_.jpg",
    "https://m.media-amazon.com/images/I/81W14co9TFL._AC_SX425_.jpg",
    "https://m.media-amazon.com/images/I/81HnygZnY3L._AC_SX425_.jpg"
  ],
  quantity: 200,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productNineteen = {
  id: uuidv4(),
  shopId: shopThreeId,
  name: "Pumpkin",
  description: "Fresh and organic pumpkin, perfect for pies and soups.",
  price: 3.00,
  discount: "8%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://m.media-amazon.com/images/I/51V1bf76cML.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    "https://m.media-amazon.com/images/I/819v7Kl1vOL._AC_SX425_.jpg",
    "https://m.media-amazon.com/images/I/81uJSwMRy+L._AC_SX425_.jpg",
    "https://m.media-amazon.com/images/I/61I93KdTjvL._AC_UF350,350_QL80_FMwebp_.jpg"
  ],
  quantity: 50,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productTwenty = {
  id: uuidv4(),
  shopId: shopThreeId,
  name: "Beetroot",
  description: "Fresh and organic beetroot, perfect for salads and juices.",
  price: 1.80,
  discount: "7%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://m.media-amazon.com/images/I/61uMgGd9F2L._SX425_.jpg",
    "https://m.media-amazon.com/images/I/31tp0vzZwRL._SY355_.jpg",
    "https://m.media-amazon.com/images/I/61fblR+WX+L._SY355_.jpg",
    "https://m.media-amazon.com/images/I/61WAFlrR8lL._SY355_.jpg"
  ],
  quantity: 80,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productTwentyOne = {
  id: uuidv4(),
  shopId: shopOneId,
  name: "Broccoli",
  description: "Fresh and organic broccoli, perfect for steaming and stir-frying.",
  price: 2.50,
  discount: "6%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://m.media-amazon.com/images/I/81ZRSoC3NjL._AC_SY500_.jpg",
    "https://m.media-amazon.com/images/I/91IKWiX-fTL._AC_SX385_.jpg",
    "https://m.media-amazon.com/images/I/81skTJnu1tL._AC_SY445_.jpg",
    "https://m.media-amazon.com/images/I/81HAvVMzgXL._AC_SY445_.jpg"
  ],
  quantity: 100,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productTwentyTwo = {
  id: uuidv4(),
  shopId: shopOneId,
  name: "Cauliflower",
  description: "Fresh and organic cauliflower, perfect for roasting and steaming.",
  price: 2.50,
  discount: "10%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://example.com/cauliflower1.jpg",
    "https://example.com/cauliflower2.jpg",
    "https://example.com/cauliflower3.jpg",
    "https://example.com/cauliflower4.jpg"
  ],
  quantity: 100,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productTwentyThree = {
  id: uuidv4(),
  shopId: shopOneId,
  name: "Zucchini",
  description: "Fresh and organic zucchini, perfect for grilling and baking.",
  price: 1.80,
  discount: "8%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://m.media-amazon.com/images/I/61hEtbJv3YL._AC_SY450_.jpg",
    "https://m.media-amazon.com/images/I/81Fk2GoyzxL._AC_SX466_.jpg",
    "https://m.media-amazon.com/images/I/81jW5if9hVL._AC_SX466_.jpg",
    "https://m.media-amazon.com/images/I/71rIQgts5VL._AC_SX466_.jpg"
  ],
  quantity: 150,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productTwentyFour = {
  id: uuidv4(),
  shopId: shopThreeId,
  name: "Eggplant",
  description: "Fresh and organic eggplant, perfect for grilling and baking.",
  price: 2.00,
  discount: "7%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://m.media-amazon.com/images/I/51WeopkrVXL._AC_SX425_.jpg",
    "https://m.media-amazon.com/images/I/61eveVnNt-L._AC_SX425_.jpg",
    "https://m.media-amazon.com/images/I/712P5VDLrdL._AC_SX425_.jpg",
    "https://m.media-amazon.com/images/I/711Ot6dTKgL._AC_SX425_.jpg"
  ],
  quantity: 120,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productTwentyFive = {
  id: uuidv4(),
  shopId: shopThreeId,
  name: "Bell Peppers",
  description: "Fresh and colorful bell peppers, perfect for salads and cooking.",
  price: 2.50,
  discount: "10%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://m.media-amazon.com/images/I/71BE37ZZfLL._AC_SX522_.jpg",
    "https://m.media-amazon.com/images/I/71IvvSJaVKL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71MKlnbX1OL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/717tPaaj+WL._AC_SX425_.jpg"
  ],
  quantity: 100,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const productTwentySix = {
  id: uuidv4(),
  shopId: shopThreeId,
  name: "Cucumbers",
  description: "Fresh and crisp cucumbers, perfect for salads and pickling.",
  price: 1.50,
  discount: "5%",
  category: "Vegetables",
  expiryDate: new Date("2050-12-31"),
  expired: false,
  bonus: "Free recipe book",
  images: [
    "https://m.media-amazon.com/images/I/71jeulFxQ9L._AC_SY679_.jpg",
    "https://m.media-amazon.com/images/I/61C33xw7O1L._AC_SY450_.jpg",
    "https://m.media-amazon.com/images/I/61OKjqrqS8L._AC_SX450_.jpg",
    "https://m.media-amazon.com/images/I/71U7PpAeQNL._AC_SY450_.jpg"
  ],
  quantity: 200,
  status: "available",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const up = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkInsert("products", [
    productOne,
    productTwo,
    productThree,
    productFour,
    productFive,
    productSix,
    productSeven,
    productEight,
    productNine,
    productTen,
    productEleven,
    productTwelve,
    productThirteen, productFourteen, productFifteen, productSixteen, productSeventeen, productEighteen,
    productNineteen, productTwenty, productTwentyOne, productTwentyTwo, productTwentyThree, productTwentyFour,
    productTwentyFive, productTwentySix
  ]);
};

export const down = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkDelete("products", {});
};