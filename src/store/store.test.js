import expect from 'expect';
import { createStore } from'redux';
import rootReducer from '../reducers';
import initialState from '../actions/courseActions';
import * as courseActions from '../actions/courseActions';

describe('Store', function() {
    it('Should handle creating courses', () => {
        const store = createStore(rootReducer, initialState);
        const course = {
            title: "Clean code"
        };

        const action = courseActions.createCourseSuccess(course);
        store.dispatch(action);

        const actual = store.getState().courses[0];
        const expected = {
            title: "Clean code"
        }
        expect(actual).toEqual(expected)
    });
});

