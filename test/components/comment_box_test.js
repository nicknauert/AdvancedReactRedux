import { renderComponent, expect } from "../test_helper";
import commentBox from "../../src/components/commentBox";



describe('Comment Box', () => {

  it('shows the correct test', () => {

    const component = renderComponent(App);

    expect(component).to.contain("Reactin n Reduxin");
    
  });

});