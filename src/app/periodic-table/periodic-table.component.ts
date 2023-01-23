import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.sass'],
})
export class PeriodicTableComponent implements OnInit {
  @Input() elementsData: any;
  @Input() activeElement: string = 'hydrogen';
  @Input() currentTemp: number = 0;
  display: 'default' | 'heat' | 'ionisation' | 'eegetivity' = 'default';
  setActiveElement(name: string) {
    this.activeElement = name;
  }
  numSequence(n: number): Array<number> {
    return Array(118);
  }
  getbgColor(category: string): string {
    var color = 'bg-slate-200';
    switch (category) {
      case 'alkali metal':
        color = 'bg-green-200';
        break;
      case 'alkaline earth metal':
        color = 'bg-orange-200';
        break;
      case 'polyatomic nonmetal':
        color = 'bg-emerald-200';
        break;
      case 'diatomic nonmetal':
        color = 'bg-emerald-200';
        break;
      case 'noble gas':
        color = 'bg-green-200';
        break;
      case 'metalloid':
        color = 'bg-lime-200';
        break;
      case 'transition metal':
        color = 'bg-rose-200';
        break;
      case 'post-transition metal':
        color = 'bg-fuchsia-200';
        break;
      case 'lanthanide':
        color = 'bg-teal-200';
        break;
      case 'actinide':
        color = 'bg-blue-200';
        break;
      default:
        break;
    }
    return color;
  }
  ptIs_1(i: number) {
    return i === 1 ? 'col-start-[18]' : '';
  }
  ptIs_4(i: number) {
    return i === 4 || i === 12 ? 'col-start-[13]' : '';
  }
  ptIs_fr56_to70(i: number) {
    return i > 55 && i < 71 ? `col-start-[${i - 53}] row-start-[9]` : '';
  }
  ptIs_fr88_to102(i: number) {
    return i > 87 && i < 103 ? `col-start-[${i - 85}] row-start-[10]` : '';
  }
  ptIs_71or103(i: number) {
    return i === 71 || i === 103 ? 'col-start-[4]' : '';
  }
  getElementState(melt: number, boil: number) {
    if (melt) {
      if (this.currentTemp <= melt) {
        return 'solid';
      } else if (boil && this.currentTemp > boil) {
        return 'gas';
      } else if (this.currentTemp > melt) {
        if (boil) {
          if (this.currentTemp <= boil) {
            return 'liquid';
          } else {
            return 'gas';
          }
        } else {
          return 'unknown';
        }
      } else {
        return 'unknown';
      }
    } else {
      return 'unknown';
    }
  }
  getElementStateColor(melt: number, boil: number) {
    const statecolors = {
      solid: 'bg-violet-500',
      liquid: 'bg-pink-500',
      gas: 'bg-orange-500',
      unknown: 'bg-white',
    };
    if (melt) {
      if (this.currentTemp <= melt) {
        return statecolors.solid;
      } else if (boil && this.currentTemp > boil) {
        return statecolors.gas;
      } else if (this.currentTemp > melt) {
        if (boil) {
          if (this.currentTemp <= boil) {
            return statecolors.liquid;
          } else {
            return statecolors.gas;
          }
        } else {
          return statecolors.unknown;
        }
      } else {
        return statecolors.unknown;
      }
    } else {
      return statecolors.unknown;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
