import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { mount, render, shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
