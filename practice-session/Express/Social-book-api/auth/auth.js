const passport = require('passport');
const localstrategy = require('passport-local').Strategy;
const User = require('../model/user');

passport.use(new localstrategy(async (email, password, done) => {

  try {
    const user = await User.findOne({ email });
    if (!user)
      return done(null, false, { message: "user is not found" });

    const ispasswordcorrect = user.password = password ? true : false;
    if (ispasswordcorrect)
      return done(null.user);
    else
      return done(null, false, { message: "incorrect password" });
  } catch (err) {
    return done(err);
  }
}));

module.exports = passport;

