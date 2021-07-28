module.exports = {
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/xDTNE4yKqu",
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
