import React from "react";
import Navs from "./Navs";
import Content from "./Content";
import Delete from "./Delete";
import Warnning from "./Warnning";
import AddJob from "./AddJob";

export default function Full() {
  return (
    <div>
      <>
        {/* Font Awesome */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
        {/* MDB */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/7.1.0/mdb.min.css"
          rel="stylesheet"
        />
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card">
                  <div className="card-body p-5">
                    <AddJob></AddJob>
                    <Navs></Navs>
                    <Content></Content>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Delete></Delete>
        <Warnning></Warnning>
        {/* MDB */}
      </>
    </div>
  );
}
