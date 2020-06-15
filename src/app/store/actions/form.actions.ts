import { Action } from "@ngrx/store";
import { IGroup } from "../../models/group.interface";

export const FORM_NAME_CHANGED = "FORM_NAME_CHANGED";
export const FORM_URL_CHANGED = "FORM_URL_CHANGED";
export const FORM_GROUP_CHANGED = "FORM_GROUP_CHANGED";

export interface IFormNameChangedAction extends Action {
  payload: {
    value: string;
  };
}

export interface IFormUrlChangedAction extends Action {
  payload: {
    value: string;
  };
}

export interface IFormGroupChangedAction extends Action {
  payload: {
    group: IGroup;
  };
}

export function formNameChanged(value: string): IFormNameChangedAction {
  return {
    type: FORM_NAME_CHANGED,
    payload: {
      value,
    },
  };
}

export function formUrlChanged(value: string): IFormUrlChangedAction {
  return {
    type: FORM_URL_CHANGED,
    payload: {
      value,
    },
  };
}

export function formGroupChanged(group: IGroup): IFormGroupChangedAction {
  return {
    type: FORM_GROUP_CHANGED,
    payload: {
      group
    },
  };
}
