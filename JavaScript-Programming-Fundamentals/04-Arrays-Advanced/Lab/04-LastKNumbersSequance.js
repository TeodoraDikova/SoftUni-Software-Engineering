function lastKNums(n, k) {
let sequence = [1];

    for (let i = 1; i < n; i++) {
        let startIndex = Math.max(0, i - k);
        let sum = 0;

        for (let j = startIndex; j < i; j++) {
            sum += sequence[j];
        }

        sequence.push(sum);
    }

    console.log(sequence.join(' '));
}