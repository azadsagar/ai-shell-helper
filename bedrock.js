import { BedrockAgentRuntimeClient, InvokeFlowCommand } from "@aws-sdk/client-bedrock-agent-runtime";
const aws_region = process.env.AWS_REGION || "us-east-1"

const client = new BedrockAgentRuntimeClient({ region: aws_region });

export const infer_bedrock = async (input) => {

    if (process.env.BEDROCK_FLOW_IDENTIFIER === undefined) {
        throw new Error("# Environment variable BEDROCK_FLOW_IDENTIFIER is undefined")
    }

    if (process.env.BEDROCK_FLOW_ALIAS === undefined) {
        throw new Error("# Environment variable BEDROCK_FLOW_ALIAS is undefined")
    }

    const payload = { // InvokeFlowRequest
        flowIdentifier: process.env.BEDROCK_FLOW_IDENTIFIER,
        flowAliasIdentifier: process.env.BEDROCK_FLOW_ALIAS,
        inputs: [
            { // FlowInput
                nodeName: "FlowInputNode", // required
                //nodeOutputName: "STRING_VALUE",
                content: { // FlowInputContent Union: only one key present
                    document: input,
                },
                nodeOutputName: "document",
            },
        ],
        enableTrace: false,
        //executionId : "myexecid"
    };
    const command = new InvokeFlowCommand(payload);
    const response = await client.send(command);

    let parsed = null;

    if (response.responseStream) {
        for await (const event of response.responseStream) {
            if (event.flowOutputEvent) {
                const docStr = event.flowOutputEvent.content?.document || undefined
                if (docStr) {
                    try {
                        parsed = JSON.parse(docStr);
                        //return parsed;
                    } catch (err) {
                        throw new Error(`# ❌ Failed to parse document content as JSON: ${err.message}`);
                    }
                }
            }

        }
    }

    return parsed;

}