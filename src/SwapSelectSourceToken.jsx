import { useState, useEffect } from "react";
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
import ethIcon from "./assets/eth.webp";
import backIcon from "./assets/back.png";
import pepeIcon from "./assets/pepe.webp";
import shibaIcon from "./assets/shib.webp";
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

function SwapSelectSourceToken({ SwapSelect, setYouPayToken }) {
  const setSwapSelect = () => {
    SwapSelect(false);
  };

  const setSelectedToken = (token) => {
    setYouPayToken(token);
  };

  const handleTokenSelect = (token) => {
    setYouPayToken(token); // Установка выбранного токена
    SwapSelect(false); // Закрытие окна выбора токенов
  };

  return (
    <div className="page-content">
      <div className="swap-container-select">
        <div className="swap-form-header">
          <div className="swap-form-header-icon" onClick={setSwapSelect}>
            <img src={backIcon} />
          </div>
          <div className="swap-form-header-title">Select a token</div>
        </div>
        <div className="widget-input">
          <svg
            id="search"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19C12.775 18.9996 14.4988 18.4054 15.897 17.312L19.586 21.001C19.9765 21.3915 20.6095 21.3915 21 21.001C21.3905 20.6105 21.3905 19.9775 21 19.587L17.311 15.898C18.405 14.4997 18.9996 12.7754 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19ZM11 5C14.309 5 17 7.691 17 11C17 14.309 14.309 17 11 17C7.691 17 5 14.309 5 11C5 7.691 7.691 5 11 5Z"
              fill="currentColor"
            ></path>
          </svg>
          <input
            type="text"
            placeholder="Search by name or paste address"
            autoComplete="off"
          />
        </div>

        <div className="favourite-tokens-container">
          <div onClick={() => handleTokenSelect("MATIC")}>
            <img src={maticIcon} />
            <span>Matic</span>
          </div>
          <div onClick={() => handleTokenSelect("WETH")}>
            <img src={wethIcon} />
            <span>WETH</span>
          </div>
          <div onClick={() => handleTokenSelect("DAI")}>
            <img src={daiIcon} />
            <span>DAI</span>
          </div>
          <div onClick={() => handleTokenSelect("USDC")}>
            <img src={usdcIcon} />
            <span>USDC</span>
          </div>

          <div onClick={() => handleTokenSelect("USDT")}>
            <img src={usdtIcon} />
            <span>USDT</span>
          </div>
          <div onClick={() => handleTokenSelect("WBTC")}>
            <img src={wbtcIcon} />
            <span>WBTC</span>
          </div>
          <div onClick={() => handleTokenSelect("DE")}>
            <img src={deIcon} />
            <span>DE</span>
          </div>
        </div>

        <div className="tokens-list-wrapper">
          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={usdtIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("USDT")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>Tether USD</div>
                <div>0 USDT</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>
          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={usdcIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("USDC")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>USD Coin</div>
                <div>0 USDC</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>
          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={wbtcIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("WBTC")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>Wrapped BTC</div>
                <div>0 WBTC</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>
          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={linkIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("LINK")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>ChainLink Token</div>
                <div>0 LINK</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>
          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={uniIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("UNI")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>Uniswap</div>
                <div>0 UNI</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>
          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={daiIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("DAI")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>(PoS Dai Stablecoin)</div>
                <div>0 DAI</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>
          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={maticIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("MATIC")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>MATIC</div>
                <div>0 MATIC</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>
          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={grtIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("GRT")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>Graph Token (PoS)</div>
                <div>0 GRT</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>
          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={ldoIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("LDO")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>Lido DAO Token (PoS)</div>
                <div>0 LDO</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>

          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={ethIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("AAVE")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>Ether</div>
                <div>0 ETH</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>
          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={pepeIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("PEPE")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>Pepe</div>
                <div>0 PEPE</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>
          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={shibaIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("SHIB")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>SHIBA INU</div>
                <div>0 SHIB</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>

          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={foxIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("FOX")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>FOX (PoS)</div>
                <div>0 FOX</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>

          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={fraxIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("FRAX")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>Frax</div>
                <div>0 FRAX</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>

          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={telIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("TEL")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>Telcoin</div>
                <div>0 TEL</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>
          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={superFarmIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("SUPER")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>SuperFarm</div>
                <div>0 SUPER</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>
          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={compoundIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("COMP")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>Compound</div>
                <div>0 COMP</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>
          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={layerZeroIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("ZRO")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>LayerZero</div>
                <div>0 ZRO</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>
          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={omIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("OM")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>OM</div>
                <div>0 OM</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>
          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={requestIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("REQ")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>Request</div>
                <div>0 REQ</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>
          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={stargateTokenIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("STG")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>StargateToken</div>
                <div>0 STG</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>
          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={routeIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("ROUTE")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>Route</div>
                <div>0 ROUTE</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>
          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={affynIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("FYN")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>Affyn</div>
                <div>0 FYN</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>
          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={everRiseIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("RISE")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>EverRise</div>
                <div>0 RISE</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>
          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={towerIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("TOWER")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>TOWER</div>
                <div>0 TOWER</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>
          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={wombatIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("WOMBAT")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>Wombat</div>
                <div>0 WOMBAT</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>
          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={elkIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("ELK")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>Elk</div>
                <div>0 ELK</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>
          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={monavaleIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("MONA")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>Monavale</div>
                <div>0 MONA</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>
          <div className="tokens-list-wrapper-item">
            <div className="tokens-list-wrapper-item-icon">
              <img src={polylasticIcon} />
            </div>
            <div
              className="tokens-list-wrapper-item-name"
              onClick={() => handleTokenSelect("POLX")}
            >
              <div className="tokens-list-wrapper-item-name-amount">
                <div>Polylastic</div>
                <div>0 POLX</div>
              </div>
              <div className="tokens-list-wrapper-item-name-amount-usd">$0</div>
            </div>
            <div className="tokens-list-wrapper-item-pin">
              <img src={pinIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwapSelectSourceToken;
