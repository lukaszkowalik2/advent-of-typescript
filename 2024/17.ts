const compose =
	<T1, T2, T3, T4>(f: (arg: T1) => T2, g: (arg: T2) => T3, h: (arg: T3) => T4) =>
	(a: T1): T4 => {
		return h(g(f(a)));
	};

const upperCase = <T extends string>(x: T): Uppercase<T> => x.toUpperCase() as Uppercase<T>;
const lowerCase = <T extends string>(x: T): Lowercase<T> => x.toLowerCase() as Lowercase<T>;
const firstChar = <T extends string>(x: T): FirstChar<T> => x[0] as FirstChar<T>;
const firstItem = <T extends any[]>(x: T): T[0] => x[0];
const makeTuple = <T extends string>(x: T): [T] => [x];
const makeBox = <T,>(value: T) => ({ value });

type FirstChar<T> = T extends `${infer H}${string}` ? H : never;

