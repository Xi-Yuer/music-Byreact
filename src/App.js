// 库
import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@/store/index";
// 路由
import routes from "@/router";

// 组件
import Header from "@/components/app-header";
import Footer from "@/components/app-footer";

export default memo(function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        {renderRoutes(routes)}
        <Footer />
      </BrowserRouter>
    </Provider>
  );
});
