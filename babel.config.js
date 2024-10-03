module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['> 0.25%, not dead'], // Specify the browsers you want to support
        },
      },
    ],
    '@babel/preset-react'
  ],
  plugins: [
    // Example plugin: transform-class-properties
    '@babel/plugin-proposal-class-properties'
  ]
};
