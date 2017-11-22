import { renderComponent, expect } from "../test_helper";
import App from "../../src/components/App";

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  })

  it('displays a comment box', () => {
    expect(component.find('.commentBox')).to.exist;
  })
});