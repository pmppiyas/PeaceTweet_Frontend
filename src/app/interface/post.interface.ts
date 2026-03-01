export interface IPost {
  id: string;
  header?: string | null;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;

  user?: any;
  comments?: any[];
  likes?: any[];
  tags?: any[];
}
