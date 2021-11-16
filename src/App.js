// 库
import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import zhCN from 'antd/lib/locale/zh_CN';
import { Provider } from "react-redux";
import store from "@/store/index";
import { ConfigProvider } from 'antd'

// 路由
import routes from "@/router";

// 组件
import Header from "@/components/app-header";
import Footer from "@/components/app-footer";
import Player from '@/pages/player/app-play-bar'

export default memo(function App() {
  return (
      <Provider store={store}>
        <ConfigProvider locale={zhCN}>
        <BrowserRouter>
          <Header />
          {renderRoutes(routes)}
          <Footer />
          <Player/>
        </BrowserRouter>
        </ConfigProvider>
      </Provider>
  );
});
