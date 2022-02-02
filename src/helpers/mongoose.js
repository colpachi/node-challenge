const mongoose = require('mongoose')

const { MONGO_HOST, MONGO_PORT, MONGO_DATABASE } = process.env;

mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}?retryWrites=true&w=majority`)