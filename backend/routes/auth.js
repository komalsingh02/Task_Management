const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  // Extract the token from the Authorization header
  const authHeader = req.headers.authorization; // Example: "Bearer <token>"
  const token = authHeader && authHeader.split(" ")[1]; // Extract the token part

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied. No token provided." });
  }

  // Verify the token
  jwt.verify(token, "abc", (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token." });
    }

    // Attach user data to the request object
    req.user = user;

    // Pass control to the next middleware or route handler
    next();
  });
};

module.exports = authenticateToken;
