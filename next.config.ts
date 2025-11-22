import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental : {
    cacheComponents : true,
  },
  images:{
    remotePatterns:[
      {
        protocol : "https",
        hostname : "res.cloudinary.com",
      }
    ]
  }
};

export default nextConfig;
