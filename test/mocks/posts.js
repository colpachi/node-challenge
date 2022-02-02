const faker = require('faker');

function createMockPosts(len = 1, tags = 3) {
  const posts = [];
  for (let i = 0; i < len; i++) {
    posts.push({
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraph(),
      tags: [...Array(tags)].map(() => faker.lorem.word()),
    });
  }

  return posts;
}

module.exports = { createMockPosts };
