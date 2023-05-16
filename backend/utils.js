import jwt from "jsonwebtoken";
export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.admin,
    },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  ); //"JWT_SECRET" is a secret string to encrypt the data
};
