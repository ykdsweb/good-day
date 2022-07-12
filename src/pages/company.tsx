import HeadIn from "../components/layouts/Head";
import NewShop from "../components/company/NewShop";
import Nakashima from "../components/company/Nakashima";
import Corporation from "../components/company/Corporation";

const Company: React.FC = () => {
  return (
    <>
      <HeadIn
        title={"GOOD-DAY会社概要|岡山県倉敷市の個室シェアサロン"}
        description={""}
        keyword={""}
        image={""}
        url={""}
      />
      <NewShop />
      <Nakashima />
      <Corporation />
    </>
  );
};

export default Company;
