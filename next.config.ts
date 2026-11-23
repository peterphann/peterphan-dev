import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets the dev server accept requests through the WSL IP, which is the
  // workaround when Windows' localhost forwarding to WSL hangs. The IP can
  // change after `wsl --shutdown`; check it with `hostname -I`.
  allowedDevOrigins: ["172.18.217.234"],
  experimental: {
    // The on-disk dev cache kept serving stale components and CSS after
    // edits under WSL; rebuilding from scratch on start avoids that.
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
