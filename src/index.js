import React, { Component } from "react";

/**
 * VERY reusable React component.
 * Extends HTML select so that it can better handle asynchronically loaded data.
 */
class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.defaultValue
    };
  }
  handleChange(e) {
    e.preventDefault();
    this.props.onChange(e);
    this.setState({
      selected: e.target.value
    });
  }
  render() {
    return (
      <select
        className={`react-select-native mobile-dropdown${this.props.className ? " " + this.props.className : ""}`}
        id={this.props.id}
        ref={this.props.getRef}
        value={this.state.selected}
        onChange={e => this.handleChange(e)}
      >
        {this.props.unselected && (
          <option value={this.props.unselected.value}>
            {this.props.unselected.label}
          </option>
        )}
        {this.props.options &&
          this.props.options.map((option, index) => (
            <option key={`option${index}`} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    );
  }
}

export default Select;
