import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const FullLayout = () => {
  const [searchIsClicked, setSearchIsClicked] = useState(false);

  const handleSearchIsClicked = (value) => {
    setSearchIsClicked(value);
  };

  return (
    <>
      <Header
        searchIsClicked={searchIsClicked}
        handleSearchIsClicked={handleSearchIsClicked}
      />
      <Main searchIsClicked={handleSearchIsClicked} />
      <Footer />
    </>
  );
};
export default FullLayout;
