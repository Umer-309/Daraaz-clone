import { faker } from "@faker-js/faker"

interface Product {
    name: string;
    description: string;
    price: number;
    userId: string;
    image: string;
    catagory: string;
}


interface Catagory {
    id: string,
    name: string
}

export const categories: Catagory[] = [{
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
}]

const random = (arr: Catagory[]) => {
    return Math.floor(Math.random() * arr.length);
}

// export const products = {
export function generateProduct(): Product {
    return {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: Number(faker.commerce.price({ min: 0, max: 1000 })),
        userId: faker.string.uuid(),
        image: faker.image.avatar(),
        catagory: categories[random(categories)].name
    }
}

export const products: Product[] = Array.from({ length: 50 }, () => generateProduct())