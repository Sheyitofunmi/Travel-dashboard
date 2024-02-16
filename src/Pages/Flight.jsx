import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faArrowRightArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const Flight = () => {
  return (
    <div>
      <div className="bg-[#fff] p-3 rounded-lg">
        <div>
          <div className="w-2/3">
            <div className="relative right-0 bg-[#E1ECEB] rounded-2xl">
              <ul
                className="relative flex flex-wrap  p-1 list-none rounded-xl bg-blue-gray-50/60"
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
                      className="w-5 h-5"
                    />
                    <span className="ml-1 text-[8px]">NEW YORK (JFK)</span>
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
                      className="w-5 h-5"
                    />
                    <span className="ml-1 text-[8px]">MUMBAI (BOM)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full">
            <div className="relative right-0">
              <ul
                className="relative flex flex-wrap p-1 list-none rounded-lg bg-blue-gray-50/60"
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
                    <span className="ml-1">HTML</span>
                  </a>
                </li>
                <li className="z-30 flex-auto text-center">
                  <a
                    className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
                    data-tab-target=""
                    role="tab"
                    aria-selected="false"
                  >
                    <span className="ml-1">React</span>
                  </a>
                </li>
                <li className="z-30 flex-auto text-center">
                  <a
                    className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
                    data-tab-target=""
                    role="tab"
                    aria-selected="false"
                  >
                    <span className="ml-1">Vue</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Flight;
