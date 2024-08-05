import JavaScriptObfuscator from 'webpack-obfuscator';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new JavaScriptObfuscator(
          {
            rotateStringArray: true,
            selfDefending: true,
          },
          ['excluded_bundle_name.js'] // Adjust the exclusion pattern as needed
        )
      );
    }
    return config;
  },
};

export default nextConfig;
