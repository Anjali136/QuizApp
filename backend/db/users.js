const{v4:uuid}=require("uuid");

const userdata = {
    "users": [
        {
            id: uuid(),
            username: "prakashsakari",
            password: "ps12345",
            email: "pk@gmail.com",
        },
        {
            id: uuid(),
            username: "anjali",
            password: "Anjali1234",
            email: "anjali@gmail.com",
        },
    ]
}

module.exports = userdata;