declare interface IUser {
   _id: string;
   accessToken: string;
   createdAt: string;
   email: string;
   firstName: string;
   lastName: string;
   role: string;
   updatedAt: string;
}

declare interface IUserUpdate {
   email?: string;
   firstName?: string;
   lastName?: string;
   password?: string;
}
