import { Store } from './main';

export interface UI {
   isSignModalOpen: boolean;
   isUrlDeleteConfirmOpen: boolean;
   isSignInInfoOpen: boolean;
   isMobileMenuOpen: boolean;
}

class UIStore extends Store<UI> {
   protected data(): UI & Object {
      return {
         isSignModalOpen: false,
         isUrlDeleteConfirmOpen: false,
         isSignInInfoOpen: false,
         isMobileMenuOpen: false,
      };
   }

   toggleValue(key: keyof UI, value: boolean) {
      if (typeof value === 'boolean') this.state[key] = value;
      else this.state[key] = !this.state[key];
   }
}

export const useUIStore = new UIStore('UI');
