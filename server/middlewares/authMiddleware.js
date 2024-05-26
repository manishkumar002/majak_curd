const  JWT =require('jsonwebtoken')
 
//Protected Routes token base
  const requireSignIn = async (req, res, next) => {
  try {
    console.log("token is  :"+req.headers.authorization)
    const decode = JWT.verify(
      req.headers.authorization.split(' ')[1],
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
   res.send("invalid token")
  }
};

module.exports={requireSignIn}


























 
// export const isAdmin = async (req, res, next) => {
//   try {
//     const user = await userModel.findById(req.user._id);
//     if (user.role !== 1) {
//       return res.status(401).send({
//         success: false,
//         message: "UnAuthorized Access",
//       });
//     } else {
//       next();
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(401).send({
//       success: false,
//       error,
//       message: "Error in admin middelware",
//     });
//   }
// };