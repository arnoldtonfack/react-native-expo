export type ApiError = {
  status?: number;
  message: string;
  code?: string;
  data?: unknown;
};

// export const toApiError = (err: unknown): ApiError => {
//   if (typeof err === 'object' && err && 'message' in (err as any)) {
//     const e = err as any;
//     return {
//       status: e.code ?? e.status,
//       message: String(e.message),
//       // code: e.type ?? e.name,
//       // data: e,
//     };
//   }
//   return { message: 'Unknown error' };
// };

export const toRTKError = (err: unknown) => {
  if (typeof err === 'object' && err && 'message' in (err as any)) {
    const e = err as any;
    return {
      status: e.code ?? e.status ?? 500,
      data: e.message ?? 'Erreur inconnue',
    };
  }
  return { status: 500, data: 'Erreur inconnue' };
};

export type Paginated<T> = {
  items: T[];
  total: number;
  hasMore: boolean;
};
