module.exports = {
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/xDTNE4yKqu",
        permanent: true,
      },
      {
        source: "/register",
        destination: "https://airtable.com/shrhuP6sBAWskOiqT",
        permanent: false,
      },
    ];
  },
};
