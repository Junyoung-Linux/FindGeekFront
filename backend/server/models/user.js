import mongoose from "mongoose";

import passportLocalMongoose from "passport-local-mongoose";


const UserScehme = new mongoose.Schema ({
    name: String,
    email: String,
    avatarUrl: String,
    githubId: Number,
    githubURL: String

})

UserScehme.plugin(passportLocalMongoose, {usernameField: 'email'});

const model = mongoose.Model("User", UserScehme);

export default model;

