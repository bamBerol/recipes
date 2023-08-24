import React from "react";

const Search = ({ backBtn }) => {
  return (
    <section className="d-flex align-items-center justify-content-center">
      You choose Search
      <button onClick={backBtn}>Back</button>
    </section>
  );
};

export default Search;
