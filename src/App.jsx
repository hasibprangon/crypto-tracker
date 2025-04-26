import React, { useEffect } from 'react';
import CryptoTable from './Features/Crypto/CryptoTable';
import { useDispatch, useSelector } from 'react-redux';
import { updateAssets } from './Features/Crypto/CryptoSlice';

function App() {
  const dispatch = useDispatch();
  const assets = useSelector(state => state.crypto.assets);

  useEffect(() => {
    const interval = setInterval(() => {
      const newAssets = assets.map(asset => ({
        ...asset,
        price: +(asset.price * (1 + (Math.random() - 0.5) / 50)).toFixed(2),
        change1h: +(Math.random() * 10 - 5).toFixed(2),
        change24h: +(Math.random() * 10 - 5).toFixed(2),
        change7d: +(Math.random() * 10 - 5).toFixed(2),
        volume24h: asset.volume24h + Math.floor(Math.random() * 1000000 - 500000),
      }));
      dispatch(updateAssets(newAssets));
    }, 1500);

    return () => clearInterval(interval);
  }, [assets, dispatch]);

  return (
    <div className="min-h-screen bg-white font-roboto">
      <h1 className="text-center md:text-3xl text-xl font-bold my-4">Crypto Price Tracker</h1>
      <p className='text-center md:text-lg text-base'>Track the Market. Stay Ahead.</p>
      <CryptoTable />
    </div>
  );
}

export default App;
