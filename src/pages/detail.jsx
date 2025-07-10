// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { ArrowLeft, Share2, Star } from 'lucide-react';

import { TabBar } from '@/components/TabBar';
export default function DetailPage(props) {
  const {
    $w
  } = props;
  const [isFavorite, setIsFavorite] = useState(false);

  // 模拟数据
  const stock = {
    id: '1',
    name: '腾讯控股',
    code: '0700.HK',
    price: 'HK$ 320.50',
    change: 2.5,
    changeAmount: '+HK$ 7.80',
    description: '腾讯控股有限公司是一家主要提供增值服务及网络广告服务的投资控股公司。主要业务包括社交网络、数字内容、在线广告、金融科技及云服务等。',
    metrics: [{
      name: '市盈率',
      value: '28.5'
    }, {
      name: '市净率',
      value: '5.2'
    }, {
      name: '股息率',
      value: '0.5%'
    }, {
      name: '市值',
      value: '3.2万亿'
    }]
  };
  const navigateBack = () => {
    $w.utils.navigateBack();
  };
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* 顶部导航 */}
      <header className="bg-blue-600 text-white p-4">
        <div className="flex justify-between items-center">
          <button onClick={navigateBack}>
            <ArrowLeft className="text-white" size={20} />
          </button>
          <h1 className="text-xl font-bold">股票详情</h1>
          <button>
            <Share2 className="text-white" size={20} />
          </button>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="p-4 pb-16">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h2 className="text-2xl font-bold">{stock.name}</h2>
              <p className="text-gray-500">{stock.code}</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold">{stock.price}</p>
              <p className={`text-sm ${stock.change > 0 ? 'text-red-500' : 'text-green-500'}`}>
                {stock.change > 0 ? '+' : ''}{stock.change}% ({stock.changeAmount})
              </p>
            </div>
          </div>
          
          <div className="h-48 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg my-4 flex items-center justify-center">
            <p className="text-gray-500">K线图加载中...</p>
          </div>
          
          <div className="flex justify-between mb-4">
            <button onClick={toggleFavorite} className={`${isFavorite ? 'bg-yellow-100 text-yellow-600' : 'bg-blue-100 text-blue-600'} px-4 py-2 rounded-full flex items-center`}>
              <Star className="mr-2" size={16} fill={isFavorite ? 'currentColor' : 'none'} />
              <span>{isFavorite ? '已收藏' : '收藏'}</span>
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
              买入
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h3 className="font-bold mb-3">公司概况</h3>
          <p className="text-gray-700 mb-2">{stock.description}</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-bold mb-3">关键指标</h3>
          <div className="grid grid-cols-2 gap-4">
            {stock.metrics.map(metric => <div key={metric.name}>
                <p className="text-gray-500 text-sm">{metric.name}</p>
                <p className="font-bold">{metric.value}</p>
              </div>)}
          </div>
        </div>
      </main>

      {/* 底部导航 */}
      <TabBar activeTab="" onTabChange={$w.utils.navigateTo} />
    </div>;
}