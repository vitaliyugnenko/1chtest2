import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { polygon, arbitrum, base, mainnet, optimism, bsc } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "RainbowKit demo",
  projectId: "90f079dc357f3b0a2500be0388582698",
  chains: [polygon, mainnet, optimism, arbitrum, base, bsc],
});

/** */
