import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  /*
    - if you using a package that exports hundreds of modules (such as icon and utility libraries), you can optimize how those imports are resolved using the optimizePackageImports option in your next.cofig.js file. This option will only load the modules you actually use, while still giving you the convenience of writing import the statement with many named exports.
    - NextJs also optmize some libraries automatically, thus they do not need to be included in the optimizePackageImports list. see the full list of supported packages.
    - https://nextjs.org/docs/app/api-reference/config/next-config-js/optimizePackageImports
  */
  experimental: {
    optimizePackageImports: []
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  }
};

const bundleAnalyzer = withBundleAnalyzer({
  enabled: true,
});

export default bundleAnalyzer(nextConfig);
