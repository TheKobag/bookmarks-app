import { IGroup } from "../../models/group.interface";

export interface IFormState {
  name?: string;
  url?: string;
  groups?: IGroup[];
  group?: IGroup;
};

export const initialFormState: IFormState = {
  name: '',
  url: '',
  group: null
};
