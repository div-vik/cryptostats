import './App.css';
import Navbar from './components/Navbar/Navbar';
import TopSection from './components/TopSection/TopSection';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Coins from './components/Coins/Coins';

function App() {
  const [coins, setCoins] = useState([]);

  const [search, setSearch] = useState("");

  const apiUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    axios.get(apiUrl)
    .then(res => {
      setCoins(res.data);
    })
    .catch (error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="coin-app">
      <Navbar/>
      <TopSection 
        onHandlechange={handleChange}
      />
      {filteredCoins.map(coin => {
        return (
          <Coins
            key={coin.id}
            rank={coin.market_cap_rank}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            volume={coin.total_volume}
            priceChange={coin.price_change_percentage_24h}
            mktcap={coin.market_cap}
          />
          )
        })}
    </div>
  );
}

export default App;