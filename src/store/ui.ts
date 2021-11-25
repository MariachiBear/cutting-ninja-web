import { PersistentStore } from './main';

export interface UI {
   isSignModalOpen: boolean;
}

class UIStore extends PersistentStore<UI> {
   protected data(): UI & Object {
      return {
         isSignModalOpen: false,
      };
   }

   toggleValue(key: keyof UI, value: boolean) {
      if (typeof value === 'boolean') this.state[key] = value;
      else this.state[key] = !this.state.isSignModalOpen;
   }
}

export const useUIStore = new UIStore('UI');
