export interface Notes {
  id: number;
  title: string;
  body: string;
}

export interface NotesSchema {
  isLoading: boolean;
  error?: string;
  data?: Notes[];
}

export interface NotesDTO {
  limit: number;
  skip: number;
  total: number;
  posts: Notes[];
}
