import { promiseTimeout } from '@vueuse/core';
import UrlRepository from '../API/repositories/urls';
import { PersistentStore } from './main';

const urlApi = new UrlRepository();

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

   async shortUrl(longUrl: string) {
      await promiseTimeout(500);
      await urlApi
         .create({ longUrl })
         .then(async (response) => {
            this.state.storedUrls.push(response.data);
         })
         .catch(() => console.error);
   }

   async updateStoredUrl() {
      const newStoredUrls: IURL[] = [];
      for await (const url of this.state.storedUrls) {
         await urlApi.show(url._id).then((response) => {
            newStoredUrls.push(response.data);
         });
      }
      this.state.storedUrls = newStoredUrls;
   }

   async deleteUrl(url: IURL) {
      await urlApi.delete(url._id).finally(() => {
         const urlIndex = this.state.storedUrls.indexOf(url);
         this.state.storedUrls.splice(urlIndex, 1);
      });
   }

   toggleIsTableVisible(state?: boolean) {
      this.state.isTableVisible = typeof state === 'boolean' ? state : !this.state.isTableVisible;
   }
}

export const useURLStore = new URLStore('Urls');
