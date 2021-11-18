import { promiseTimeout } from '@vueuse/core';
import UrlRepository from '~/API/repositories/urls';
import UserRepository from '~/API/repositories/user';
import { PersistentStore } from '~/store/main';

const urlApi = new UrlRepository();
const userApi = new UserRepository();
export interface URL extends Object {
   storedUrls: IURL[];
   isTableVisible: boolean;
}

class URLStore extends PersistentStore<URL> {
   protected data(): URL {
      return {
         storedUrls: [],
         isTableVisible: true,
      };
   }

   async takeUrls() {
      if (this.state.storedUrls.length > 0) {
         await urlApi.take({ urls: this.state.storedUrls }).catch((err) => {
            console.error(err);
            return false;
         });
      }
   }

   async shortUrl(longUrl: string) {
      await promiseTimeout(500);
      await urlApi
         .create({ longUrl })
         .then(async (response) => {
            this.state.storedUrls.push(response.data);
         })
         .catch((err) => {
            console.error(err);
            return false;
         });
   }

   async updateStoredUrl() {
      await userApi
         .getMyUrls()
         .then(async (response) => {
            this.state.storedUrls = response.data;
         })
         .catch((err) => {
            console.error(err);
            return false;
         });
   }

   async deleteUrl(url: IURL) {
      await urlApi
         .delete(url._id)
         .catch((err) => {
            console.error(err);
            return false;
         })
         .finally(() => {
            const urlIndex = this.state.storedUrls.indexOf(url);
            this.state.storedUrls.splice(urlIndex, 1);
         });
   }

   toggleIsTableVisible(state?: boolean) {
      this.state.isTableVisible = typeof state === 'boolean' ? state : !this.state.isTableVisible;
   }
}

export const useURLStore = new URLStore('Urls');
