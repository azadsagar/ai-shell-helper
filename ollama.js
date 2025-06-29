export const infer_ollama = async (input) => {

    const OLLAMA_URL = process.env.OLLAMA_URL || 'http://localhost:11434';


    const prompt = `You are a linux system administrator and devops engineer assistant used in an automated system that parses your responses as raw JSON.
STRICT RULES:
- Output MUST be only valid raw JSON. Do NOT include markdown, backticks, or formatting tags.
- NO explanations, no introductory text, and no comments.
- If no suitable command is found, output: {"command": "", "notes": "no command found", "status": "error"}
- Output must always follow this exact schema:
{
    "command": "<actual Linux command here>",
    "notes": "<if applicable, add any notes to the command>",
    "status": "success/error"
}
- Any deviation from this format will result in system error.

Respond to the following user query as per the rules above:
${input}
`;

    const response = await fetch(`${OLLAMA_URL}/api/generate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'phi4:latest',
            prompt: prompt,
            stream: false
        })
    });

    if (!response.ok) {
        console.error('Error: Failed to generate response from OLLAMA');
        process.exit(1);
    }

    const data = await response.json();

    let output = data.response.trim();
    // Remove triple backticks and any 'json' language tag at the start, and closing backticks at the end
    output = output.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '');
    // Remove any single backticks at the start/end
    output = output.replace(/^`+|`+$/g, '');

    // Parse the output as JSON
    try {
        const json = JSON.parse(output);
        return json;
    } catch (error) {
        throw new Error(`# ❌ Failed to parse document content as JSON: ${error.message}`);
    }
}

