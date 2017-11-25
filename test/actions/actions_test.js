import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions';

describe('actions', () => {
    describe('saveComment', () => {
        it('has the correct type', () => {
            expect(SAVE_COMMENT).to.contain('save_comment');
        })

        it('has the correct payload', () => {
            expect(saveComment.payload).to.be('string');
        })
    });
});