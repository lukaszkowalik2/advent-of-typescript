type FormatNames<T extends string[][]> = {
  [K in keyof T]: {
    count: T[K][2] extends `${infer N extends number}` ? N : never;
    rating: T[K][0] extends "Liam" | "Aala" ? "naughty" : "nice";
    name: T[K][0];
  };
};
