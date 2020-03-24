import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CharecterInfoComponent from "../../src/components/characterInfoComponent";
import PreviousComponent from "../../src/components/previousPageButton";

const mockStore = configureStore();

const initialState = {
  loadingSpinner: false,
  selectedCharacter: {}
};

const setInitialState = state =>
  state ? { ...initialState, ...state } : { ...initialState };

describe("First scenario: when the character details page first opens", () => {
  it("should render loading spinner div when loadingSpinner prop is changed", () => {
    const store = mockStore(setInitialState({ loadingSpinner: true }));

    const wrapper = mount(
      <Router>
        <Provider store={store}>
          <CharecterInfoComponent />
        </Provider>
      </Router>
    );

    expect(wrapper.find(".loading").exists()).toBeTruthy();
  });

  it("should render back button componenet", () => {
    const store = mockStore(setInitialState());

    const wrapper = mount(
      <Router>
        <Provider store={store}>
          <CharecterInfoComponent />
        </Provider>
      </Router>
    );

    expect(wrapper.find(PreviousComponent).exists()).toBeTruthy();
  });

  it("should render CharacterDetails componenet when selectedCharacter prop is not empty", () => {
    const store = mockStore(
      setInitialState({
        selectedCharacter: {
          name: "test"
        }
      })
    );

    const wrapper = mount(
      <Router>
        <Provider store={store}>
          <CharecterInfoComponent />
        </Provider>
      </Router>
    );

    expect(wrapper.find(PreviousComponent).exists()).toBeTruthy();
  });
});

// Snapshots
describe("<CharecterInfoComponent /> Snapshot test for character details components", () => {
  it("Should match the CharecterInfoComponent snapshot before character data loading", () => {
    const store = mockStore(setInitialState());

    const wrapper = mount(
      <Router>
        <Provider store={store}>
          <CharecterInfoComponent />
        </Provider>
      </Router>
    );

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Should match the CharecterInfoComponent snapshot after character data loading", () => {
    const store = mockStore(
      setInitialState({
        selectedCharacter: {
          name: "test"
        }
      })
    );

    const wrapper = mount(
      <Router>
        <Provider store={store}>
          <CharecterInfoComponent />
        </Provider>
      </Router>
    );

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
