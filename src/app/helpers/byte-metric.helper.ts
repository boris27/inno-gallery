enum ByteMetric {
    B,
    KB,
    MB,
    GB,
    TB,
}

export function byteMetricTransform(value: number): string {
    let calculateValue = value;
    let counter = 0;

    while (calculateValue > 1000) {
        calculateValue /= 1024;
        counter++;
    }

    return `${Math.round(calculateValue)} ${ByteMetric[counter]}`;
}
