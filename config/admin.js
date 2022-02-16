module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cef8d9b52ff2508b39b699f1e6834745'),
  },
});
