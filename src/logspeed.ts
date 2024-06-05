export class Logspeed {
  private name: string;
  private startTime: number;
  private lastCheckpointTime: number;
  private checkpoints: Map<string, { elapsedTime: number; totalTime: number }>;

  /**
   * @class Logspeed
   * @description Class for logging the execution speed of code blocks.
   * @example
   * ```typescript
   * const logspeed = new Logspeed();
   *
   * logspeed.start('MyFunction');
   *
   * logspeed.checkpoint('Step 1');
   * // ... Code to measure
   * logspeed.checkpoint('Step 2');
   * // ... Code to measure
   * logspeed.checkpoint('Step 3');
   *
   * logspeed.report();
   * ```
   */
  constructor() {
    this.name = '';
    this.startTime = performance.now();
    this.lastCheckpointTime = this.startTime;
    this.checkpoints = new Map();
  }

  /**
   * @method start
   * @description Starts a new logging session with the provided name.
   * @param {string} name - Name of the logging session.
   */
  start(name: string): void {
    this.name = name;
    this.startTime = performance.now();
    this.lastCheckpointTime = this.startTime;
    console.log('\x1b[34m%s\x1b[0m', 'Logger started');
  }

  /**
   * @method checkpoint
   * @description Records a checkpoint with the given label and logs the elapsed time.
   * @param {string} label - Label of the checkpoint.
   */
  checkpoint(label: string): void {
    const currentTime = performance.now();
    const elapsedTime = currentTime - this.lastCheckpointTime;
    const totalTime = currentTime - this.startTime;
    this.checkpoints.set(label, { elapsedTime, totalTime });
    this.lastCheckpointTime = currentTime;
    console.log(
      `\x1b[30mCheckpoint\x1b[0m \x1b[33m${label}\x1b[0m \x1b[30m- ${elapsedTime.toFixed(
        2
      )} ms (Total: ${totalTime.toFixed(2)} ms)\x1b[0m`
    );
  }

  /**
   * @method report
   * @description Generates a performance report with all the recorded checkpoints and total time.
   */
  report(): void {
    const totalTime = performance.now() - this.startTime;
    const separator = '─'.repeat(60);

    console.log(`┌${separator}┐`);
    console.log(
      '\x1b[30m%s\x1b[0m',
      ` Performance Report (\x1b[36m${this.name}\x1b[0m)`
    );
    console.log(`├${separator}┤`);
    console.log(
      '\x1b[30m%s\x1b[0m',
      ' Checkpoint'.padEnd(28) +
        'Elapsed (ms)'.padEnd(15) +
        'Total (ms)'.padEnd(15)
    );
    console.log(`├${separator}┤`);

    this.checkpoints.forEach((times, label) => {
      console.log(
        '\x1b[35m%s\x1b[0m',
        '│' +
          label.padEnd(28) +
          times.elapsedTime.toFixed(2).toString().padEnd(15) +
          times.totalTime.toFixed(2).toString().padEnd(17) +
          '│'
      );
    });

    console.log(`├${separator}┤`);
    console.log(
      '\x1b[30m%s\x1b[0m',
      ' Total time taken:'.padEnd(44) +
        totalTime.toFixed(2).toString() +
        ' ms'.padEnd(17)
    );
    console.log(`└${separator}┘`);
  }
}
