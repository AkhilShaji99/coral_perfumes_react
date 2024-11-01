import React, { useState } from "react";
import BreadCrumps from "../common/BreadCrumps";
import MyAccountSidebar from "../common/MyAccountSidebar";
import OrderDatas from "./blocks/OrderDatas";
import { useEffect } from "react";
import request from "../../utils/request";
import getUserToken from "../../utils/userToken";
import OrderCancelModal from "./blocks/OrderCancelModal";
import OrdersEmpty from "../alert_pages/OrdersEmpty";

function Index() {
  const [ongoingOrders, setOnGoingOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [activeOrders, setActiveOrders] = useState([]);
  const [showOrderCancelFlag, setShowOrderCancelFlag] = useState(false);
  const [modalType, setModalType] = useState("cancel");
  const [modalData, setModalData] = useState(null);
  const [buttonActive, setButtonActive] = useState(1);
  const [status, seStatus] = useState(false);
  const [errorMessages, setErrorMessages] = useState(null);
  const [resetOrderProgress, setResetOrderProgress] = useState(false);
  const [breadCrumbDatas, setBreadCrumbDatas] = useState([]);

  // const [ordeStatus, setOrderStatus] = useState(false);

  useEffect(() => {
    getOrders();
  }, []);

  const refetchApi = () => {
    getOrders();
  };

  const getOrders = async () => {
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("token", getUserToken());
      const response = await request.post("get_user_orders/", bodyFormData);
      if (response?.data) {
        setBreadCrumbDatas(response?.data?.bread_crumb_data)
        if (buttonActive === 1) {
          setActiveOrders(response?.data?.data?.ongoing_orders);
        } else {
          setActiveOrders(response?.data?.data?.completed_orders);
        }
        setErrorMessages(response?.data?.message);
        setOnGoingOrders(response?.data?.data?.ongoing_orders);
        setCompletedOrders(response?.data?.data?.completed_orders);
        seStatus(!status);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (buttonActive === 1) {
      setActiveOrders(ongoingOrders);
    } else {
      setActiveOrders(completedOrders);
    }
    setResetOrderProgress(!resetOrderProgress);
  }, [buttonActive]);

  return (
    <section>
      <div className="container-fluid">
        <BreadCrumps breadCrumbDatas={breadCrumbDatas}/>
        <OrderCancelModal
          refetchApi={refetchApi}
          modalData={modalData}
          showOrderCancelFlag={showOrderCancelFlag}
          setShowOrderCancelFlag={setShowOrderCancelFlag}
          modalType={modalType}
          setModalType={setModalType}
        />
        <div className="row">
          <MyAccountSidebar />
          <div className="col-lg-9 col-md-9 col-12 prd-0">
            <div className="py-6 p-md-6 p-lg-10">
              <h2 className="mb-6 text-center my-profile-heading order-btn">My Orders</h2>
              {activeOrders === undefined ? (
                <OrdersEmpty orderEmptyMessages={errorMessages} />
              ) : (
                <>
                  <div
                    class="btn-group mb-4 w-100"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      class={`btn-ongoing
                        ${
                          buttonActive === 1
                            ? ` order-btn-active`
                            : "order-btn-inactive"
                        }`}
                      onClick={() => {
                        setButtonActive(1);
                      }}
                    >
                      ONGOING ORDERS
                    </button>
                    <button
                      type="button"
                      class={`btn-complete
                        ${
                          buttonActive === 2
                            ? `order-btn-active`
                            : "order-btn-inactive"
                        }`}
                      onClick={() => {
                        setButtonActive(2);
                      }}
                    >
                      COMPLETED
                    </button>
                  </div>
                  {activeOrders.data && activeOrders.data.length <= 0 ? (
                    <OrdersEmpty orderEmptyMessages={activeOrders?.message} />
                  ) : (
                    <>
                      {activeOrders?.map((ongoingOrder, index) => {
                        return (
                          <div key={index}>
                            <OrderDatas
                              setModalData={setModalData}
                              showOrderCancelFlag={showOrderCancelFlag}
                              setShowOrderCancelFlag={setShowOrderCancelFlag}
                              modalType={modalType}
                              setModalType={setModalType}
                              ongoingOrder={ongoingOrder}
                              resetOrderProgress={resetOrderProgress}
                            />
                          </div>
                        );
                      })}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
