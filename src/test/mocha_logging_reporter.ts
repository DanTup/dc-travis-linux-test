import { ITest, reporters } from "mocha";

export class LoggingReporter extends reporters.Base {
	constructor(runner: any, options: any) {
		super(runner);
		runner.on("start", () => {

			// tslint:disable-next-line: no-empty
			runner.on("test", (test: ITest) => {

			});

			// tslint:disable-next-line: no-empty
			runner.on("pending", (test: ITest) => {

			});

			// tslint:disable-next-line: no-empty
			runner.on("pass", (test: ITest) => {

			});

			// tslint:disable-next-line: no-empty
			runner.on("fail", (test: ITest) => {

			});

			// runner.once("end", () => { });
		});
	}
}
