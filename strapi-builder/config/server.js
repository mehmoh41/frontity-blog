module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1212),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '4f9e8a4b83927ca335762cd4c1ade7f0'),
    },
  },
});
