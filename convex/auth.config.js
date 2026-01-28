export default {
  providers: [
    {
      // Replace with your own Clerk Issuer URL from your "convex" JWT template.
      // or with `process.env.CLERK_JWT_ISSUER_DOMAIN`
      domain:
        process.env.CLERK_JWT_ISSUER_DOMAIN ||
        'https://convex.clerk.accounts.dev',
      applicationID: 'convex',
    },
  ],
}
