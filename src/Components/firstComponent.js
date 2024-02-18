import React from "react";

const FirstComponent = () => {
    return(
        <div className="mt-[100px] container 2xl:pr-[8%] 2xl:pl-[8%] pr-[5%] pl-[5%]">
            <div className="flex gap-[60px]">
                <div className="w-1/2"><img src="https://sktperfectdemo.com/themepack/temple/wp-content/uploads/2022/01/welcome-col-img.png" alt="shiva"/></div>
                <div className="w-1/2">
                    <div className="text-[#f5b324] text-[18px] font-[600]">WELCOME TO</div>
                    <div className="text-[#1a2431]  text-[41px] font-[700] leading-[49px] pt-[5px]">We Hindus believe In the Vedas.</div>
                    <div className="leading-[30px] pt-[40px] text-[19px] font-[400] max-w-[550px]">Posuere tellus imperdet facl. Curabitur viverra faucib usy tellus, educate semper nunc finibus placuspendi uosuere tellus imperdet facl. Curabitur viverra faucib potenti Praesent vely seminto.</div>
                    <div className="flex pt-[60px]">
                        <div className="w-1/2 flex flex-col gap-[15px]">
                            <div className="font-[600] text-[19px]"><span className="text-[#f5b324] pr-[5px]">&#10004;</span>Rigveda</div>
                            <div className="font-[600] text-[19px]"><span className="text-[#f5b324] pr-[5px]">&#10004;</span>Yajur-Veda</div>
                            <div className="font-[600] text-[19px]"><span className="text-[#f5b324] pr-[5px]">&#10004;</span>Sama-Veda</div>
                        </div>
                        <div className="w-1/2 flex flex-col gap-[15px]">
                            <div className="font-[600] text-[19px]"><span className="text-[#f5b324] pr-[5px]">&#10004;</span>Rigveda</div>
                            <div className="font-[600] text-[19px]"><span className="text-[#f5b324] pr-[5px]">&#10004;</span>Yajur-Veda</div>
                            <div className="font-[600] text-[19px]"><span className="text-[#f5b324] pr-[5px]">&#10004;</span>Sama-Veda</div>
                        </div>
                    </div>
                    <div className="rounded-[100px] text-[17px] font-[500] bg-[#f5b324] px-[40px] py-[15px] inline-block text-[#fff] hover:bg-[#000] cursor-pointer mt-[70px]">Read More</div>
                </div>
            </div>
        </div>
    )
}

export default FirstComponent;