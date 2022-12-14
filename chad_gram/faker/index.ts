import { faker } from '@faker-js/faker'
// import { faker } from '@faker-js/faker/locale/de';

export const USERS = [];

export function createRandomUser() {
   return {
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
   }
}

export function createRandomPost(){
   return {
      image: faker.image.abstract(),
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
      description: faker.lorem.sentence()
   }
}