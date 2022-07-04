const passport = require("passport")
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const GitHubStrategy = require ('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;




const GOOGLE_CLIENT_ID = '546874340887-rhrn1n2egorpjqtei0eiuj4fq3nt6j0c.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'

const GITHUB_CLIENT_ID = '882c7fbb2c8954d585d4'
const GITHUB_CLIENT_SECRET = '152c828c3c1ee8aeae51544a7d7c094f3db2426f'

const FACEBOOK_APP_ID = '1014624092590674'
const FACEBOOK_APP_SECRET = 'ccd7379061802a9e21c8f167bdde2d9f'

const TWITTER_CONSUMER_KEY = 'VW1qcVBrVmtDUVBYWVlLRDZfOXI6MTpjaQ'
const TWITTER_CONSUMER_SECRET = 'NqKWRzmNbNTMl6vXyAK5Pl6tEwNGYuZgoNS7WIwI3zgxu9ZwUW'





passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);


passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "http://localhost:3001/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);


passport.use(
  new TwitterStrategy(
    {
      consumerKey: TWITTER_CONSUMER_KEY,
      consumerSecret: TWITTER_CONSUMER_SECRET,
      callbackURL: "http://localhost:3001/twitter/callback",
    },
    function(accessToken,refreshToken,profile,done){
      done(null,profile);
    }
  )
)



passport.serializeUser(function(user,done) {
    done(null,user)
})


passport.deserializeUser(function(user,done) {
    done(null,user)
})
