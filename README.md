[![npm version](https://badge.fury.io/js/react-select-native.svg)](https://badge.fury.io/js/react-select-native)

# react-select-native

A React component for better usage of native HTML select element. Helps especially with making mobile UIs for the web, because while many packages offer select components for React, they don't look and/or work good at all on mobile browsers.

## Installing

```bash
npm install --save react-select-native
OR
yarn add react-select-native
```

## Props

- onChange – Gets the selected value (event.target.value) back to the parent component. Is fired from Select internally.
- options – List of available options as objects with the fields label and value. Label is the text shown in the select field representing the value. Both label and value must be strings – if you're passing objects as input, JSON.stringify them on input and JSON.parse onChange
- unselected - Optional additional value. Can be used to represent "select all" or similar things.
- value - You make this a controlled component by controlling the value from the parent component.
- defaultValue – The default element that's selected from props.options. Must be exactly the same as one of the elements in props.options.
- getRef - Passes the ref of the html select element back to the parent with a callback, so that the value of the selected option can be used passively.
- id - Passes the given id to the html element, so that it can be given a `<label>`

## Usage example

```javascript
import Select from "react-select-native";
...
render() {
  const options = [
          { label: "this is ebin", value: "ebin" },
          { label: "label2", value: "this is ebin" }
        ]
  return(
    <div>
      <Select
        onChange={e => this.handleChange(e)}
        options={options}
        unselected={{
          value: "empty",
          label: "pls select"
        }}
        value={this.state.selectValue}
        defaultValue={options[0].value}
      />
    </div>
 );
}
```

## Tips and tricks

The native HTML select is very picky with its input, and can't take objects as-is as its input. This limitation can be averted by stringifying the passed object with JSON.stringify(), like so:

```javascript
  <Select
    onChange={e => this.handleChange(e)}
    options={listOfObjects.map(obj => (
      { label: obj.name, value: JSON.stringify(obj) }
    ))}
    defaultValue={ JSON.stringify(listOfObjects[0]) }
  />
}
```
