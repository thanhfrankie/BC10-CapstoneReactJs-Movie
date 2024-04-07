import React from "react";
import { Tabs } from "antd";
import "./Xemthem.css";
import FormDienAnh from "./FormXemThem/FormDienAnh";
import FormReivew from "./FormXemThem/FormReivew";
import FormKm from "./FormXemThem/FormKm";


const { TabPane } = Tabs;

const Xemthem = () => {
  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab={<span className="tabText ">Điện ảnh 24h</span>} key="1">
        <FormDienAnh/>
      </TabPane>
      <TabPane tab={<span className="tabText">Review</span>} key="2">
        <FormReivew />
      </TabPane>
      <TabPane tab={<span className="tabText">Khuyến mãi</span>} key="3">
        <FormKm />
      </TabPane>
    </Tabs>
  );
};

export default Xemthem;
