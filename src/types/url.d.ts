declare interface IURL {
   _id: string;
   createdAt: string;
   longUrl: string;
   shortUrl: string;
   updatedAt: string;
   user?: string;
   visits: number;
}
