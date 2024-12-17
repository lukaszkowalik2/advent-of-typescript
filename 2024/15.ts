type GetRoute<
	Input extends string,
	Result extends [string, number][] = [],
	DashCounter extends "-"[] = [],
> = Input extends `-${infer Rest}`
	? Result["length"] extends 0
		? GetRoute<Rest, Result, []>
		: GetRoute<Rest, Result, [...DashCounter, "-"]>
	: Input extends `${infer Item}-${infer Rest}`
		? GetRoute<Rest, [...Result, [Item, DashCounter["length"]]], ["-"]>
		: Input extends ""
			? Result
			: [...Result, [Input, DashCounter["length"]]];

