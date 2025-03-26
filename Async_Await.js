// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
        console.log(value);
    }
}

// Task 03: Awaiting a Call with Error Handling
async function awaitCall() {
    try {
        // Simulate API call with a random success/failure
        const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.3) { // 70% success rate
                    resolve({ data: "Success! Retrieved API data" });
                } else {
                    reject(new Error("API request failed"));
                }
            }, 1000);
        });
        
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(`Error: ${error.message}. Please try again later.`);
        return null;
    }
}

// Task 04: Awaiting Concurrent Requests
async function concurrentRequests() {
    try {
        const [response1, response2] = await Promise.all([
            // Simulate first API call
            new Promise(resolve => 
                setTimeout(() => resolve({ data: "First API response" }), 1000)
            ),
            // Simulate second API call
            new Promise(resolve => 
                setTimeout(() => resolve({ data: "Second API response" }), 1500)
            )
        ]);

        console.log("Combined results:", {
            first: response1.data,
            second: response2.data
        });
        return { first: response1.data, second: response2.data };
    } catch (error) {
        console.error("One or more requests failed:", error.message);
        return null;
    }
}

// Test the functions
async function runTests() {
    console.log("Testing Task 01 - Iterating with Async/Await:");
    await iterateWithAsyncAwait([1, 2, 3, 4, 5]);
    
    console.log("\nTesting Task 03 - Awaiting Call with Error Handling:");
    await awaitCall();
    
    console.log("\nTesting Task 04 - Concurrent Requests:");
    await concurrentRequests();
}

runTests();