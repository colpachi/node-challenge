const {app} = require('./app')
require('./helpers/mongoose')

app.listen(3000, () => {
    console.log(`Express server is running on http://localhost:3000`)
})