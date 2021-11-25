import AxiosInstance from '~/API/index';
import { useUserStore } from '~/store/user';
import { UserModule } from '~/types';

export const install: UserModule = async ({ isClient, router }) => {
   if (isClient) {
      router.beforeEach(async (guard) => {
         await useUserStore.init();
         const userState = useUserStore.getState();
         AxiosInstance.defaults.headers.common.Authorization = `Bearer ${userState.user?.accessToken}`;

         await useUserStore.checkLogin();
         const isLogged = useUserStore.isUserLoggedIn();
         if (guard.meta.requiresAuth && !isLogged.value) router.replace('/');
      });
   }
};
