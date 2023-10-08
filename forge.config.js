module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ["darwin", "linux"],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        bin: 'actlab',
        maintainer: 'Beshoyhanna',
        homepage: 'https://actlab.ai',
      },
    }
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
