import React, { Component } from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import CharactersCard from "../../src/components/charactersCardComponent";

// Snapshots
describe("<CharactersCard /> Snapshot test for CharactersCard component", () => {
  it("Should match the CharactersCard snapshot when character data is empty", () => {
    const wrapper = shallow(<CharactersCard character={{}} />);

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Should match the CharactersCard snapshot when character data is not empty", () => {
    const wrapper = shallow(
      <CharactersCard character={{ name: "test", image: "test" }} />
    );

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
