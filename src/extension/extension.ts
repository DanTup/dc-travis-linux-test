import * as vs from "vscode";

export function activate(context: vs.ExtensionContext, isRestart: boolean = false) {
	console.log("Activated!");
}

export async function deactivate(isRestart: boolean = false): Promise<void> {
	console.log("Deactivated!");
}
