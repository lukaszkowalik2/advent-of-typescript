declare function DynamicParamsCurrying(...args: any[]): <T extends any[]>(...args: T) => T[0] extends string ? never : any;
