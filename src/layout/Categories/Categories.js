import React from "react";

const Categories = ({ backBtn }) => {
  return (
    <section className="d-flex align-items-center justify-content-center">
      you choose categories
      <button onClick={backBtn}>Back</button>
    </section>
  );
};

export default Categories;
