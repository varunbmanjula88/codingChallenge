import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import HomeComponent from "../../src/components/homeComponent";
import CharactersCard from "../../src/components/charactersCardComponent";
import renderer from "react-test-renderer";

const mockStore = configureStore();

const initialState = {
  charactersList: [],
  selectedCharacter: {},
  charactersPageNumber: 1,
  loadingSpinner: false
};

const setInitialState = state =>
  state ? { ...initialState, ...state } : { ...initialState };

describe("First scenario: when the home page first opens", () => {
  it("should render loading spinner div when loadingSpinner prop is changed", () => {
    const store = mockStore(setInitialState({ loadingSpinner: true }));

    const wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <HomeComponent />
        </Provider>
      </BrowserRouter>
    );

    expect(wrapper.find(".loading").exists()).toBeTruthy();
  });

  it("Should has no CharactersCard", () => {
    const store = mockStore(setInitialState());

    const wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <HomeComponent />
        </Provider>
      </BrowserRouter>
    );

    expect(wrapper.find(CharactersCard).length).toBe(0);
  });
});

describe("Second scenario: when the home page loads data", () => {
  it("Should has CharactersCard when charactersList.length is bigger than 0 and should match the list length", () => {
    const charactersList = [
      {
        id: 1,
        name: "Rick Sanchez",
        episode: [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2"
        ],
        origin: {
          name: "Earth (C-137)"
        },
        species: "Human",
        status: "Alive",
        url: "https://rickandmortyapi.com/api/character/1"
      }
    ];

    const store = mockStore(setInitialState({ charactersList }));

    const wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <HomeComponent />
        </Provider>
      </BrowserRouter>
    );

    expect(wrapper.find(CharactersCard).length).toBe(1);

    expect(wrapper.find(CharactersCard).length).toBe(charactersList.length);
  });

  it("Should render ending message when all data is being fetched", () => {
    const store = mockStore(
      setInitialState({
        charactersPageNumber: false
      })
    );

    const wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <HomeComponent />
        </Provider>
      </BrowserRouter>
    );

    expect(wrapper.text()).toContain("The End");
  });
});

// Snapshots
describe("<HomeComponent /> Snapshot test for home page components", () => {
  it("Should match the HomeComponent snapshot before data loading", () => {
    const store = mockStore(setInitialState());

    const wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <HomeComponent />
        </Provider>
      </BrowserRouter>
    );

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Should match the HomeComponent snapshot while data loading", () => {
    const store = mockStore(
      setInitialState({
        loadingSpinner: true
      })
    );

    const wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <HomeComponent />
        </Provider>
      </BrowserRouter>
    );

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Should match the HomeComponent snapshot after data loading", () => {
    const charactersList = [
      {
        id: 1,
        name: "Rick Sanchez",
        episode: [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2"
        ],
        origin: {
          name: "Earth (C-137)"
        },
        species: "Human",
        status: "Alive",
        url: "https://rickandmortyapi.com/api/character/1"
      }
    ];
    const store = mockStore(setInitialState({ charactersList }));

    const wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <HomeComponent />
        </Provider>
      </BrowserRouter>
    );

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Should match the HomeComponent snapshot when all data is being fetched", () => {
    const charactersList = [
      {
        id: 1,
        name: "Rick Sanchez",
        episode: [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2"
        ],
        origin: {
          name: "Earth (C-137)"
        },
        species: "Human",
        status: "Alive",
        url: "https://rickandmortyapi.com/api/character/1"
      }
    ];

    const store = mockStore(
      setInitialState({
        charactersPageNumber: false,
        charactersList
      })
    );

    const wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <HomeComponent />
        </Provider>
      </BrowserRouter>
    );

    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
