[![npm version](https://badge.fury.io/js/react-select-native.svg)](https://badge.fury.io/js/react-select-native)

# react-select-native
A React component for better usage of native HTML select element. Helps especially with making mobile UIs for the web, because while many packages offer select components for React, they don't look good at all on mobile browsers.

## Installing
```bash
npm install --save react-select-native
OR
yarn add react-select-native
```

## Usage example
```javascript
import Select from "react-select-native";
...
render() {
  return(
    <div>
      <Select
        onChange={e => this.handleChange(e)}
        options={[
          { label: "this is ebin", value: "ebin" },
          { label: "label2", value: "this is ebin" }
        ]}
        unselected={{
          value: "empty",
          label: "pls select"
        }}
        defaultValue={{ label: "label" value: "value" }}
      />
    </div>
 );
}
```
