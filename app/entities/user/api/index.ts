import { User } from "../model/types";

export const DEFAULT_USERS_LIMIT = 30;

export type GetUsersResponse = {
  users: User[];
  total: number;
  skip: number;
  limit: number;
};

type GetUsersParams = {
  page?: number;
  limit?: number;
};

export const usersApi = {
  getAllUsers: async ({
    page = 1,
    limit = DEFAULT_USERS_LIMIT,
  }: GetUsersParams = {}): Promise<GetUsersResponse> => {
    const safePage = Math.max(1, page);
    const safeLimit = Math.max(1, limit);
    const skip = (safePage - 1) * safeLimit;
    const response = await fetch(`https://dummyjson.com/users?limit=${safeLimit}&skip=${skip}`);
    const data = await response.json();

    return {
      ...data,
      limit: safeLimit,
    };
  },
  getUserById: async (id: number): Promise<User | null> => {
    const response = await fetch(`https://dummyjson.com/users/${id}`);

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    if (typeof data?.id !== "number") {
      return null;
    }

    return data;
  },
  searchUsers: async (query: string): Promise<GetUsersResponse> => {
    const safeQuery = query.trim();
    const response = await fetch(`https://dummyjson.com/users/search?q=${safeQuery}`);
    const data = await response.json();
    return data;
  },
};
