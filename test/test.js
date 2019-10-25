import React from "react";
import Select from "../src/index.js";

describe("Render", () => {
  it("with correct className", () => {
    const elem = shallow(<Select />);
    expect(elem.prop("className")).toEqual(
      "react-select-native mobile-dropdown"
    );
  });
  it("with correct default item", () => {
    const elem = shallow(
      <Select unselected={{ value: "ebin", label: "ebin" }} />
    );
    expect(elem.text()).toEqual("ebin");
  });
  /* it("with correct default item", () => {
    const options = [{ value: "value1", label: "label1" }];
    const elem = mount(
      <Select unselected={{ value: "ebin", label: "ebin" }} options={options} />
    );
    elem.simulate("change", { target: { value: "value1" } });
    expect(elem.text()).toEqual("label1");
  }); */
});
