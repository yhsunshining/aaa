// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Star, Search } from 'lucide-react';

import { StockCard } from '@/components/StockCard';
import { TabBar } from '@/components/TabBar';
export default function HomePage(props) {
  const {
    $w
  } = props;

  // 模拟数据
  const stocks = [{
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
  }, {
    id: '3',
    name: '特斯拉 (TSLA)',
    industry: '新能源汽车',
    price: '$ 250.75',
    change: -0.8
  }];
  const navigateTo = (pageId, params) => {
    $w.utils.navigateTo({
      pageId,
      params
    });
  };
  return <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* 顶部导航 */}
      <header className="bg-blue-600 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">股票推荐</h1>
          <div className="flex space-x-4">
            <button onClick={() => navigateTo('search')}>
              <Search className="text-white" size={20} />
            </button>
            <button onClick={() => navigateTo('favorites')}>
              <Star className="text-white" size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="p-4 pb-16">
        <h2 className="text-lg font-semibold mb-4">今日推荐</h2>
        
        {/* 股票列表 */}
        <div className="space-y-3">
          {stocks.map(stock => <StockCard key={stock.id} stock={stock} onClick={() => navigateTo('detail', {
          id: stock.id
        })} />)}
        </div>
      </main>

      {/* 底部导航 */}
      <TabBar activeTab="home" onTabChange={navigateTo} />
    </div>;
}