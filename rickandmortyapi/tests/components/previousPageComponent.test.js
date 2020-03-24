import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import PreviousPage from "../../src/components/previousPageButton";

// Snapshots
describe("<PreviousPage /> Snapshot test for PreviousPage component", () => {
  it("Should match the PreviousPage snapshot", () => {
    const wrapper = shallow(
      <Router>
        <PreviousPage />
      </Router>
    );

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
