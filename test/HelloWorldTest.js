import HelloWorld from "../src/components/HelloWorld";
import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";

describe("Hello World", () => {
  it("render component", () => {
    let num = 10,
      names = "hello";
    const wrapper = shallow(<HelloWorld num={num} styleNames={names} />);

    expect(wrapper.props().className).to.equal(names);
    expect(wrapper.text()).to.equal(`Tag Test and ${num}: ${num * num}`);
  });
});
