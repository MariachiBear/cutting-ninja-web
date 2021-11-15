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
      await urlApi
         .create({ longUrl })
         .then((response) => {
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

   toogleIsTableVisible() {
      this.state.isTableVisible = !this.state.isTableVisible;
   }
}

export const useURLStore = new URLStore('Urls');
