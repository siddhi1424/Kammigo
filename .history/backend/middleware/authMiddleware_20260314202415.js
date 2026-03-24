const jwt = require("jsonwebtoken");

//------------------Protect middleware--------------//
const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  console.log("Auth header received:", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({
      message: "Not authorized ,token is missing",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "NOt authorized,invalid token",
    });
  }
};

//------------------Role BASed Middleware ------------------//
const checkRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({
        message: "Access Denied",
      });
    }

    next(); //role match hua to allow karo go further
  };
};

module.exports = { protect, checkRole };
