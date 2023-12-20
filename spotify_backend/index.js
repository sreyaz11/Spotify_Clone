const express = require('express');
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const User = require('./models/User');
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
const app = express();  
const port = 8000;
const mongoose = require('mongoose');

app.use(express.json());

mongoose.connect("mongodb://localhost:27017", {})
        .then((x) => {console.log("Connected to Mongo");})
        .catch((err) => {console.log("Error connecting to Mongo");});


let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "thisKeyIsSupposedToBeSecret";
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

app.get('/', (req, res) => {
    res.send("Welcome");
});

app.use("/auth", authRoutes);
app.use("/song", songRoutes);

app.listen(port, () => {
    console.log("listening on port: " + port);
}); 