// promises_and_fetch.js - Asynchronous JavaScript: Promises & Async/Await

// Creating a Promise
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = false;
        if (!error) {
            resolve({ username: "deekshith", role: "Software Engineer" });
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 100);
});

// Consuming with .then / .catch
promiseOne
    .then((user) => {
        console.log("Promise Resolved:", user);
        return user.username;
    })
    .then((username) => {
        console.log("Extracted Username:", username);
    })
    .catch((err) => {
        console.error("Promise Error:", err);
    })
    .finally(() => {
        console.log("Promise operation completed.");
    });

// Modern Async / Await with Fetch
async function fetchGitHubUser(handle) {
    try {
        const response = await fetch(`https://api.github.com/users/${handle}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(`GitHub User: ${data.name} (@${data.login}) - Public Repos: ${data.public_repos}`);
    } catch (error) {
        console.error("Fetch failed:", error.message);
    }
}

// Uncomment to run in Node 18+:
// fetchGitHubUser('deekshi07');
