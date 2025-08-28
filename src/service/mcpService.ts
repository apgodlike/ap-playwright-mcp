import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

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


export const playwrightMcpService = async () =>{


await client.connect(transport);

// Example: list available tools from Playwright MCP
const tools = await client.listTools();
console.log("Tools:", tools);

// Example: call one of the Playwright tools
const result = await client.callTool({
  name: "playwright_navigate",   // e.g. "navigate" is exposed by Playwright MCP
  arguments: {
    url: "https://example.com"
  }
});
console.log("Navigate Result:", result);
}
