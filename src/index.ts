import checkEnv from './core/helpers/checkEnv'
checkEnv()

import faker from 'faker'
import { search,
  setSettings,
  getSettings,
  createObject,
  getObject,
  deleteObjectsWithId,
  deleteIndex } from './algolia'

const products = [{
    name: faker.commerce.productName(),
    imageUrl: faker.image.imageUrl(),
    price: `${faker.commerce.price()} $`,
    description:faker.commerce.productDescription()
},{
    name: faker.commerce.productName(),
    imageUrl: faker.image.imageUrl(),
    price: `${faker.commerce.price()} $`,
    description:faker.commerce.productDescription()
    }]


//Search
search('s')

//AddProducts
createObject(products)





