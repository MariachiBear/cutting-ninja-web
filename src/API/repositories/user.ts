/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AxiosResponse } from 'axios';
import Repository from '../index';

const resource = '/users';

export default class User {
   signIn(payload: { email: string; password: string }): Promise<AxiosResponse<IUser>> {
      return Repository.post(`${resource}/sign-in`, payload);
   }

   signUp(payload: { email: string; password: string }): Promise<AxiosResponse<IUser>> {
      return Repository.post(`${resource}/sign-in`, payload);
   }

   getMe(): Promise<AxiosResponse<IUser>> {
      return Repository.get(`${resource}/me`);
   }

   updateMe(data: IUser) {
      return Repository.put(`${resource}/me`, data);
   }
}
