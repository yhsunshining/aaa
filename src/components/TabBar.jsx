// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Home, Star, Search } from 'lucide-react';

export function TabBar({
  activeTab,
  onTabChange
}) {
  const tabs = [{
    id: 'home',
    icon: Home,
    label: '首页'
  }, {
    id: 'favorites',
    icon: Star,
    label: '收藏'
  }, {
    id: 'search',
    icon: Search,
    label: '搜索'
  }];
  return <nav className="fixed bottom-0 w-full max-w-md bg-white border-t border-gray-200 flex justify-around p-3">
      {tabs.map(tab => <button key={tab.id} className={`flex flex-col items-center ${activeTab === tab.id ? 'text-blue-600' : 'text-gray-500'}`} onClick={() => onTabChange(tab.id)}>
          <tab.icon size={20} />
          <span className="text-xs mt-1">{tab.label}</span>
        </button>)}
    </nav>;
}