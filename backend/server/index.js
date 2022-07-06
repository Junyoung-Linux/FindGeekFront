const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");

require("./passport")
const passport = require("passport");
const authRoute = require("./routes/auth")
const app = express();

app.use(cookieSession(
    {name:"session",
    keys:["linuxGeek"],
    maxAge: 0,  //one day cookie expires.
}
))

app.use(passport.initialize());
app.use(passport.session());



// app.use((req,res,next) =>{
//     console.log(req.session);
//     console.log(req.user);
//     next();
// })

app.use(cors({
    origin:"http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    Credentials: true,
})
)

app.use('/auth', authRoute) //leading to login(success) automatically.

app.listen("3001", ()=>{
    console.log("Server is running")
})