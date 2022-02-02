const mongoose = require('mongoose');
const request = require('supertest');

const { app } = require('../src/app');
const Post = require('../src/models/post');

const { createMockPosts } = require('./mocks/posts');

jest.setTimeout(15 * 1000);

describe('Post', () => {
  beforeAll(async () => {

    const { MONGO_HOST, MONGO_PORT, MONGO_DATABASE } = process.env;

    await mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}?retryWrites=true&w=majority`)
  });
  beforeEach(async () => {
    await Post.deleteMany({});
  });

  afterAll(() => {
    mongoose.disconnect();
  });

  test('should return a list of posts', async () => {
    const lenPosts = 100;
    await Post.insertMany(createMockPosts(lenPosts));
    const response = await request(app).get('/api/posts');

    expect(response.status).toBe(200);
    expect(response.body.total).toBe(lenPosts);
    expect(response.body.data.length).toBe(10);
  });

  test('should return a list of posts paginated', async () => {
    const lenPosts = 100;
    await Post.insertMany(createMockPosts(lenPosts));
    const page = 3;
    const perPage = 23;
    const response = await request(app).get(
      `/api/posts?page=${page}&perPage=${perPage}`
    );

    expect(response.status).toBe(200);
    expect(response.body.total).toBe(lenPosts);
    expect(response.body.data.length).toBe(perPage);
  });

  test('should create a new post', async () => {
    const post = createMockPosts()[0];
    const response = await request(app).post(`/api/posts`).send(post);

    expect(response.status).toBe(200);
    expect(response.body.title).toBe(post.title);
    expect(response.body.body).toBe(post.body);
    expect(response.body.tags).toEqual(post.tags);
  });

  test('should return a post', async () => {
    const postData = createMockPosts()[0];
    const post = await Post.create(postData);
    const response = await request(app).get(`/api/posts/${post._id}`);

    expect(response.status).toBe(200);
    expect(response.body.title).toBe(post.title);
    expect(response.body.body).toBe(post.body);
    expect(response.body.tags).toEqual(post.tags);
  });

  test('should update a post', async () => {
    const postData = createMockPosts()[0];
    const post = await Post.create(postData);
    const postUpdating = createMockPosts()[0];

    const response = await request(app)
      .put(`/api/posts/${post._id}`)
      .send(postUpdating);

    expect(response.status).toBe(200);
    expect(response.body.title).toBe(postUpdating.title);
    expect(response.body.body).toBe(postUpdating.body);
    expect(response.body.tags).toEqual(postUpdating.tags);
  });

  test('should delete a post', async () => {
    const postsData = createMockPosts(3);
    const posts = await Post.insertMany(postsData);
    const response = await request(app).delete(`/api/posts/${posts[0]._id}`);

    expect(response.status).toBe(200);
    expect((await Post.find()).length).toBe(2);
  });
});
