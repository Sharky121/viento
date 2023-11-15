/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack: (config, options) => {
      config.externals = {
        ymaps3: 'ymaps3'
      }

      return config;
    },
  }

module.exports = nextConfig
