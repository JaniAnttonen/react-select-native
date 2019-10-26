import React from "react";
import Select from "../src/index.js";

const fixtures = [
  { value: "value1", label: "label1" },
  { value: "value2", label: "label2" },
  { value: "value3", label: "label3" },
  { value: "value4", label: "label4" },
  { value: "value5", label: "label5" },
  { value: "value6", label: "label6" }
];

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
  it("with callback", () => {
    const callback = jest.fn();
    const testEvent = {
      target: { value: fixtures[0].value },
      preventDefault: () => {}
    };
    const elem = shallow(
      <Select
        unselected={{ value: "ebin", label: "ebin" }}
        options={fixtures}
        onChange={callback}
      />
    );
    elem.simulate("change", testEvent);
    expect(callback).toBeCalledWith(testEvent);
  });
});
