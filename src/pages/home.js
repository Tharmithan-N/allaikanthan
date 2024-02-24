import FirstComponent from "../Components/firstComponent";
import SecondComponent from "../Components/secondComponent";
import ThirdComponent from "../Components/thirdComponent";

const Home = () => {
  return (
    <>
      <FirstComponent />
      {/* <SecondComponent /> // remove second component */}
      <ThirdComponent />
    </>
  );
};

export default Home;
