import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';

import { NativeScriptSplineChartItem } from '../../../../kirby/components/nativescript-only/spline-chart/spline-chart.component.tns-only';

@Component({
  selector: 'kirby-nativescript-spline-chart-example',
  templateUrl: './spline-chart-example.component.tns-only.html',
  styleUrls: ['./spline-chart-example.component.tns-only.scss']
})

export class NativeScriptSplineChartExampleComponent implements OnInit {
  public chartItems$: Observable<NativeScriptSplineChartItem[]>;
  buttonText = 'View details';
  title = 'Your investments';

  constructor() { }

  ngOnInit() {
    // this.chartItems$ = this.mapToChartItems(this.getMockData()).pipe(delay(500));
    this.chartItems$ = this.mapCategoricalToChartItems(this.getCategoricalSource()).pipe(delay(500));
  }

  getCategoricalSource(): { Country: string, Amount: number, SecondVal: number, ThirdVal: number, Impact: number, Year: number }[] {
    return [
      { Country: 'Germany', Amount: 15, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
      { Country: 'France', Amount: 13, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
      { Country: 'Bulgaria', Amount: 24, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
      { Country: 'Spain', Amount: 11, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
      { Country: 'USA', Amount: 18, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
    ];
  }

  // tslint:disable-next-line:max-line-length
  mapCategoricalToChartItems(data: { Country: string, Amount: number, SecondVal: number, ThirdVal: number, Impact: number, Year: number }[]): Observable<NativeScriptSplineChartItem[]> {
    const distributions$ = of(data);
    return distributions$.pipe(map(distributions => {
      return distributions.map(distribution => {
        return new NativeScriptSplineChartItem(
          distribution.Country,
          distribution.Amount
        );
      });
    }));
  }

  getMockData(): { rate: number, indexRate: number, rateDate: string, rateTime: string, sales: number }[] {
    return [
      {
        'rate': 120.78,
        'indexRate': 100,
        'rateDate': '15.01.2018',
        'rateTime': '17.20.00',
        'sales': 142696270.36
      },
      {
        'rate': 124.55,
        'indexRate': 103.12,
        'rateDate': '22.01.2018',
        'rateTime': '17.20.00',
        'sales': 189818901.94
      },
      {
        'rate': 129.64,
        'indexRate': 107.33,
        'rateDate': '29.01.2018',
        'rateTime': '17.20.00',
        'sales': 279012912.22
      },
      {
        'rate': 112.57,
        'indexRate': 93.2,
        'rateDate': '05.02.2018',
        'rateTime': '17.20.00',
        'sales': 92265328.39
      },
      {
        'rate': 115.39,
        'indexRate': 95.53,
        'rateDate': '13.02.2018',
        'rateTime': '17.20.00',
        'sales': 157504689.35
      },
      {
        'rate': 117.73,
        'indexRate': 97.47,
        'rateDate': '19.02.2018',
        'rateTime': '17.20.00',
        'sales': 188752925.07
      },
      {
        'rate': 112.73,
        'indexRate': 93.33,
        'rateDate': '02.03.2018',
        'rateTime': '17.20.00',
        'sales': 45093418.21
      },
      {
        'rate': 114.83,
        'indexRate': 95.07,
        'rateDate': '05.03.2018',
        'rateTime': '17.20.00',
        'sales': 244000674.9
      },
      {
        'rate': 129.02,
        'indexRate': 106.82,
        'rateDate': '14.03.2018',
        'rateTime': '17.20.00',
        'sales': 48753647.45
      },
      {
        'rate': 116.28,
        'indexRate': 96.27,
        'rateDate': '20.03.2018',
        'rateTime': '17.20.00',
        'sales': 2159780.28
      },
      {
        'rate': 130.9,
        'indexRate': 108.37,
        'rateDate': '26.03.2018',
        'rateTime': '21.20.00',
        'sales': 1047200
      },
      {
        'rate': 137.1,
        'indexRate': 113.51,
        'rateDate': '06.04.2018',
        'rateTime': '21.20.00',
        'sales': 685500
      },
      {
        'rate': 179.7,
        'indexRate': 148.77,
        'rateDate': '18.05.2018',
        'rateTime': '17.20.00',
        'sales': 65931181.18
      },
      {
        'rate': 197.88,
        'indexRate': 163.83,
        'rateDate': '01.06.2018',
        'rateTime': '21.20.00',
        'sales': 158307.2
      },
      {
        'rate': 192.5,
        'indexRate': 159.38,
        'rateDate': '04.06.2018',
        'rateTime': '21.20.00',
        'sales': 10399.7
      },
      {
        'rate': 211.2,
        'indexRate': 174.86,
        'rateDate': '18.06.2018',
        'rateTime': '21.20.00',
        'sales': 72533.2
      },
      {
        'rate': 208,
        'indexRate': 172.21,
        'rateDate': '02.07.2018',
        'rateTime': '17.20.00',
        'sales': 128100936.11
      },
      {
        'rate': 214,
        'indexRate': 177.18,
        'rateDate': '09.07.2018',
        'rateTime': '21.20.00',
        'sales': 85387.2
      },
      {
        'rate': 217.2,
        'indexRate': 179.83,
        'rateDate': '18.07.2018',
        'rateTime': '17.20.00',
        'sales': 913766
      },
      {
        'rate': 249.44,
        'indexRate': 206.52,
        'rateDate': '26.07.2018',
        'rateTime': '17.20.00',
        'sales': 3991
      },
      {
        'rate': 256.6,
        'indexRate': 212.45,
        'rateDate': '02.08.2018',
        'rateTime': '17.20.00',
        'sales': 769.8
      },
      {
        'rate': 256.6,
        'indexRate': 212.45,
        'rateDate': '07.08.2018',
        'rateTime': '17.20.00',
        'sales': 0
      },
      {
        'rate': 251.69,
        'indexRate': 208.38,
        'rateDate': '30.08.2018',
        'rateTime': '17.20.00',
        'sales': 365955.95
      },
      {
        'rate': 252.6,
        'indexRate': 209.13,
        'rateDate': '06.09.2018',
        'rateTime': '17.20.00',
        'sales': 3220000
      },
      {
        'rate': 179.4,
        'indexRate': 148.53,
        'rateDate': '13.09.2018',
        'rateTime': '17.20.00',
        'sales': 53820
      },
      {
        'rate': 180,
        'indexRate': 149.03,
        'rateDate': '19.09.2018',
        'rateTime': '17.20.00',
        'sales': 180
      },
      {
        'rate': 184.8,
        'indexRate': 153,
        'rateDate': '24.09.2018',
        'rateTime': '21.20.00',
        'sales': 1887121.2
      },
      {
        'rate': 174.6,
        'indexRate': 144.55,
        'rateDate': '02.10.2018',
        'rateTime': '17.20.00',
        'sales': 31977701.2
      },
      {
        'rate': 179.9,
        'indexRate': 148.94,
        'rateDate': '08.10.2018',
        'rateTime': '21.20.00',
        'sales': 26664169.61
      },
      {
        'rate': 132.84,
        'indexRate': 109.98,
        'rateDate': '15.10.2018',
        'rateTime': '21.20.00',
        'sales': 14070362.73
      },
      {
        'rate': 137.5,
        'indexRate': 113.84,
        'rateDate': '22.10.2018',
        'rateTime': '21.20.00',
        'sales': 41679503.69
      },
      {
        'rate': 131,
        'indexRate': 108.46,
        'rateDate': '30.10.2018',
        'rateTime': '17.20.00',
        'sales': 2631044.62
      },
      {
        'rate': 128.91,
        'indexRate': 106.73,
        'rateDate': '06.11.2018',
        'rateTime': '17.20.00',
        'sales': 1346825.79
      },
      {
        'rate': 142.68,
        'indexRate': 118.13,
        'rateDate': '12.11.2018',
        'rateTime': '21.20.00',
        'sales': 1142706.02
      },
      {
        'rate': 117.55,
        'indexRate': 97.32,
        'rateDate': '20.11.2018',
        'rateTime': '17.20.00',
        'sales': 572140.15
      },
      {
        'rate': 135.4,
        'indexRate': 112.1,
        'rateDate': '26.11.2018',
        'rateTime': '21.20.00',
        'sales': 358407.35
      },
      {
        'rate': 133.05,
        'indexRate': 110.15,
        'rateDate': '03.12.2018',
        'rateTime': '21.20.00',
        'sales': 1279580.48
      },
      {
        'rate': 153.4,
        'indexRate': 127,
        'rateDate': '12.12.2018',
        'rateTime': '17.20.00',
        'sales': 1073.8
      },
      {
        'rate': 119.7,
        'indexRate': 99.1,
        'rateDate': '18.12.2018',
        'rateTime': '17.20.00',
        'sales': 340455.11
      },
      {
        'rate': 152.8,
        'indexRate': 126.51,
        'rateDate': '03.01.2019',
        'rateTime': '17.20.00',
        'sales': 64625.8
      },
      {
        'rate': 164,
        'indexRate': 135.78,
        'rateDate': '07.01.2019',
        'rateTime': '21.20.00',
        'sales': 26896
      }
    ];
  }

  // tslint:disable-next-line:max-line-length
  mapToChartItems(data: { rate: number, indexRate: number, rateDate: string, rateTime: string, sales: number }[]): Observable<NativeScriptSplineChartItem[]> {
    const distributions$ = of(data);
    return distributions$.pipe(map(distributions => {
      return distributions.map(distribution => {
        return new NativeScriptSplineChartItem(
          distribution.rateDate,
          distribution.rate
        );
      });
    }));
  }

}