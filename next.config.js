const createNextIntlPlugin = require("next-intl/plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withNextIntl = createNextIntlPlugin("./lib/i18n/request.ts");

module.exports = withNextIntl(nextConfig);
