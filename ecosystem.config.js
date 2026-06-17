module.exports = {
  apps: [
    {
      name: "techtribeafrica",
      script: ".next/standalone/server.js",
      cwd: "/var/www/techtribeafrica.com",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3016,
        HOSTNAME: "0.0.0.0",
        NEXT_PUBLIC_SITE_URL: "https://techtribeafrica.com",
        NEWSLETTER_PUBLICATION_ID: "pub_deeeec18-4bdb-4a58-a47f-ee2a8d07b08c",
      },
    },
  ],
}
