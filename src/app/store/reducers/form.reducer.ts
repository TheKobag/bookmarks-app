import { Action } from '@ngrx/store';
import { FORM_GROUP_CHANGED, FORM_NAME_CHANGED, FORM_URL_CHANGED, IFormGroupChangedAction, IFormNameChangedAction, IFormUrlChangedAction } from '../actions/form.actions';
import { IFormState, initialFormState } from '../state/form.state';

export function formReducer(state: IFormState = initialFormState, action: Action): IFormState {
    switch(action.type) {
        case FORM_NAME_CHANGED: {
            const typedAction = <IFormNameChangedAction>action;
            return { ...state, name: typedAction.payload.value };
        }
        case FORM_URL_CHANGED: {
            const typedAction = <IFormUrlChangedAction>action;
            return { ...state, url: typedAction.payload.value };
        }
        case FORM_GROUP_CHANGED: {
            const typedAction = <IFormGroupChangedAction>action;
            return { ...state, group: typedAction.payload.group };
        }
        default: {
            return state;
        }
    }
}
