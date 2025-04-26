import React from 'react';
import { useSelector } from 'react-redux';
import ChartPlaceholder from '../../Components/ChartPlaceholder';

const CryptoTable = () => {
  const assets = useSelector(state => state.crypto.assets);

  return (
    <div className="overflow-x-auto p-4 font-roboto">
      <table className="min-w-full text-sm text-left">
        <thead>
          <tr className="bg-gray-200">
            {['#', 'Logo', 'Name', 'Symbol', 'Price', '1h %', '24h %', '7d %', 'Market Cap', '24h Volume', 'Circulating Supply', 'Max Supply', '7D Chart'].map((head, idx) => (
              <th key={idx} className="p-2">{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, i) => (
            <tr key={asset.id} className="border-t">
              <td className="p-2">{i + 1}</td>
              <td className="p-2"><img src={`${asset.logo}`} alt={asset.symbol} width={24} /></td>
              <td className="p-2">{asset.name}</td>
              <td className="p-2">{asset.symbol}</td>
              <td className="p-2">${asset.price.toFixed(2)}</td>
              <td className={`p-2 ${asset.change1h >= 0 ? 'text-green-500' : 'text-red-500'}`}>{asset.change1h}%</td>
              <td className={`p-2 ${asset.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>{asset.change24h}%</td>
              <td className={`p-2 ${asset.change7d >= 0 ? 'text-green-500' : 'text-red-500'}`}>{asset.change7d}%</td>
              <td className="p-2">${asset.marketCap.toLocaleString()}</td>
              <td className="p-2">${asset.volume24h.toLocaleString()}</td>
              <td className="p-2">{asset.supply.toLocaleString()}</td>
              <td className="p-2">{asset.maxSupply.toLocaleString()}</td>
              <td className="p-2"><ChartPlaceholder /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
