export interface AppState {
  language: string;
  accessToken?: string;
}

export const initialAppState: AppState = {
  language: 'id',
  accessToken: '',
};
