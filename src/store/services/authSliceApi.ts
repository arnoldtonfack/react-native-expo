import { account, ID } from "@/lib/appWrite";
import type { AWUser, RegisterDto, LoginDto } from "@/types/auth";
import { emptySplitApi } from "./emptySplitApi";
import { toRTKError } from "@/types";

export const authApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<AWUser, RegisterDto>({
      queryFn: async (body) => {
        try {
          await account.create(
            ID.unique(),
            body.email,
            body.password,
            body.name
          );
          const user = await account.get();
          return { data: user };
        } catch (err) {
          return { error: toRTKError(err) };
        }
      },
    }),
    login: builder.mutation<AWUser, LoginDto>({
      queryFn: async (body) => {
        try {
          await account.createEmailPasswordSession(body.email, body.password);
          const user = await account.get();
          return { data: user };
        } catch (err) {
          return { error: toRTKError(err) };
        }
      },
    }),
    logout: builder.mutation<null, void>({
      queryFn: async () => {
        try {
          await account.deleteSession("current");
          return { data: null };
        } catch (err) {
          return { error: toRTKError(err) };
        }
      },
    }),
    me: builder.query<AWUser, void>({
      queryFn: async () => {
        try {
          const user = await account.get();
          return { data: user };
        } catch (err) {
          return { error: toRTKError(err) };
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
} = authApi;
