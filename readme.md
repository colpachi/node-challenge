# Backend Challenge

The project is a simple challenge to test your skills in building APIs using the Node.js framework.

### Submission

- [ ] Read the description, requirements, and the others instructions

### What to do

- Create a simple API to manage the system of posts (CRUD).

**This API should allow to:**

| Method | Name | Route |
| ------ | ------ | ------ |
| POST | Create Post | /api/posts |
| GET | Listing Posts | /api/posts |
| GET | Get Post By ID | /api/posts/:id |
| PUT | Edit Post | /api/posts/:id |
| DELETE | Delete Post | /api/posts/:id |

**The post must have the following fields:**

| Field | Type |
| ------ | ------ |
| id | UUID |
| title | string |
| body | string |
| tags | string[] |

### Requirements

- [ ] All API responses must be in JSON format.
- [ ] Add pagination on the API for the listing of the posts
- [ ] Provide the unit testing for all routes using Mocha and Chai or your preferred testing framework.
- [ ] Provide documentation for all routes, we preferer using Swagger API, but you can using README for documentation.
- [ ] Provide a README file with usage instructions (how to the runs, considerations, etc...).
- [ ] Use naming written as camelCase by convention.

#### - **The folders structures of the project should be following the example below.**

```sh
├── src
│   ├── controllers
│   │   └── posts
│   ├── helpers
│   │   └── utils.js
│   ├── models
│   │   └── post.js
│   ├── routes
│   │   └── api
│   │       ├── posts.js
│   │       └── index.js
│   └── app.js
├── test
│   └── posts
├── .editorconfig
├── .gitignore
├── package.json
└── readme.md
```

#### Any routes should process the response in the controllers, no use function directly in the routes.

- See example below

![basic structure](https://i.imgur.com/lyRSYj8.png)

### Data Persistence

- [ ] You will need to persist the data in some way, maybe in memory.
- [ ] You don't need to use any external data persistence (database, cache, etc.), and the easier it is for us to run it, is better.

### Evaluation

- [ ] Architecture
- [ ] Automated tests
- [ ] Functionalities of the APIs
- [ ] Programming good practices
- [ ] Project organization
- [ ] Structure componentization
- [ ] Clean code with camelcase pattern

### Bonus Level Up

- [ ] Authenticated the routes using JWT
- [ ] Process and validate the data that the API receives before creating the post.
- [ ] Using MongoDB for storage data
- [ ] Using Swagger API documentation
