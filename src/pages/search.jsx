// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { ArrowLeft, Search as SearchIcon } from 'lucide-react';

import { StockCard } from '@/components/StockCard';
import { TabBar } from '@/components/TabBar';
export default function SearchPage(props) {
  const {
    $w
  } = props;
  const [query, setQuery] = useState('');

  // 模拟数据
  const hotSearches = ['腾讯控股', '贵州茅台', '宁德时代', '美团', '阿里巴巴'];
  const searchResults = [{
    id: '1',
    name: '腾讯控股 (0700.HK)',
    industry: '互联网科技',
    price: 'HK$ 320.50',
    change: 2.5
  }, {
    id: '2',
    name: '贵州茅台 (600519.SS)',
    industry: '白酒饮料',
    price: '¥ 1,850.00',
    change: 1.2
  }];
  const navigateBack = () => {
    $w.utils.navigateBack();
  };
  const navigateToDetail = id => {
    $w.utils.navigateTo({
      pageId: 'detail',
      params: {
        id
      }
    });
  };
  return <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* 顶部导航 */}
      <header className="bg-blue-600 text-white p-4">
        <div className="flex justify-between items-center">
          <button onClick={navigateBack}>
            <ArrowLeft className="text-white" size={20} />
          </button>
          <h1 className="text-xl font-bold">股票搜索</h1>
          <div></div>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="p-4 pb-16">
        {/* 搜索框 */}
        <div className="relative mb-6">
          <input type="text" placeholder="输入股票名称或代码" value={query} onChange={e => setQuery(e.target.value)} className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <SearchIcon className="absolute left-3 top-3.5 text-gray-400" size={20} />
        </div>
        
        {/* 热门搜索 */}
        {!query && <div className="mb-6">
            <h3 className="font-semibold mb-3">热门搜索</h3>
            <div className="flex flex-wrap gap-2">
              {hotSearches.map((item, index) => <button key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-gray-200" onClick={() => setQuery(item)}>
                  {item}
                </button>)}
            </div>
          </div>}
        
        {/* 搜索结果 */}
        {query && <div id="search-results">
            {searchResults.map(stock => <div key={stock.id} className="p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50" onClick={() => navigateToDetail(stock.id)}>
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium">{stock.name}</h4>
                    <p className="text-sm text-gray-500">{stock.industry}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{stock.price}</p>
                    <p className={`text-sm ${stock.change > 0 ? 'text-red-500' : 'text-green-500'}`}>
                      {stock.change > 0 ? '+' : ''}{stock.change}%
                    </p>
                  </div>
                </div>
              </div>)}
          </div>}
      </main>

      {/* 底部导航 */}
      <TabBar activeTab="search" onTabChange={$w.utils.navigateTo} />
    </div>;
}