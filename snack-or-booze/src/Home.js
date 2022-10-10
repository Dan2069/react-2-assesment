import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
        </CardBody>
      </Card>

      <Card>
        <CardBody className ="text-center">
          <h2 className ="font-weight-bold">
            Our menu consists of 3 Food Items and 4 Drink Items
          </h2>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
