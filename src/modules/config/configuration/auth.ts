export default () => ({
  auth: {
    salt: parseInt(process.env.SALT),
    jwtSecret: process.env.JWT_SECRET,
  },
});
