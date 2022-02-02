

<h3 align="center">
  Fuerza API 
</h3>





## :computer: About the project

This api provides a simulation of post request, listing all posts or a unique one, update a post, delete a post and is the result of a node-challenge provided by Fuerza Studio @fuerzastudio.


## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Mongoose](https://mongoosejs.com/)
- [Swagger](https://swagger.io/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)



## :dart: Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)


**Clone the project and access the folder**

```bash
$ git clone https://github.com/colpachi/node-challenge.git && cd fuerza-api
```

**Follow the steps below**

```bash
# Install the dependencies
$ npm install

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
$ cp .env.example .env

# Create the instance of mongoDB using docker
$ docker run --name fuerza-api -p 27017:27017 -d -t mongo

# make sure the services are running
$ docker container ps

# To finish, run the api service
$ npm start

# Well done, you should be good to go!
```

## :gem: Final considerations

- You can choose your best api software tool, we recommend postman for the route testing.

- For the tests please run: 

```bash
npm test
```

- You can always search the documentation available in docs folder to get in touch with the operations available in this api. Please access: 

```bash
http://localhost:3000/docs/
```

Enjoy!

 

Made with :hearts: &nbsp;by Murilo Colpachi 👋 &nbsp;[Here is my linkedin](https://www.linkedin.com/in/murilo-colpachi-b3275190/)