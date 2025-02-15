function merge(intervals: number[][]): number[][] {
    if (intervals.length < 2) {
        return intervals;
    }

    intervals.sort((a, b) => a[0] - b[0]);

    let result: number[][] = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let recent = result[result.length - 1];

        if (recent[1] >= intervals[i][0]) {
            recent[1] = Math.max(recent[1], intervals[i][1])
        } else {
            result.push(intervals[i]);
        }
    }

    return result;
};