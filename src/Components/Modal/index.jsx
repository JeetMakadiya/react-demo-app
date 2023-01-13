import React from "react";

const Modal = ({ title, isModalOpen, handleCancel, userList }) => {
  return (
    <>
      {isModalOpen ? (
        <>
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 outline-none focus:outline-none">
            <div className="relative w-auto mx-auto md:w-[536px] w-[300px]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none h-full">
                {/*header*/}
                <div className="relative flex justify-center items-center border-b border-solid bg-[#2F80ED] border-slate-200 rounded-t-[20px] py-4">
                  <h3 className="text-2xl text-white font-medium">{title}</h3>
                  <button
                    className="absolute top-2 right-4 p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-medium outline-none focus:outline-none"
                    onClick={() => handleCancel()}
                  >
                    <span className="text-white text-2xl">×</span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-[34px] flex-auto bg-white rounded-b-[20px] overflow-y-auto">
                  {userList && !!userList.length ? (
                    <>
                      {userList.map((item) => (
                        <div className="flex items-center border-b border-b-[#E0E0E0] pb-4 pt-4">
                          <img
                            src={item.userImage}
                            className="w-[46px] h-[46px] rounded-full"
                          />
                          <span className="ml-5 font-medium text-sm">
                            {item.userName}
                          </span>
                        </div>
                      ))}
                    </>
                  ) : (
                    <div className="text-lg flex justify-center py-10 opacity-30">
                      No Likes
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className="opacity-80 fixed inset-0 z-40 bg-black"
            onClick={() => handleCancel()}
          ></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
