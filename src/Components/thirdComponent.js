import React from 'react'; 
import nallur from "../assets/images/nallur.jpg";


const ThirdComponent = () => {

    const content = {
        subTitle:"FEW WORDS ABOUT US",
        title:"Learn About Hinduism",
        content:"Posuere tellus imperdet facl. Curabitur viverra faucibusy tellus, semper nunc finibus placerat. Suspendi potenti. Praese vesem sem vulputate interdum placerat diam quis nisi porta vitaeves tibulum neque cursus gravida sed sed metus.",
    }

    return (
        <div className='flex w-[80%] mx-auto py-[90px]'>
            <div className='flex gap-[100px]'>
                <div className='w-1/2'>
                    <div className='text-[#F5B324] text-[18px] font-[600]'>{content.subTitle}</div>
                    <div className='text-[#1A2431] text-[41px] font-[700] pt-[10px]'>{content.title}</div>
                    <div className='text-[#303030] text-[17px] font-[300] pt-[20px] leading-[30px]'>{content.content}</div>
                    <div className='flex'>
                        <div></div>
                        <div>
                            <div>Connects Devoters</div>
                            <div>Posuere tellus imperdet faclurabiturnviverra faucibusy telleducate.</div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'><img src={nallur} className='rounded-r-xl'/></div>
            </div>
        </div>
            
    );
}

export default ThirdComponent;
