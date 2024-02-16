import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../App.module.css";
import {
  faMapMarkerAlt,
  faArrowRightArrowLeft,
  faCalendar,
  faUser,
  faCouch,
} from "@fortawesome/free-solid-svg-icons";

const Flight = () => {
  return (
    <div>
      {/* first */}
      <div className="bg-[#fff] p-3 rounded-lg flex items-center gap-6">
        <div className="w-1/2  flex flex-col gap-3 items-center justify-center">
          <div className="w-full">
            <div className="relative right-0 bg-[#E1ECEB] rounded-2xl">
              <ul
                className="relative flex flex-wrap  p-1 list-none items-center justify-center rounded-xl bg-blue-gray-50/60"
                data-tabs="tabs"
                role="list"
              >
                <li className="z-30 flex-auto text-center">
                  <a
                    className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
                    data-tab-target=""
                    active
                    role="tab"
                    aria-selected="true"
                  >
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="w-4 h-4"
                    />
                    <span className="ml-1 text-[10px]">NEW YORK (JFK)</span>
                  </a>
                </li>
                <li className="z-30 flex-auto text-center">
                  <a
                    className="z-30 flex bg-[#425C5A] items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
                    data-tab-target=""
                    role="tab"
                    aria-selected="false"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRightArrowLeft}
                      flip="both"
                      style={{ color: "#ffffff" }}
                      className="bg-[#42565A] p-[5px] rounded-[50%] "
                    />
                  </a>
                </li>
                <li className="z-30 flex-auto text-center">
                  <a
                    className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
                    data-tab-target=""
                    role="tab"
                    aria-selected="false"
                  >
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="w-4 h-4"
                    />
                    <span className="ml-1 text-[10px]">MUMBAI (BOM)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full">
            <div className="relative right-0 bg-[#E1ECEB] rounded-2xl">
              <ul
                className="relative  flex flex-wrap py-1 px-1  list-none rounded-lg bg-blue-gray-50/60"
                data-tabs="tabs"
                role="list"
              >
                <button class=" bg-[#425C5A] hover:bg-transparent hover:text-[#425C5A] text-[10px] text-white font-bold py-2 px-4 rounded-full">
                  ONE WAY
                </button>
                <button class=" hover:bg-[#425C5A] text-[#425C5A] text-[10px] hover:text-white font-bold py-2 px-4 hover:rounded-full">
                  ROUND TRIP
                </button>
                <button class=" hover:bg-[#425C5A] text-[#425C5A] text-[10px] hover:text-white font-bold py-2 px-4 hover:rounded-full">
                  MULTI CITY
                </button>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex gap-4 ">
          <div>
            <button
              type="button"
              className="text-[#3d5654] bg-[#E1ECEB] hover:bg-[#C99C33] hover:text-[#fff] w-[120px] focus:outline-none focus:ring-4 font-medium rounded-full text-[10px] px-5 py-2.5 text-center mb-2  flex items-center"
            >
              <FontAwesomeIcon
                icon={faCalendar}
                className="mr-2"
                style={{ color: "#3d5654" }}
              />
              29 JULY 2019
            </button>
            <button
              type="button"
              className="text-[#3d5654] bg-[#E1ECEB] w-[120px] hover:bg-[#C99C33] hover:text-[#fff] focus:outline-none focus:ring-4 font-medium rounded-full text-[10px] px-5 py-2.5 text-center mb-2  flex items-center"
            >
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: "#3d5654" }}
                className="mr-2"
              />
              TRAVELLER
            </button>
          </div>
          <div>
            <button
              type="button"
              className="text-[#3d5654] bg-[#E1ECEB] w-[120px] hover:bg-[#C99C33] hover:text-[#fff] focus:outline-none focus:ring-4 font-medium rounded-full text-[10px] px-5 py-2.5 text-center mb-2  flex items-center"
            >
              <FontAwesomeIcon
                icon={faCouch}
                style={{ color: "#3d5654" }}
                className="mr-2"
              />
              FIRST CLASS
            </button>
            <button
              type="button"
              className="hover:text-[#3d5654] hover:bg-[#E1ECEB] w-[120px] bg-[#C99C33] text-[#fff] focus:outline-none focus:ring-4 font-medium rounded-full text-[10px] px-5 py-2.5 text-center mb-2"
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>

      {/* secound */}
      <div>
        {/* header */}
        <div className="flex justify-between items-center pt-4">
          <div>
            <h1>RESULT (25)</h1>
          </div>
          <div className="flex gap-5">
            <button
              type="button"
              className="text-[#3d5654] bg-[#fff] w-[120px] hover:bg-[#C99C33] hover:text-[#fff] focus:outline-none focus:ring-4 font-medium rounded-full text-[11px] px-5 py-2.5 text-center mb-2"
            >
              FILTER
            </button>
            <div>
              <select
                id="country"
                name="TICKECT OF CLASS"
                className="  w-[200px] bg-[#fff] text-[#3d5654] focus:outline-none focus:ring-4 font-medium rounded-full text-[11px] px-5 flex items-center text-center py-2.5  mb-2"
              >
                <option value="volvo">TICKECT OF CLASS</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="flex gap-5 py-5">
          {/* 1 */}
          <div className="w-[65%] border-2 ">
            <div
              className={`${styles.card} flex relative justify-between rounded-t-2xl  items-center w-full px-3 bg-white py-5 border-dashed border-b-2 border-[#E3F2F1]`}
            >
              <div>
                <img src="/emirates.svg" alt="" className="w-[4rem] h-[4rem]" />
              </div>
              <div className="flex flex-col gap-4 justify-center items-center">
                <h1 className="text-[#3d5654] font-bold text-[12px]">JFK</h1>
                <p className="text-[#3d5654] text-[10px] font-[500]">13:00</p>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <h3 className="text-[8px] font-bold text-[#3d5654] ">
                  EMIRATE
                </h3>
                <p className="text-[#C99C33] font-bold text-[9px]">11H 20M</p>
                <h5 className="text-[#3d5654] font-bold text-[10px]">
                  NON-STOP
                </h5>
              </div>
              <div className="flex flex-col gap-4 justify-center items-center">
                <h1 className="text-[#3d5654] font-bold text-[12px]">BOM</h1>
                <p className="text-[#3d5654] text-[10px] font-[500]">14:20</p>
              </div>
              <div className="flex flex-col gap-4 justify-end items-end">
                <p className="text-[#3d5654] font-bold text-[10px]">$1,572</p>
                <button
                  type="button"
                  className="hover:text-[#3d5654] hover:bg-[#E1ECEB] w-[100px] bg-[#C99C33] text-[#fff] focus:outline-none focus:ring-4 font-medium rounded-full text-[10px] px-5 py-2.5 text-center mb-2"
                >
                  BOOK NOW
                </button>
              </div>
            </div>

            {/* card 2 */}
            <div
              className={`${styles.card} flex relative justify-between items-center w-full px-3 bg-white py-5 border-dashed border-b-2 border-[#E3F2F1]`}
            >
              <div>
                <img src="/qatar.svg" alt="" className="w-16 h-16" />
              </div>
              <div className="flex flex-col gap-4 justify-center items-center">
                <h1 className="text-[#3d5654] font-bold text-[12px]">JFK</h1>
                <p className="text-[#3d5654] text-[10px] font-[500]">13:00</p>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <h3 className="text-[8px] font-bold text-[#3d5654] ">
                  EMIRATE
                </h3>
                <p className="text-[#C99C33] font-bold text-[9px]">11H 20M</p>
                <h5 className="text-[#3d5654] font-bold text-[10px]">
                  NON-STOP
                </h5>
              </div>
              <div className="flex flex-col gap-4 justify-center items-center">
                <h1 className="text-[#3d5654] font-bold text-[12px]">BOM</h1>
                <p className="text-[#3d5654] text-[10px] font-[500]">14:20</p>
              </div>
              <div className="flex flex-col gap-4 justify-end items-end">
                <p className="text-[#3d5654] font-bold text-[10px]">$1,572</p>
                <button
                  type="button"
                  className="hover:text-[#3d5654] hover:bg-[#E1ECEB] w-[100px] bg-[#C99C33] text-[#fff] focus:outline-none focus:ring-4 font-medium rounded-full text-[10px] px-5 py-2.5 text-center mb-2"
                >
                  BOOK NOW
                </button>
              </div>
            </div>

            {/* card 3 */}
            <div
              className={`${styles.card} flex relative justify-between items-center w-full px-3 bg-white py-5 border-dashed border-b-2 border-[#E3F2F1]`}
            >
              <div className="flex flex-col items-center">
                <img src="/lufthansa.svg" alt="" className="w-8 h-8" />
                <h1 className="text-[#3d5654] font-bold text-[10px]">
                  Lufthansa
                </h1>
              </div>
              <div className="flex flex-col gap-4 justify-center items-center">
                <h1 className="text-[#3d5654] font-bold text-[12px]">JFK</h1>
                <p className="text-[#3d5654] text-[10px] font-[500]">13:00</p>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <h3 className="text-[8px] font-bold text-[#3d5654] ">
                  EMIRATE
                </h3>
                <p className="text-[#C99C33] font-bold text-[9px]">11H 20M</p>
                <h5 className="text-[#3d5654] font-bold text-[10px]">
                  NON-STOP
                </h5>
              </div>
              <div className="flex flex-col gap-4 justify-center items-center">
                <h1 className="text-[#3d5654] font-bold text-[12px]">BOM</h1>
                <p className="text-[#3d5654] text-[10px] font-[500]">14:20</p>
              </div>
              <div className="flex flex-col gap-4 justify-end items-end">
                <p className="text-[#3d5654] font-bold text-[10px]">$1,572</p>
                <button
                  type="button"
                  className="hover:text-[#3d5654] hover:bg-[#E1ECEB] w-[100px] bg-[#C99C33] text-[#fff] focus:outline-none focus:ring-4 font-medium rounded-full text-[10px] px-5 py-2.5 text-center mb-2"
                >
                  BOOK NOW
                </button>
              </div>
            </div>
            {/* card 4 */}
            <div className="flex justify-between rounded-b-2xl  items-center w-full px-3 bg-white py-5">
              <div>
                <img src="/emirates.svg" alt="" className="w-16 h-16" />
              </div>
              <div className="flex flex-col gap-4 justify-center items-center">
                <h1 className="text-[#3d5654] font-bold text-[12px]">JFK</h1>
                <p className="text-[#3d5654] text-[10px] font-[500]">13:00</p>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <h3 className="text-[8px] font-bold text-[#3d5654] ">
                  EMIRATE
                </h3>
                <p className="text-[#C99C33] font-bold text-[9px]">11H 20M</p>
                <h5 className="text-[#3d5654] font-bold text-[10px]">
                  NON-STOP
                </h5>
              </div>
              <div className="flex flex-col gap-4 justify-center items-center">
                <h1 className="text-[#3d5654] font-bold text-[12px]">BOM</h1>
                <p className="text-[#3d5654] text-[10px] font-[500]">14:20</p>
              </div>
              <div className="flex flex-col gap-4 justify-end items-end">
                <p className="text-[#3d5654] font-bold text-[10px]">$1,572</p>
                <button
                  type="button"
                  className="hover:text-[#3d5654] hover:bg-[#E1ECEB] w-[100px] bg-[#C99C33] text-[#fff] focus:outline-none focus:ring-4 font-medium rounded-full text-[10px] px-5 py-2.5 text-center mb-2"
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="bg-[#425C5A] py-3 px-3 w-[35%] rounded-2xl">
            <div className="flex justify-between items-center pt-3 pb-6">
            <div>
              <p className="text-[#fff] text-[10px] font-[500]">FROM</p>
              <h1 className="text-[#fff]  text-[16px]">JFK</h1>
            </div>
            <div>
              <p className="text-[#fff] text-[10px] font-[500]">NON-STOP</p>
            </div>
            <div>
              <p className="text-[#fff] text-[10px] font-[500]">TO</p>
              <h1 className="text-[#fff]  text-[16px]">BMW</h1>
            </div>
            </div>
            <div className="border-1 border-red-700">
              <img src="/map2.svg" alt="" />
            </div>
            <div className="bg-[#3d5654]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flight;
