import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { LogEntry } from "../controller/openAiController";

interface Tool {
  tools: {
    name: string;
    description?: string; // optional now
    inputSchema: {
      type: "object";
      properties?: Record<string, any>;
      required?: string[];
    };
  }[];
}


const transport = new StdioClientTransport({
  command: "npx",
  args: [
    "--directory",
    "C:\\Users\\Praveen\\OneDrive\\Documents\\Code\\js\\playwright\\mcp-playwright-clone\\mcp-playwright",
    "run",
    "@executeautomation/playwright-mcp-server"
  ]
});

const client = new Client({
  name: "playwright-client",
  version: "1.0.0"
});
console.log("Starting Playwright MCP Service...");

const connectToMCP = async () => {
  await client.connect(transport);
  console.log("Connected to Playwright MCP Service");
}

connectToMCP();

export const getMcpToolsService = async () => {
  const tools:Tool = await client.listTools();
  console.log("getMcptoolsServiceCalled")
  //console.log("Available Tools:", tools);
  return tools.tools;
}


export const playwrightMcpService = async (toolCall:any) =>{
  console.log("playwrightMcpService called with toolCall:", toolCall);
  

// Example: call one of the Playwright tools

// @ts-ignore
const result : LogEntry= await client.callTool(toolCall);
console.log("Navigate Result:", result);
return result
}
