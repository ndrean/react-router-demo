import React from "react";
import { Link, Switch, Route } from "react-router-dom";

const H = () => <p />;
const A1 = () => (
  <p>
    Switch A1 <Link to="/b1"> to B1</Link>
  </p>
);
const B1 = () => (
  <p>
    Switch B1 <Link to="/a1">to A1</Link>
  </p>
);

const A2 = () => {
  return (
    <>
      <p>
        Display nested <Link to="/a2/b2"> of A2</Link>
      </p>
      <Route exact path="/a2/b2">
        <B2 />
      </Route>
    </>
  );
};

const B2 = () => <p>B22222</p>;

function AppA() {
  return (
    <>
      <Link to=""> H </Link>
      <Link to="/a1"> A1 </Link>
      <Link to="/a2"> A2 </Link>
      <hr />
      <Switch>
        <Route exact path="/">
          <H />
        </Route>
        <Route exact path="/a1">
          <A1 />
        </Route>
        <Route path="/a2">
          <A2 />
        </Route>
        <Route exact path="/b1">
          <B1 />
        </Route>
      </Switch>
    </>
  );
}

/************************************/

const H3 = () => (
  <div>
    <Link to="/a3">From H to A3</Link>
    <p>A3333333</p>
  </div>
);
const A3 = () => (
  <div>
    <Link to="/">From A3 to H</Link>
    <p>Hhhhhhhh</p>
  </div>
);

function AppB() {
  return (
    <>
      <hr />

      <Switch>
        <Route exact path="/">
          <H3 />
        </Route>
        <Route exact path="/a3">
          <A3 />
        </Route>
      </Switch>
    </>
  );
}
export { AppA, AppB };
