export declare class Logspeed {
    private name;
    private startTime;
    private lastCheckpointTime;
    private checkpoints;
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
    constructor();
    /**
     * @method start
     * @description Starts a new logging session with the provided name.
     * @param {string} name - Name of the logging session.
     */
    start(name: string): void;
    /**
     * @method checkpoint
     * @description Records a checkpoint with the given label and logs the elapsed time.
     * @param {string} label - Label of the checkpoint.
     */
    checkpoint(label: string): void;
    /**
     * @method report
     * @description Generates a performance report with all the recorded checkpoints and total time.
     */
    report(): void;
}
