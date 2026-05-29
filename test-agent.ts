import { runTMOAgent } from "./src/agents/tmo-agent";

async function testAgent() {
  console.log("🧪 Testing TMO AI Agent...\n");

  const testTask = "Calculate the compound interest on $10,000 at 5% annual rate for 10 years";

  try {
    const result = await runTMOAgent(testTask, "analysis");

    console.log("✅ Test completed successfully!");
    console.log("Task ID:", result.taskId);
    console.log("Status:", result.status);
    console.log("Plan:", result.plan);
    console.log("Results:", result.results);
    console.log("Metadata:", result.metadata);
  } catch (error) {
    console.error("❌ Test failed:", error);
    process.exit(1);
  }
}

testAgent();
