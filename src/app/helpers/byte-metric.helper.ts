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

    while ((calculateValue /= 1024) > 1000) {
        counter++;
    }

    return `${Math.round(calculateValue)} ${ByteMetric[counter]}`;
}
