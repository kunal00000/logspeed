## Logspeed

Logspeed is a lightweight TypeScript library designed to help you quickly and easily track the performance of your code. It's perfect for:

- **Profiling:** Understand how long different parts of your code take to execute.
- **Optimization:** Identify bottlenecks in your code and make targeted improvements.
- **Debugging:** Pinpoint the source of performance issues by tracking checkpoints.

**Why Use Logspeed?**

- **Simple:** Logspeed is easy to use and integrate into your existing projects.
- **Clear Output:** Provides a structured and readable performance report, making it easy to analyze results.
- **Flexible:** Set multiple checkpoints to measure different stages of your code.

**How It Works**

Logspeed uses the built-in `performance.now()` function to accurately measure time intervals. It allows you to:

1. **Start a Session:** Define a name for the performance measurement session.
2. **Set Checkpoints:** Mark specific points in your code where you want to track performance.
3. **Generate a Report:** Obtain a clear summary of the time taken for each checkpoint and the overall execution duration.

**Installation**

```bash
npm install logspeed
```

**Usage Example**

```typescript
import { Logspeed } from 'logspeed';

const logspeed = new Logspeed();
logspeed.start('Dataset Processing');

logspeed.checkpoint('Step 1');
// ... Code to load the dataset ...

logspeed.checkpoint('Step 2');
// ... Code to filter the dataset ...

logspeed.checkpoint('Step 3');
// ... Code to transform the dataset ...

logspeed.report();
```

**Output:**

```
┌────────────────────────────────────────────────────────────┐
 Performance Report (Dataset Processing)
├────────────────────────────────────────────────────────────┤
 Checkpoint                  Elapsed (ms)   Total (ms)
├────────────────────────────────────────────────────────────┤
│Step 1                      12.34          12.34            │
│Step 2                      45.67          58.01            │
│Step 3                      23.09          81.10            │
├────────────────────────────────────────────────────────────┤
 Total time taken:                          81.10 ms
└────────────────────────────────────────────────────────────┘
```

**Benefits**

- **Improved Code Performance:** Logspeed helps you pinpoint performance issues and make your code more efficient.
- **Faster Development:** By understanding how your code performs, you can save time during development by avoiding unnecessary optimizations.
- **Enhanced Debugging:** Logspeed's clear output and checkpoints simplify debugging processes.

**Where I Got the Idea**

I've often found myself wanting to understand how much time tasks like image generation, LLM responses, or complex calculations take. Logspeed was created to provide a simple and effective way to measure these durations, making it easier to optimize and debug my code.

**Contribution**

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or features to suggest.
