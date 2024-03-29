/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AxiosResponse } from 'axios';
import Repository from '../index';

const resource = '/users';

export default class User {
   signIn(payload: { email: string; password: string }): Promise<AxiosResponse<IUser>> {
      return Repository.post(`${resource}/sign-in`, payload);
   }

   signUp(payload: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
   }): Promise<AxiosResponse<IUser>> {
      return Repository.post(`${resource}/sign-up`, payload);
   }

   getMe(): Promise<AxiosResponse<IUser>> {
      return Repository.get(`${resource}/me`);
   }

   updateMe(data: IUserUpdate) {
      return Repository.put(`${resource}/me`, data);
   }

   getMyUrls(): Promise<AxiosResponse<IURL[]>> {
      return Repository.get(`${resource}/me/urls`);
   }
}
