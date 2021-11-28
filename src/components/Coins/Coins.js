import React from 'react'
import "./Coins.css"

const Coins = ({rank, name, image, symbol, price, volume, priceChange, mktcap}) => {
    var d = new Date();
    d.getHours(); 
    d.getMinutes();
    d.getSeconds();

    return (
        <div className="coin-container">
            <div className="coin-row">
                    <div className="rank">
                        <p className="rank1"># {rank}</p>
                    </div>
                    <div className="coin">
                        <img className="coin-img" src={image} alt="crypto" />
                        <p className="coin-name">{name}</p>
                        <p className="coin-symbol">{symbol.toUpperCase()}</p>
                    </div>
                    <div className="price">
                        <p className="coin-price">₹{price}</p>
                    </div>
                    <div className="volume">
                        <p className="coin-volume">₹{volume}</p>
                    </div>
                    <div className="price-change">
                        {priceChange < 0 ? (
                            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                        ) : (
                            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
                        )}
                    </div>
                    <div className="mkt-cap">
                        <p className="coin-market-cap">₹{mktcap}</p>
                    </div>
            </div>
        </div>
    )
}

export default Coins
