const fs = require("fs");
const https = require("https");
const { parseString } = require("xml2js");

const XML_URL =
	"https://raw.githubusercontent.com/lichess-org/lila/master/translation/source/puzzleTheme.xml";

const OUTPUT_FILE = "automation/themes";

function fetchXML(url) {
	return new Promise((resolve, reject) =>
		https
			.get(url, (response) => {
				let data = "";
				response.on("data", (chunk) => (data += chunk));
				response.on("end", () => resolve(data));
			})
			.on("error", reject)
	);
}

function parseXML(xmlData) {
	return new Promise((resolve, reject) =>
		parseString(xmlData, (err, result) => {
			return err ? reject(err) : resolve(result);
		})
	);
}

function extractThemeNames(parsedXML) {
	const themes = [];
	const strings = parsedXML.resources.string;

	for (const string of strings) {
		const name = string.$.name;

		if (name.endsWith("Description")) {
			const baseName = name.replace("Description", "");

			if (["mix", "playerGames"].includes(baseName)) {
				continue;
			}

			themes.push(baseName);
		}
	}

	return themes;
}

function generateBashScript(themes) {
	let bashScript = "#!/bin/bash\n\nTHEMES=(\n";

	for (const theme of themes) {
		bashScript += `\t"${theme}"\n`;
	}

	bashScript += ")\n";

	return bashScript;
}

async function main() {
	try {
		const xmlData = await fetchXML(XML_URL);
		const parsedXML = await parseXML(xmlData);
		const themeNames = extractThemeNames(parsedXML);
		const bashScript = generateBashScript(themeNames);

		fs.writeFileSync(OUTPUT_FILE, bashScript);
		console.log(`Bash script saved to ${OUTPUT_FILE}`);
	} catch (error) {
		console.error(error);
	}
}

main();
