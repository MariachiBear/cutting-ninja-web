import { PersistentStore } from './main';

export interface User extends Object {
   savedName: string;
   previousNames: string[];
}

class UserStore extends PersistentStore<User> {
   protected data(): User {
      return {
         savedName: '',
         previousNames: [],
      };
   }

   otherNames() {
      return computed(() =>
         this.state.previousNames.filter((name) => name !== this.state.savedName).sort()
      );
   }

   setNewName(name: string) {
      if (this.state.savedName) {
         this.state.previousNames.push(this.state.savedName);
         this.state.previousNames = Array.from(new Set(this.state.previousNames));
      }

      this.state.savedName = name;
   }
}

export const useUserStore = new UserStore('User');
