import React from 'react';
import "./TopSection.css";

function TopSection(props) {
    return (
        <div className="top-section">
            <div className="top-section-1">
                {/* <div className="currencies"><p>Currency</p></div> */}
                <div className="search">
                    <form>
                        <input className="search-area" 
                        type="text" 
                        placeholder=" Search" 
                        onChange={props.onHandlechange}
                        />
                    </form>
                </div>
            </div>
            <div className="top-section-2">
                <div className="rank-section">
                    <p>#</p>
                    
                </div>
                <div className="coin-section">
                    <p>Coin</p>
                </div>
                <div className="price-section">
                    <p>Price</p>
                </div>
                <div className="volume-section">
                    <p>24th Volume</p>
                </div>
                <div className="price-percentage-change">
                    24th
                </div>
                <div className="mkt-cap-section">
                    <p>Mkt Cap</p>
                </div>
            </div>
        </div>
    )
}

export default TopSection;
