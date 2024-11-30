/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@radix-ui/react-dialog',
    'react-remove-scroll',
    'vaul'
  ],
  webpack: (config) => {
    config.resolve.extensionAlias = {
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
    };
    return config;
  },
};

module.exports = nextConfig;