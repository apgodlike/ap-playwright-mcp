import { postopenAiRequestDto } from "../dto/request/postopenAiRequestDto";
import { getMcpToolsService, playwrightMcpService } from "../service/mcpService";
import { openAiApiRequest } from "../service/openAiService";
import { postAiResponse } from "../types/postAiResponse";
import { Request, Response } from "express";
import fs from "fs";
import path from "path";


export interface openAiPayload {
  model: string;
  // messages: [{ role: string; content: string }];
  messages: { role: string; content: string|object ; tool_call_id?:string}[];
  tools:{type:string ; function:{ name: string; description: string; parameters: object }}[];
  required?: string[];

}

export interface LogContent {
  type: 'text';
  text: string;
}

export interface LogEntry {
  content: LogContent[];
  isError: boolean;
}

export interface ToolDefinition {
  name: string;
    description?: string; // optional now
    inputSchema: {
      type: "object";
      properties?: Record<string, any>;
      required?: string[];
  };
}
export const getAiResponse = async (req: Request, res: Response) => {
  try {
    // await playwrightMcpService();
    const payload = postopenAiRequestDto.parse(req.body);
    const tools:ToolDefinition[] = await getMcpToolsService();

    const filteredTools = tools.map(tool => ({
      type: "function",
      function: {
        name: tool.name,
        description: tool.description || "No description available",
        parameters:{
          type: "object",
          properties: tool.inputSchema?.properties || {},
          required: tool.inputSchema?.required || []
        }
      },
    }));

    
    
    const openAiPaylaod: openAiPayload = {
      model: "gpt-5-nano",
      messages: [
        {
          role: "system",
          content: "You can use Playwright automation tools to help the user."
        },
        {
          role: "user",
          content: payload.message
        }
      ],
      tools: filteredTools,
      // messages: [{ role: "user", content: payload.message }],
      
    };
    let count = 0;
    while(true){
      count ++;
      console.log("Iteration:", count);
      console.log("openAiPaylaod: ", openAiPaylaod.messages);
       const jsonString = JSON.stringify(openAiPaylaod, null, 2);
      //  const filename = path.join(__dirname, `openAiPayload${count}.json`);
       const filename = path.join("C:/Users/Praveen/OneDrive/Documents/Code/js/playwright/mcp-playwright-clone/try1/", `openAiPayload${count}.json`);
    fs.writeFileSync(filename, jsonString);
    console.log(`Successfully wrote JSON to ${filename}`);

    const openAIResponse = await openAiApiRequest(openAiPaylaod);
    console.log("openAIResponse:", openAIResponse);

    const choice = openAIResponse.choices[0].message;
    console.log("Choice:", choice);

    if(choice.tool_calls && choice.tool_calls.length > 0){
      for(const toolCall of choice.tool_calls){
        const toolPayload = {name: toolCall.function.name, arguments:typeof toolCall.function.arguments === 'string' 
    ? JSON.parse(toolCall.function.arguments)
    : toolCall.function.arguments};
       

        const toolResult:LogEntry = await playwrightMcpService(toolPayload);
        console.log("Tool Result:", toolResult);
        console.log("End of iteration:", count);
        const toPush = choice;
        toPush.content = toPush.content || "";
        openAiPaylaod.messages.push(toPush);
        console.log("After pushing choice, messages are:", openAiPaylaod.messages);
        // Append the tool result to the messages
        openAiPaylaod.messages.push({role: "tool", tool_call_id: toolCall.id, content: toolResult.content[0].text});
        console.log("After pushing tool result, messages are:", openAiPaylaod.messages);  

    }
  }else{

    const responseBody: postAiResponse = {
      message: openAIResponse.choices[0].message.content,
    };
    return res.status(200).json(responseBody);
  }
  
    
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Something Went Wrong", error });
  }
};

export const getMcpTools = async (req: Request, res: Response) => {
  try {
    const tools:ToolDefinition[] = await getMcpToolsService();
    return res.status(200).json(tools);
  } catch (error) {
    return res.status(500).json({ message: "Something Went Wrong", error });
  }

}