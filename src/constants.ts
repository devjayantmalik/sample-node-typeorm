export const __PROD__: boolean = process.env.NODE_ENV === "production";
export const __TEST__: boolean = process.env.NODE_ENV === "test";
export const __DEV__: boolean = process.env.NODE_ENV === "development" || (!__PROD__ && !__TEST__);
