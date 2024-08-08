import "@rainbow-me/rainbowkit/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import App from "./App.jsx";
import "./index.css";
import { trustWallet } from "@rainbow-me/rainbowkit/wallets";
import { uniswapWallet } from "@rainbow-me/rainbowkit/wallets";
import { phantomWallet } from "@rainbow-me/rainbowkit/wallets";
import { metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";

import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { http, createConfig } from "wagmi";

import {
  polygon,
  arbitrum,
  base,
  mainnet,
  optimism,
  bsc,
  bscTestnet,
} from "wagmi/chains";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Suggested",
      wallets: [trustWallet, uniswapWallet, phantomWallet, metaMaskWallet],
    },
  ],
  { appName: "RainbowKit App", projectId: "90f079dc357f3b0a2500be0388582698" }
);

const config = createConfig({
  connectors,
  appName: "RainbowKit demo",
  projectId: "90f079dc357f3b0a2500be0388582698",
  chains: [polygon, mainnet, optimism, arbitrum, base, bsc, bscTestnet],
  transports: {
    [polygon.id]: http(),
    [mainnet.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
    [bsc.id]: http(),
    [bscTestnet.id]: http(),
  },
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            color: "green",
            fontWeight: 400,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
          })}
          locale="en"
        >
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
