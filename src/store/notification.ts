import { promiseTimeout } from '@vueuse/core';
import { Store } from './main';

export interface Notification extends Object {
   isOpen: boolean;
   type: string;
   message: string;
   msTime: number;
   isActive: boolean;
}

class NotificationStore extends Store<Notification> {
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
      if (!this.state.isOpen) {
         this.state.isActive = true;

         if (type) this.state.type = type;
         if (msTime) this.state.msTime = msTime;

         this.state.isOpen = true;

         promiseTimeout(this.state.msTime).then(() => {
            this.state.isOpen = false;
         });
      }
   }

   showSuccessNotification(message: string, seconds = 3) {
      this.state.message = message;
      const milliseconds = seconds * 1000;
      this.showNotification('success', milliseconds);
   }

   showErrorNotification(message: string, seconds = 3) {
      this.state.message = message;
      const milliseconds = seconds * 1000;
      this.showNotification('error', milliseconds);
   }

   showInfoNotification(message: string, seconds = 3) {
      this.state.message = message;
      const milliseconds = seconds * 1000;
      this.showNotification('info', milliseconds);
   }

   showWarningNotification(message: string, seconds = 3) {
      this.state.message = message;
      const milliseconds = seconds * 1000;
      this.showNotification('warning', milliseconds);
   }
}

export const useNotificationStore = new NotificationStore('Notification');
