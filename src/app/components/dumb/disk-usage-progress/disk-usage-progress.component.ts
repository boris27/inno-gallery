import { Component, ChangeDetectionStrategy, OnChanges, Input, SimpleChanges } from '@angular/core';
import { DiskUsageInterface } from '../../../models/disk-usage.interface';
import { byteMetricTransform } from '../../../helpers/byte-metric.helper';

@Component({
    selector: 'app-disk-usage-progress',
    templateUrl: './disk-usage-progress.component.html',
    styleUrls: ['./disk-usage-progress.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiskUsageProgressComponent implements OnChanges {
    @Input() diskUsage: DiskUsageInterface;

    public currentUsage: string;
    public totalUsage: string;
    public percentUsage: number;

    ngOnChanges({diskUsage}: SimpleChanges): void {
        if (diskUsage && diskUsage.currentValue) {
            const {currentUsageByte, totalUsageByte} = this.diskUsage;

            this.currentUsage = byteMetricTransform(currentUsageByte);
            this.totalUsage = byteMetricTransform(totalUsageByte);
            this.percentUsage = currentUsageByte / totalUsageByte * 100;
        }
    }

    public addDiskSize(): void {
        console.log('click on addDiskSize button');
    }
}
