type Excuse<T extends Record<string, string>> = {
  new (props: T & typeof existingExcuses): {
    [K in keyof T]: `${Extract<K, string>}: ${T[K]}`;
  }[keyof T];
};
