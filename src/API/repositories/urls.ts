import { AxiosResponse } from 'axios';
import Repository from '../index';

const resource = '/urls';

export default class URLs {
   get(params?: Record<string, unknown>): Promise<AxiosResponse<IURL[]>> {
      return Repository.get(resource, { params });
   }

   show(id: string): Promise<AxiosResponse<IURL>> {
      return Repository.get(`${resource}/${id}`);
   }

   create(data: Record<string, unknown>): Promise<AxiosResponse<IURL>> {
      return Repository.post(resource, data);
   }

   update(id: string, data: Record<string, unknown>) {
      return Repository.put(`${resource}/${id}`, data);
   }

   delete(id: string) {
      return Repository.delete(`${resource}/${id}`);
   }

   take(data: { urls: IURL[] }) {
      return Repository.put(`${resource}/take`, data);
   }
}
