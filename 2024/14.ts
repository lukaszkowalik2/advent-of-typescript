type PerfReview<T> = T extends AsyncGenerator<infer K, any, any> ? K : never;

