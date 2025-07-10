// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { ChevronRight } from 'lucide-react';

export function StockCard({
  stock,
  onClick
}) {
  return <div className="bg-white p-4 rounded-lg shadow transition duration-300 cursor-pointer hover:shadow-md" onClick={onClick}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold">{stock.name}</h3>
          <p className="text-gray-500 text-sm">{stock.industry}</p>
        </div>
        <div className="flex items-center">
          <div className="text-right mr-2">
            <p className="font-bold">{stock.price}</p>
            <p className={`text-sm ${stock.change > 0 ? 'text-red-500' : 'text-green-500'}`}>
              {stock.change > 0 ? '+' : ''}{stock.change}%
            </p>
          </div>
          <ChevronRight className="text-gray-400" size={20} />
        </div>
      </div>
    </div>;
}