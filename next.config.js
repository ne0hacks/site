module.exports = {
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/dnHyG499Qu",
        permanent: true,
      },
      {
        source: "/register",
        destination: "https://airtable.com/shrshwlldsgdG9GVs",
        permanent: false,
      },
    ];
  },
};
