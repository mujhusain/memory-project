const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, process.env.SALT);
      req.userId = decodedData.id; //this req.userId is can access in action part after authentication only
    } else {
      decodedData = jwt.verify(token);
      req.userId = decodedData.sub; //this req.userId is can access in action part after authentication only
    }

    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports =auth;
