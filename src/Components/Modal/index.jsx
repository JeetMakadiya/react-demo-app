import React from "react";
import UserImg from "../../Images/user.png";

const Modal = ({ title, isModalOpen, handleCancel }) => {
  //   const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      {isModalOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto md:w-[536px] w-[300px]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="relative flex justify-center items-center border-b border-solid bg-[#2F80ED] border-slate-200 rounded-t-[20px] h-[64px]">
                  <h3 className="text-2xl text-white font-medium">{title}</h3>
                  <button
                    className="absolute top-2 right-4 p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-medium outline-none focus:outline-none"
                    onClick={() => handleCancel()}
                  >
                    <span className="text-white text-2xl">×</span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-[34px] pb-[34px] flex-auto bg-white rounded-b-[20px]">
                  <div className="flex items-center border-b border-b-[#E0E0E0] pb-4 pt-4">
                    <img
                      src={UserImg}
                      className="w-[46px] h-[46px]"
                      alt=""
                      srcset=""
                    />
                    <span className="ml-5 font-medium text-sm">
                      {"Bessie Cooper"}
                    </span>
                  </div>
                  <div className="flex items-center border-b border-b-[#E0E0E0] pb-4 pt-4">
                    <img
                      src={UserImg}
                      className="w-[46px] h-[46px]"
                      alt=""
                      srcset=""
                    />
                    <span className="ml-5 font-medium text-sm">
                      {"Bessie Cooper"}
                    </span>
                  </div>{" "}
                  <div className="flex items-center border-b border-b-[#E0E0E0] pb-4 pt-4">
                    <img
                      src={UserImg}
                      className="w-[46px] h-[46px]"
                      alt=""
                      srcset=""
                    />
                    <span className="ml-5 font-medium text-sm">
                      {"Bessie Cooper"}
                    </span>
                  </div>{" "}
                  <div className="flex items-center border-b border-b-[#E0E0E0] pb-4 pt-4">
                    <img
                      src={UserImg}
                      className="w-[46px] h-[46px]"
                      alt=""
                      srcset=""
                    />
                    <span className="ml-5 font-medium text-sm">
                      {"Bessie Cooper"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
