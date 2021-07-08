module.exports = {
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/YtZWn5pz9c",
        permanent: true,
      },
      {
        source: "/zoom",
        destination: "https://neohacks.org",
        permanent: true,
      },
    ];
  },
};
