export interface IFormState {
  name?: string;
  url?: string;
  groups?: IGroup[];
  group?: IGroup;
};

export interface IGroup {
  id: string;
  name: string;
}

export const initialFormState: IFormState = {
  name: '',
  url: '',
  group: null
};
