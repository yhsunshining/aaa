// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { ArrowLeft, Star } from 'lucide-react';

import { StockCard } from '@/components/StockCard';
import { TabBar } from '@/components/TabBar';
export default function FavoritesPage(props) {
  const {
    $w
  } = props;

  // 模拟收藏数据
  const favoriteStocks = [{
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
          <h1 className="text-xl font-bold">我的收藏</h1>
          <div></div>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="p-4 pb-16">
        <div className="space-y-3">
          {favoriteStocks.map(stock => <StockCard key={stock.id} stock={stock} onClick={() => navigateToDetail(stock.id)} />)}
        </div>
        
        {favoriteStocks.length === 0 && <div className="mt-8 text-center text-gray-500">
            <Star className="mx-auto mb-2" size={32} />
            <p>收藏更多股票，方便随时查看</p>
          </div>}
      </main>

      {/* 底部导航 */}
      <TabBar activeTab="favorites" onTabChange={$w.utils.navigateTo} />
    </div>;
}