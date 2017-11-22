import { renderComponent, expect } from "../test_helper";
import CommentBox from "../../src/components/CommentBox";

describe('Comment Box', () => {
    let component;
    beforeEach(() => {
        component = renderComponent(CommentBox);
    });

    it('has the correct class', () => {
        expect(component).to.have.class('commentBox');
    })

    it('has a text area', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });
})