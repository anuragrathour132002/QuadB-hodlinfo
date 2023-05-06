import React, { useState,Component, useEffect } from 'react';
import './styles.css';
import {CircularProgressbar} from 'react-circular-progressbar';

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
export const Header = (props) => {
    const [dropdownOpenCurrency, setDropdownOpenCurrency] = useState(false);
    const [dropdownOpenAsset, setDropdownOpenAsset] = useState(false);
    const [currency, setCurrency] = useState("INR");
    const [asset, setAsset] = useState("BTC");
  const toggleCurrency = () => setDropdownOpenCurrency(prevState => !prevState);
  const toggleAsset = () => setDropdownOpenAsset(prevState => !prevState);
    return (
        <div style={{padding: "20px 30px 0px"}}>
            <div class=" align-items-center justify-content-sm-center row">
                <div class="text-center-sm col-12 col-sm-7 col-md-5 col-lg-4">
                    <a href="/">
                        <div class="padding-none text-center-xs col-12 col-sm-12 col-md-11 col-lg-11">
                            <img src="hodlinfo_logo.png" class="fiat-logo" style={{padding: "10px"}} />
                        </div>
                    </a>
                    <p class="col-12 text-center-xs" style={{"font-family": "Oswald, sans-serif", "margin-top": "-18px", opacity: "0.8", "font-size": "18px", color: "gray"}}>Powered By <a class="footer-text-link" rel="nofollow" target="_blank" href="https://www.finstreet.in/" style={{color: "rgb(61, 198, 193)"}}> Finstreet </a>
                    </p>
                </div>
                <div class="text-center padding-none col-12 col-sm-12 col-md-2 col-lg-4">
<div class="btn-group">
 <ButtonDropdown isOpen={dropdownOpenCurrency} toggle={toggleCurrency} >
      <DropdownToggle caret className={"header-button"}>
          {currency}
      </DropdownToggle>
      <DropdownMenu >
        <DropdownItem value="INR" onClick={(e) => setCurrency(e.target.value)}>INR</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
</div>

<div class="btn-group">
<ButtonDropdown isOpen={dropdownOpenAsset} toggle={toggleAsset} >
   <DropdownToggle caret className={"header-button"}>
     {asset}
   </DropdownToggle>
   <DropdownMenu>

        <DropdownItem value="BTC" onClick={(e) => setAsset(e.target.value)}>BTC</DropdownItem>
        <DropdownItem value="ETH" onClick={(e) => setAsset(e.target.value)}>ETH</DropdownItem>
        <DropdownItem value="USDT" onClick={(e) => setAsset(e.target.value)}>USDT</DropdownItem>
        <DropdownItem value="XRP" onClick={(e) => setAsset(e.target.value)}>XRP</DropdownItem>
        <DropdownItem value="TRX" onClick={(e) => setAsset(e.target.value)}>TRX</DropdownItem>
        <DropdownItem value="DASH" onClick={(e) => setAsset(e.target.value)}>DASH</DropdownItem>
        <DropdownItem value="ZEC" onClick={(e) => setAsset(e.target.value)}>ZEC</DropdownItem>
        <DropdownItem value="ZEC" onClick={(e) => setAsset(e.target.value)}>XEM</DropdownItem>
        <DropdownItem value="IOST" onClick={(e) => setAsset(e.target.value)}>IOST</DropdownItem>
        <DropdownItem value="WIN" onClick={(e) => setAsset(e.target.value)}>WIN</DropdownItem>
        <DropdownItem value="BTT" onClick={(e) => setAsset(e.target.value)}>BTT</DropdownItem>
        <DropdownItem value="WRX" onClick={(e) => setAsset(e.target.value)}>WRX</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
</div>
<div class="btn-group">
                    <a target="_blank" href="" type="button" aria-haspopup="true" aria-expanded="false" class="header-button btn btn-secondary">BUY {asset}</a>
</div>
                </div>
                <div class="right-header col-12 col-sm-12 col-md-5 col-lg-4">
                    <div class="d-inline-flex flex-wrap align-items-center justify-content-center">
                                <div className="progress-bar-wrapper">
                                    <CircularProgressbar  value={parseFloat(props.countDownTimer * 100 / 60.0)} text={`${props.countDownTimer}`}/>
                                </div>
                        <a class="color-white" href="/connect/telegram">
                            <div class="d-flex telegram-logo-text header-telegram-button btn align-items-center pointer color-white">
                                <div class="d-inline-block">
                                    <img src="telegram.png" class="telegram-logo" /></div>
                                <div class="text-nowrap d-inline-block color-white">Connect Telegram</div>
                            </div>
                        </a>
                            <div className="margin-10 d-inline-block">
                                <label className="switch">
                                    <input type="checkbox" checked={!props.isLightTheme} onChange={props.onThemeButtonClick} />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    )
};