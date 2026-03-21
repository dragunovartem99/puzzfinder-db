import { writeFileSync } from "fs";
import { get } from "https";
import { join } from "path";
import { parseString } from "xml2js";

const XML_URL =
	"https://raw.githubusercontent.com/lichess-org/lila/master/translation/source/puzzleTheme.xml";

const IGNORED = new Set(["mix", "playerGames"]);

const xml = await new Promise<string>((resolve, reject) =>
	get(XML_URL, (res) => {
		let data = "";
		res.on("data", (chunk: string) => (data += chunk));
		res.on("end", () => resolve(data));
	}).on("error", reject)
);

const parsed = await new Promise<any>((resolve, reject) =>
	parseString(xml, (err, result) => (err ? reject(err) : resolve(result)))
);

const themes: string[] = parsed.resources.string
	.map(({ $ }: { $: { name: string } }) => $.name)
	.filter((n: string) => n.endsWith("Description"))
	.map((n: string) => n.replace("Description", ""))
	.filter((t: string) => !IGNORED.has(t));

writeFileSync(
	join(import.meta.dirname, "themes"),
	`#!/bin/bash\n\nTHEMES=(\n${themes.map((t) => `\t"${t}"`).join("\n")}\n)\n`
);
