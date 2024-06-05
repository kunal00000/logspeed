"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logspeed = void 0;
var Logspeed = /** @class */ (function () {
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
    function Logspeed() {
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
    Logspeed.prototype.start = function (name) {
        this.name = name;
        this.startTime = performance.now();
        this.lastCheckpointTime = this.startTime;
        console.log('\x1b[34m%s\x1b[0m', 'Logger started');
    };
    /**
     * @method checkpoint
     * @description Records a checkpoint with the given label and logs the elapsed time.
     * @param {string} label - Label of the checkpoint.
     */
    Logspeed.prototype.checkpoint = function (label) {
        var currentTime = performance.now();
        var elapsedTime = currentTime - this.lastCheckpointTime;
        var totalTime = currentTime - this.startTime;
        this.checkpoints.set(label, { elapsedTime: elapsedTime, totalTime: totalTime });
        this.lastCheckpointTime = currentTime;
        console.log("\u001B[30mCheckpoint\u001B[0m \u001B[33m".concat(label, "\u001B[0m \u001B[30m- ").concat(elapsedTime.toFixed(2), " ms (Total: ").concat(totalTime.toFixed(2), " ms)\u001B[0m"));
    };
    /**
     * @method report
     * @description Generates a performance report with all the recorded checkpoints and total time.
     */
    Logspeed.prototype.report = function () {
        var totalTime = performance.now() - this.startTime;
        var separator = '─'.repeat(60);
        console.log("\u250C".concat(separator, "\u2510"));
        console.log('\x1b[30m%s\x1b[0m', " Performance Report (\u001B[36m".concat(this.name, "\u001B[0m)"));
        console.log("\u251C".concat(separator, "\u2524"));
        console.log('\x1b[30m%s\x1b[0m', ' Checkpoint'.padEnd(28) +
            'Elapsed (ms)'.padEnd(15) +
            'Total (ms)'.padEnd(15));
        console.log("\u251C".concat(separator, "\u2524"));
        this.checkpoints.forEach(function (times, label) {
            console.log('\x1b[35m%s\x1b[0m', '│' +
                label.padEnd(28) +
                times.elapsedTime.toFixed(2).toString().padEnd(15) +
                times.totalTime.toFixed(2).toString().padEnd(17) +
                '│');
        });
        console.log("\u251C".concat(separator, "\u2524"));
        console.log('\x1b[30m%s\x1b[0m', ' Total time taken:'.padEnd(44) +
            totalTime.toFixed(2).toString() +
            ' ms'.padEnd(17));
        console.log("\u2514".concat(separator, "\u2518"));
    };
    return Logspeed;
}());
exports.Logspeed = Logspeed;
//# sourceMappingURL=logspeed.js.map