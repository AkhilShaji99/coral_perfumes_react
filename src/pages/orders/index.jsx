import React, { useState } from "react";
import BreadCrumps from "../common/BreadCrumps";
import MyAccountSidebar from "../common/MyAccountSidebar";
import OrderDatas from "./blocks/OrderDatas";
import { useEffect } from "react";
import request from "../../utils/request";
import getUserToken from "../../utils/userToken";
import OrderCancelModal from "./blocks/OrderCancelModal";
function Index() {
  const [ongoingOrders, setOnGoingOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [showOrderCancelFlag, setShowOrderCancelFlag] = useState(false);
  const [modalType, setModalType] = useState("cancel");
  const [modalData, setModalData] = useState(null);
  const  [refetch, setRefetch] = useState(false)

  

  

  useEffect(() => {
    getOrders();
  }, []);
  useEffect(() => {
    if(refetch){
      getOrders();
    }
  }, [refetch]);
  const getOrders = async () => {
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("token", getUserToken());
      const response = await request.post("get_user_orders/", bodyFormData);
      if (response?.data) {
        setOnGoingOrders(response?.data?.data?.ongoing_orders);
        setCompletedOrders(response?.data?.data?.completed_orders);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <section>
      <div className="container-fluid">
        <BreadCrumps />
        <OrderCancelModal setRefetch={setRefetch} modalData={modalData} showOrderCancelFlag={showOrderCancelFlag} setShowOrderCancelFlag={setShowOrderCancelFlag} modalType={modalType} setModalType={setModalType}/>
        <div className="row">
          <MyAccountSidebar />
          <div className="col-lg-9 col-md-9 col-12">
            <div className="py-6 p-md-6 p-lg-10">
              <h2 className="mb-6 text-center my-profile-heading">My Orders</h2>
              {ongoingOrders?.map((ongoingOrder, index) => {
                return (
                  <div key={index}>
                    <OrderDatas setModalData={setModalData} showOrderCancelFlag={showOrderCancelFlag} setShowOrderCancelFlag={setShowOrderCancelFlag} modalType={modalType} setModalType={setModalType} ongoingOrder={ongoingOrder} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
