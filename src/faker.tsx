import { faker } from "@faker-js/faker"
import dummyImage from "./Images/dummy.webp"

export interface Product {
    name: string;
    description: string;
    price: number;
    userId: string;
    image: string;
    catagory: string;
    rating: number;
    reviews: number
}


export interface Category {
    id: string,
    name: string
}

export const categories: Category[] = [{
    name: "Mobile & Tablets",
    id: faker.string.uuid()
},
{
    name: "TV's & Home Appliances",
    id: faker.string.uuid()
},
{
    name: "Computing, Cameras & Gaming",
    id: faker.string.uuid()
},
{
    name: "Men's Fashion",
    id: faker.string.uuid()
},
{
    name: "Women's Fashion",
    id: faker.string.uuid()
},
{
    name: "Health & Beauty",
    id: faker.string.uuid()
},
{
    name: "Groceries & Pets",
    id: faker.string.uuid()
},
{
    name: "Baby, Kids & Toys",
    id: faker.string.uuid()
}];

export interface Coupon {
    code: string;
    discountAmount: number;
}

export const coupons: Coupon[] = [{
    code: 'DARAAZ10',
    discountAmount: 10
},
{
    code: 'DARAAZ20',
    discountAmount: 20
},
{
    code: 'DARAAZ25',
    discountAmount: 25
},
{
    code: 'DARAAZ30',
    discountAmount: 30
},
{
    code: 'DARAAZ35',
    discountAmount: 35
}];
    
    


export const products: Product[] = [
    {
        "name": "Handcrafted Concrete Sausages",
        "description": "TECH TOK AirPods_Pro Wireless Earbuds Bluetooth 5.0, Super Sound Bass, Charging Case and Extra Ear-Buds, Pop-Up Feature Compatible with All Devices",
        "price": 319,
        "userId": "1",
        "image": dummyImage,
        "catagory": "Computing, Cameras & Gaming",
        "rating": 3.6,
        "reviews": 642
    },
    {
        "name": "Small Plastic Chair",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "price": 537,
        "userId": "9455e520-f61d-43b5-9f27-a27c9ed96677",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/148.jpg",
        "catagory": "Men's Fashion",
        "rating": 3.6,
        "reviews": 623
    },
    {
        "name": "Generic Steel Fish",
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "price": 571,
        "userId": "1fcecaf4-4349-4be8-9bca-a6082a56d06a",
        "image": "https://avatars.githubusercontent.com/u/99504735",
        "catagory": "Mobile & Tablets",
        "rating": 4.9,
        "reviews": 51
    },
    {
        "name": "Recycled Metal Hat",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "price": 209,
        "userId": "6f1b3f99-d6a0-4a81-95a1-b5b14c5dd497",
        "image": "https://avatars.githubusercontent.com/u/82252232",
        "catagory": "Groceries & Pets",
        "rating": 3.9,
        "reviews": 287
    },
    {
        "name": "Small Bronze Table",
        "description": "The Football Is Good For Training And Recreational Purposes",
        "price": 673,
        "userId": "97c77857-c512-4574-a755-4ab33fd7665f",
        "image": "https://avatars.githubusercontent.com/u/9489316",
        "catagory": "Women's Fashion",
        "rating": 2.4,
        "reviews": 179
    },
    {
        "name": "Electronic Granite Sausages",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "price": 339,
        "userId": "0adf5bf0-2fc8-4c29-9229-7cb4c8a9fac7",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/536.jpg",
        "catagory": "Groceries & Pets",
        "rating": 4.3,
        "reviews": 762
    },
    {
        "name": "Tasty Bronze Tuna",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "price": 91,
        "userId": "4501009c-89b9-48e7-8485-0bc368e76c98",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/350.jpg",
        "catagory": "Men's Fashion",
        "rating": 3.1,
        "reviews": 152
    },
    {
        "name": "Handcrafted Wooden Chair",
        "description": "The Football Is Good For Training And Recreational Purposes",
        "price": 159,
        "userId": "82ba07e1-fae8-40dd-af5d-22a2d9323d57",
        "image": "https://avatars.githubusercontent.com/u/83832797",
        "catagory": "Computing, Cameras & Gaming",
        "rating": 4.5,
        "reviews": 599
    },
    {
        "name": "Gorgeous Concrete Chair",
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "price": 624,
        "userId": "b08b30c9-a175-49f0-baed-a9ceaca302f9",
        "image": "https://avatars.githubusercontent.com/u/95063310",
        "catagory": "TV's & Home Appliances",
        "rating": 4,
        "reviews": 89
    },
    {
        "name": "Elegant Bronze Bacon",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "price": 816,
        "userId": "9e92a198-227b-4f14-81de-ccc0026f6a1c",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/911.jpg",
        "catagory": "Mobile & Tablets",
        "rating": 3.8,
        "reviews": 334
    },
    {
        "name": "Handmade Fresh Mouse",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "price": 199,
        "userId": "d5365283-3c21-4580-a0eb-b2998799937c",
        "image": "https://avatars.githubusercontent.com/u/49144808",
        "catagory": "Groceries & Pets",
        "rating": 2.7,
        "reviews": 654
    },
    {
        "name": "Recycled Cotton Table",
        "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "price": 0,
        "userId": "ff793624-e54d-499b-9518-0ba84c97898b",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1107.jpg",
        "catagory": "TV's & Home Appliances",
        "rating": 3.8,
        "reviews": 690
    },
    {
        "name": "Modern Rubber Shirt",
        "description": "The Football Is Good For Training And Recreational Purposes",
        "price": 274,
        "userId": "c3d0e48a-a939-4132-b6d6-c1848534df17",
        "image": "https://avatars.githubusercontent.com/u/9740669",
        "catagory": "Men's Fashion",
        "rating": 5,
        "reviews": 141
    },
    {
        "name": "Handmade Plastic Hat",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "price": 648,
        "userId": "6bfddeb0-5f72-40fa-8499-a464aa51e706",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/696.jpg",
        "catagory": "TV's & Home Appliances",
        "rating": 3.5,
        "reviews": 306
    },
    {
        "name": "Awesome Fresh Bike",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "price": 830,
        "userId": "626c5314-eab4-4cca-a531-050af4b31a01",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/895.jpg",
        "catagory": "Groceries & Pets",
        "rating": 2.2,
        "reviews": 303
    },
    {
        "name": "Intelligent Wooden Pizza",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "price": 10,
        "userId": "f8dd5ee9-a124-47d8-9379-ead6c4a44f71",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/854.jpg",
        "catagory": "Groceries & Pets",
        "rating": 4.9,
        "reviews": 705
    },
    {
        "name": "Recycled Granite Gloves",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "price": 55,
        "userId": "62a95f3e-6f14-476d-9cde-ee9f5685674c",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/977.jpg",
        "catagory": "Groceries & Pets",
        "rating": 4.2,
        "reviews": 437
    },
    {
        "name": "Gorgeous Plastic Bacon",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "price": 230,
        "userId": "b966515e-e605-4af3-ac88-1eb83746aa89",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/98.jpg",
        "catagory": "Mobile & Tablets",
        "rating": 3,
        "reviews": 172
    },
    {
        "name": "Oriental Plastic Pants",
        "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "price": 45,
        "userId": "1ce13e70-af92-4ceb-bdd1-e57962ed97a8",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/158.jpg",
        "catagory": "Groceries & Pets",
        "rating": 3.1,
        "reviews": 1
    },
    {
        "name": "Intelligent Bronze Ball",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "price": 191,
        "userId": "994348ba-5aa6-454d-875d-b5a7b5d9dde7",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/405.jpg",
        "catagory": "TV's & Home Appliances",
        "rating": 4.3,
        "reviews": 296
    },
    {
        "name": "Luxurious Metal Bacon",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "price": 422,
        "userId": "ff32900f-e37a-4fa0-a45c-a9293c63ef07",
        "image": "https://avatars.githubusercontent.com/u/63374638",
        "catagory": "Mobile & Tablets",
        "rating": 3.2,
        "reviews": 383
    },
    {
        "name": "Awesome Frozen Shoes",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "price": 745,
        "userId": "26e2915f-e38d-47db-99ab-06817e770a8a",
        "image": "https://avatars.githubusercontent.com/u/56273009",
        "catagory": "Men's Fashion",
        "rating": 4.4,
        "reviews": 730
    },
    {
        "name": "Practical Frozen Table",
        "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "price": 829,
        "userId": "05b4d2c9-8507-4616-af7e-ad052f688544",
        "image": "https://avatars.githubusercontent.com/u/33815005",
        "catagory": "Women's Fashion",
        "rating": 4.9,
        "reviews": 339
    },
    {
        "name": "Oriental Frozen Table",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "price": 939,
        "userId": "9f02da19-9630-4872-866a-e69c2472116b",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/451.jpg",
        "catagory": "Baby, Kids & Toys",
        "rating": 2.3,
        "reviews": 724
    },
    {
        "name": "Oriental Plastic Towels",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "price": 450,
        "userId": "98fd7b73-6aca-44ec-a8ef-106376de559e",
        "image": "https://avatars.githubusercontent.com/u/36239156",
        "catagory": "Health & Beauty",
        "rating": 2.6,
        "reviews": 459
    },
    {
        "name": "Handcrafted Plastic Ball",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "price": 750,
        "userId": "25f64f83-ace4-48d7-8fe6-01ed21349a3d",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/455.jpg",
        "catagory": "Mobile & Tablets",
        "rating": 3.7,
        "reviews": 363
    },
    {
        "name": "Practical Fresh Fish",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "price": 635,
        "userId": "99b8a32b-2b91-4caa-a3b1-386ebc2b52de",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/967.jpg",
        "catagory": "Baby, Kids & Toys",
        "rating": 3.7,
        "reviews": 733
    },
    {
        "name": "Practical Fresh Cheese",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "price": 263,
        "userId": "b1beb279-067f-4872-a01c-617fc936d2af",
        "image": "https://avatars.githubusercontent.com/u/56233654",
        "catagory": "Groceries & Pets",
        "rating": 4.8,
        "reviews": 352
    },
    {
        "name": "Ergonomic Rubber Shirt",
        "description": "The Football Is Good For Training And Recreational Purposes",
        "price": 938,
        "userId": "b78b9637-6716-4fff-80b7-128d710c809a",
        "image": "https://avatars.githubusercontent.com/u/39499709",
        "catagory": "Health & Beauty",
        "rating": 3.1,
        "reviews": 344
    },
    {
        "name": "Intelligent Soft Chicken",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "price": 418,
        "userId": "3bb97102-2ba5-4bc0-8ebb-ba60d3db7df6",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/147.jpg",
        "catagory": "Baby, Kids & Toys",
        "rating": 4.5,
        "reviews": 430
    },
    {
        "name": "Tasty Plastic Ball",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "price": 762,
        "userId": "899c7a7a-4d0a-47ee-ac73-ab9910b95c48",
        "image": "https://avatars.githubusercontent.com/u/16798152",
        "catagory": "Groceries & Pets",
        "rating": 4.6,
        "reviews": 526
    },
    {
        "name": "Gorgeous Steel Table",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "price": 730,
        "userId": "ca193ac5-79b4-4fe6-904d-7be92a303f44",
        "image": "https://avatars.githubusercontent.com/u/7152639",
        "catagory": "Baby, Kids & Toys",
        "rating": 4.1,
        "reviews": 838
    },
    {
        "name": "Rustic Fresh Keyboard",
        "description": "The Football Is Good For Training And Recreational Purposes",
        "price": 310,
        "userId": "29bab9f9-ab93-47fe-9188-ae01d0dc4fec",
        "image": "https://avatars.githubusercontent.com/u/66128758",
        "catagory": "Women's Fashion",
        "rating": 2.6,
        "reviews": 382
    },
    {
        "name": "Gorgeous Plastic Mouse",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "price": 411,
        "userId": "cc0c3f42-99db-4aac-93c8-0c88532eab16",
        "image": "https://avatars.githubusercontent.com/u/27237386",
        "catagory": "Groceries & Pets",
        "rating": 2,
        "reviews": 4
    },
    {
        "name": "Intelligent Steel Pizza",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "price": 339,
        "userId": "1dcf4afa-f948-4e5d-a99a-abffbd6b6676",
        "image": "https://avatars.githubusercontent.com/u/99705568",
        "catagory": "Baby, Kids & Toys",
        "rating": 4,
        "reviews": 510
    },
    {
        "name": "Licensed Cotton Tuna",
        "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "price": 834,
        "userId": "3768f7e7-a3d4-4509-9b68-b2bca450eded",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1238.jpg",
        "catagory": "Women's Fashion",
        "rating": 2.2,
        "reviews": 353
    },
    {
        "name": "Electronic Metal Chicken",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "price": 891,
        "userId": "f1ce03e2-b0fb-4602-ba3f-30e65fcb8cde",
        "image": "https://avatars.githubusercontent.com/u/47180852",
        "catagory": "Health & Beauty",
        "rating": 2.5,
        "reviews": 669
    },
    {
        "name": "Elegant Granite Car",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "price": 490,
        "userId": "6277f384-3776-4ed4-99ae-6ba794e3a472",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1055.jpg",
        "catagory": "TV's & Home Appliances",
        "rating": 2,
        "reviews": 784
    },
    {
        "name": "Gorgeous Fresh Tuna",
        "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "price": 964,
        "userId": "2b865bf7-6507-4b6e-b579-725eaa982e0d",
        "image": "https://avatars.githubusercontent.com/u/83358890",
        "catagory": "Computing, Cameras & Gaming",
        "rating": 2.9,
        "reviews": 679
    },
    {
        "name": "Licensed Bronze Ball",
        "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "price": 663,
        "userId": "83f74860-1796-45d1-86bf-af321007e291",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/873.jpg",
        "catagory": "TV's & Home Appliances",
        "rating": 4.2,
        "reviews": 626
    },
    {
        "name": "Recycled Frozen Gloves",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "price": 537,
        "userId": "29822e51-7301-46af-bcca-3f263ca33ee1",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/541.jpg",
        "catagory": "Men's Fashion",
        "rating": 4.8,
        "reviews": 103
    },
    {
        "name": "Licensed Plastic Bacon",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "price": 405,
        "userId": "bf837c0d-dfc8-491b-a562-8269e46bfdcc",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/91.jpg",
        "catagory": "Mobile & Tablets",
        "rating": 4.8,
        "reviews": 975
    },
    {
        "name": "Tasty Soft Cheese",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "price": 799,
        "userId": "22d0df0c-2833-41c4-8ec9-82701b0cefa3",
        "image": "https://avatars.githubusercontent.com/u/26381872",
        "catagory": "Computing, Cameras & Gaming",
        "rating": 4.6,
        "reviews": 278
    },
    {
        "name": "Awesome Steel Towels",
        "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "price": 11,
        "userId": "57be03bc-b03a-4e09-8451-b3a1ac7703ef",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/236.jpg",
        "catagory": "Groceries & Pets",
        "rating": 4.8,
        "reviews": 886
    },
    {
        "name": "Small Cotton Fish",
        "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "price": 944,
        "userId": "32a1c178-0f63-49e5-87e5-5836c639ed59",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/205.jpg",
        "catagory": "TV's & Home Appliances",
        "rating": 4.9,
        "reviews": 249
    },
    {
        "name": "Ergonomic Cotton Car",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "price": 580,
        "userId": "d47e32f8-b262-4420-8d51-4caa18e348aa",
        "image": "https://avatars.githubusercontent.com/u/64028773",
        "catagory": "Computing, Cameras & Gaming",
        "rating": 3.2,
        "reviews": 162
    },
    {
        "name": "Oriental Steel Ball",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "price": 643,
        "userId": "7655d351-c80b-40dc-bc5b-da0f35118bce",
        "image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1163.jpg",
        "catagory": "Mobile & Tablets",
        "rating": 4.8,
        "reviews": 461
    },
    {
        "name": "Modern Metal Gloves",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "price": 330,
        "userId": "c0040002-72de-4c0f-bde2-baf75013c709",
        "image": "https://avatars.githubusercontent.com/u/56299835",
        "catagory": "TV's & Home Appliances",
        "rating": 4,
        "reviews": 323
    },
    {
        "name": "Generic Concrete Chicken",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "price": 862,
        "userId": "088863a6-e02b-4bb9-b331-a5f60d92521c",
        "image": "https://avatars.githubusercontent.com/u/86083843",
        "catagory": "Men's Fashion",
        "rating": 4.7,
        "reviews": 816
    },
    {
        "name": "Handcrafted Bronze Ball",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "price": 358,
        "userId": "0f4dcc75-9600-4ce3-80d4-64acbf06a98b",
        "image": "https://avatars.githubusercontent.com/u/62413159",
        "catagory": "Computing, Cameras & Gaming",
        "rating": 4.4,
        "reviews": 154
    }
]














    // const random = (arr: Catagory[]) => {
    //     return Math.floor(Math.random() * arr.length);
    // }
    // const getRandomNumber = (min: number, max: number) => {
    //     const randowmNum = Math.floor(Math.random() * (max * 10 - min * 10 + 1) + min * 10)
    
    //     return randowmNum / 10;
    // }
    
    // export const products = {
    // export function generateProduct(): Product {
    //     return {
    //         name: faker.commerce.productName(),
    //         description: faker.commerce.productDescription(),
    //         price: Number(faker.commerce.price({ min: 0, max: 1000 })),
    //         userId: faker.string.uuid(),
    //         image: faker.image.avatar(),
    //         catagory: categories[random(categories)].name,
    //         rating: getRandomNumber(2, 5),
    //         reviews: Math.floor(Math.random() * 1000)
    //     }
    // }
    
    // export const products: Product[] = Array.from({ length: 50 }, () => generateProduct())