const fs = require("fs")
const path = require("path")

function loadEnvLocal() {
  try {
    const file = fs.readFileSync(path.join(__dirname, ".env.local"), "utf8")
    return Object.fromEntries(
      file.split("\n")
        .filter((l) => l && !l.startsWith("#") && l.includes("="))
        .map((l) => [l.slice(0, l.indexOf("=")), l.slice(l.indexOf("=") + 1)])
    )
  } catch {
    return {}
  }
}

const localEnv = loadEnvLocal()

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
        ...localEnv,
      },
    },
  ],
}
