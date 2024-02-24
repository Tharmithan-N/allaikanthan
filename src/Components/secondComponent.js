import React, { useState, useEffect } from "react";
import muruga from "../assets/images/muruga.jpg";

const SecondComponent = () => {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://allaikanthan1.onrender.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCardData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const CardDatas = [
    {
      image: `${muruga}`,
      title: "Shiva Shakti",
      content:
        "Curabitur viverra faucibusy tellus educate semper nunc finibusing placerat sed sed metus for checking",
    },
    {
      image: `${muruga}`,
      title: "Shiva Shakti",
      content:
        "Curabitur viverra faucibusy tellus educate semper nunc finibusing placerat sed sed metus for checking",
    },
    {
      image: `${muruga}`,
      title: "Shiva Shakti",
      content:
        "Curabitur viverra faucibusy tellus educate semper nunc finibusing placerat sed sed metus for checking",
    },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log("This is the data coming from backend server render", cardData);

  return (
    <div className="bg-[#ecfdfb]">
      <div className="py-[90px] 2xl:ml-[8%] 2xl:mr-[8%]">
        <div className="flex">
          <div className="text-[41px] text-[#1a2431] font-[700] leading-[50px] w-1/2">
            Serving the needs of the Hindu Community
          </div>
          <div className="text-[17px] font-[300] text-[#303030] w-1/2">
            Posuere tellus imperdet facl. Curabitur viverra faucibusy tellus,
            semper nunc finibus placerat. Suspendi potenti. Praese vesem sem
            vulputate interdum placerat diam quis nisi porta vitaeves tibulum
            neque cursus gravida sed sed metus.
          </div>
        </div>
        <div className="pt-[50px] flex flex-col md:flex-row space-y-[20px] md:space-y-0 md:space-x-[20px] lg:space-x-[30px] xl:space-x-[40px] justify-center">
          {cardData.map((data, index) => (
            <div
              key={index}
              className="border rounded-[10px] bg-[#fff] inline-block max-w-content"
            >
              <div className="rounded-[10px]">
                <img
                  src={data.image || muruga}
                  alt="god"
                  className="p-[20px] rounded-[10px] max-w-[347px] max-h-[330px]"
                />
              </div>
              <div className="text-[#282828] text-[24px] font-[600] text-center">
                {data.title}
              </div>
              <div className="text-[#303030] text-[17px] font-[300] max-w-[315px] mx-[auto] text-center p-[20px]">
                {data.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondComponent;
