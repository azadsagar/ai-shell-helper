import { infer_ollama } from "./ollama.js";
import { infer_bedrock } from "./bedrock.js";

const inference_mode = process.env.INFERENCE_MODE || "ollama";

if (!(["ollama","aws_bedrock"].includes(inference_mode))){
    console.log("# Invalid INFERENCE_MODE, valid values are: ollama, aws_bedrock")
    process.exit(1);
}

// read standard input stdin

const input = await new Promise((resolve, reject) => {
    let data = '';
    process.stdin.setEncoding('utf8');

    process.stdin.on('data', chunk => data += chunk);
    process.stdin.on('end', () => resolve(data.trim()));
    process.stdin.on('error', reject);

});

if (!input) {
    console.error('# Error: No input received from stdin.');
    process.exit(1);
}


try {

    const response = inference_mode === "ollama" ? await infer_ollama(input) : await infer_bedrock(input);
    console.log(response.command);

}
catch(error) {
    console.log(error);
    process.exit(1);
}
