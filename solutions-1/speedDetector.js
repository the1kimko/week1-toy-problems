const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function speedDetector(speed) {
    const speedLimit = 70;
    const demeritPointInterval = 5;

    if (speed < speedLimit) {
        return 'ok';
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / demeritPointInterval);

        if (demeritPoints > 12) {
            return 'License suspended';
        } else {
            return `Points: ${demeritPoints}`;
        }
    }
}

const promptUserInput = () => {
    rl.question('Enter the speed: ', (speedInput) => {
        const speed = parseFloat(speedInput);

        const result = speedDetector(speed);
        console.log(result);
        rl.close();
    });
};

console.log(promptUserInput());