import * as path from "path";
import * as vstest from "vscode-test";

let exitCode = 0;
const cwd = process.cwd();

async function runAllTests(): Promise<void> {

	const dartSdkPath = process.env.DART_PATH_SYMLINK || process.env.DART_PATH || process.env.PATH;

	if (!dartSdkPath)
		throw new Error("Could not find Dart SDK");

	try {
		const testFolder = "dart_only";
		const workspaceFolder = "hello_world";

		console.log("##### RUNNING #######################################################");

		const res = await vstest.runTests({
			extensionDevelopmentPath: cwd,
			extensionTestsEnv: process.env,
			extensionTestsPath: path.join(cwd, "out", "src", "test", testFolder),
			launchArgs: [
				path.isAbsolute(workspaceFolder)
					? workspaceFolder
					: path.join(cwd, "src", "test", "test_projects", workspaceFolder),
			],
		});
		exitCode = exitCode || res;

		console.log("\n\n");

	} catch (e) {
		exitCode = 1;
		console.log("FAILED!");
		console.error("FAILED!");
		console.error(e);
	}
}

runAllTests().then(() => process.exit(exitCode));
