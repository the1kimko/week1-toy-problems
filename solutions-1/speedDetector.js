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

console.log(speedDetector(150));