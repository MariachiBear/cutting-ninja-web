import { promiseTimeout } from '@vueuse/core';
import { PersistentStore } from './main';

export interface Notification extends Object {
   isOpen: boolean;
   type: string;
   message: string;
   msTime: number;
   isActive: boolean;
}

class NotificationStore extends PersistentStore<Notification> {
   protected data(): Notification {
      return {
         isOpen: false,
         type: '　',
         msTime: 3000,
         message: '　',
         isActive: false,
      };
   }

   private showNotification(type?: string, msTime?: number) {
      if (!this.state.isOpen && !this.state.isActive) {
         this.state.isActive = true;

         if (type) this.state.type = type;
         if (msTime) this.state.msTime = msTime;

         this.state.isOpen = true;

         promiseTimeout(this.state.msTime).then(() => {
            this.state.isOpen = false;
            promiseTimeout(300).then(() => this.reset());
         });
      }
   }

   showSuccessNotification(message: string, seconds = 5) {
      this.state.message = message;
      const multiplicand = 1000;
      this.showNotification('success', seconds * multiplicand);
   }

   showErrorNotification(message: string, seconds = 5) {
      this.state.message = message;
      const multiplicand = 1000;
      this.showNotification('error', seconds * multiplicand);
   }

   showInfoNotification(message: string, seconds = 5) {
      this.state.message = message;
      const multiplicand = 1000;
      this.showNotification('info', seconds * multiplicand);
   }

   showWarningNotification(message: string, seconds = 5) {
      this.state.message = message;
      const multiplicand = 1000;
      this.showNotification('warning', seconds * multiplicand);
   }
}

export const useNotificationStore = new NotificationStore('Notification');
