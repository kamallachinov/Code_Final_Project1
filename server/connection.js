const mongoose = require('mongoose')


async function connectMongoDb(url) {
    return mongoose.connect(url, (err) => {
        if (!err) {
            console.log("DataBase connected");
        } else {
            console.log(err);
        }
    })
}
mongoose.connection.on("disconnected", () => {
    console.log("mongoDb disconnected");
})


module.exports = {
    connectMongoDb,
}





