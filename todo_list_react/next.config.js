/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    const baseApiUrl = "http://localhost:8080";

    return [
      {
        source: "/api/v1.0.0/todo/all",
        destination: `${baseApiUrl}/api/v1.0.0/todo/all`,
      },
      {
        source: "/api/v1.0.0/todo/save",
        destination: `${baseApiUrl}/api/v1.0.0/todo/save`,
      },
      {
        source: "/api/v1.0.0/todo/delete",
        destination: `${baseApiUrl}/api/v1.0.0/todo/delete`,
      },{
        source: "/api/v1.0.0/todo/deleteAll",
        destination: `${baseApiUrl}/api/v1.0.0/todo/deleteAll`,
      },
      {
        source: "/api/v1.0.0/todo/update",
        destination: `${baseApiUrl}/api/v1.0.0/todo/update`,
      },
      {
        source: "/api/v1.0.0/todo/updateAll",
        destination: `${baseApiUrl}/api/v1.0.0/todo/updateAll`,
      },
      {
        source: "/api/v1.0.0/todo/doneDelete",
        destination: `${baseApiUrl}/api/v1.0.0/todo/doneDelete`,
      },
    ];
  },
};

module.exports = nextConfig;
