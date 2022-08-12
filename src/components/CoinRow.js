
import React from "react";

const CoinRow = ({ coin, index }) => {
  return (
    <div className="card">
      {/* <div className="">{index}</div> */}
      <div className="row-1">
        <div className="wrap-img"> 
            <img src={coin.image} alt={coin.name} className="coin-image"/>
        </div>
        <div className="col-data">
            <span className="name">{coin.name}</span>
            <span className="symbol">{coin.symbol}</span>
        </div>
      </div>
      <div className="price">${coin.current_price.toLocaleString()}</div>

      <div
        className={
          coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
        }>
        {coin.price_change_percentage_24h}
      </div>

      <div className="volumen">
        ${coin.total_volume.toLocaleString()}
      </div>
    </div>
  );
};

export default CoinRow;