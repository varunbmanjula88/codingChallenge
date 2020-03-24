import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import HeaderComponent from "../../src/components/headerComponent";

// Snapshots
describe("<HeaderComponent /> Snapshot test for HeaderComponent component", () => {
  it("Should match the HeaderComponent snapshot", () => {
    const wrapper = shallow(
      <Router>
        <HeaderComponent />
      </Router>
    );

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
