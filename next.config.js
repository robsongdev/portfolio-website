/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    domains: [],
    unoptimized: true, // Para compatibilidade com assets estáticos
  },
  // Configuração para assets estáticos
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  trailingSlash: false,
  // Configuração para CSS
  compiler: {
    // Remove console.log em produção
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]',
      },
    });
    return config;
  },
}

module.exports = nextConfig
