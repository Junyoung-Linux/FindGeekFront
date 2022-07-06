import User from "./models/user";

const postJoin = async (req,res) => {
    const{
        body: {name,email,password,password2}
    } =req;
    if(password !== password2){
        res.status(400);
        res.render("join",{pageTitle: "Join"});
        console.log("비밀번호틀림")
    } else{
        try{
            const user= await User({
                name,
                email
            })
            await User.resister(user,password);
        } catch (error) {
            console.log(error);
        }
        res.redirect(routes.home);
    }
}