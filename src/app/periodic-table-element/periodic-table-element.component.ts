import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'app-periodic-table-element',
  templateUrl: './periodic-table-element.component.html',
  styleUrls: ['./periodic-table-element.component.sass'],
})
export class PeriodicTableElementComponent implements OnInit {
  @Input() element: any;
  @Input() environment: any;
  position: string = '';
  @Output() elementClick = new EventEmitter<number>();
  @HostBinding('class') get class() {
    return `h-12 w-12 hover:h-16 hover:w-16 hover:-m-2 hover:shadow-md hover:z-10 hover:rounded-md ${
      this.position
    } ${this.getElementDisplayState()} relative bg-opacity-80 text-black border-slate-50 dark:border-slate-900 transition-all`;
  }

  click() {
    this.elementClick.emit(this.element?.number - 1);
  }

  getElementDisplayState() {
    switch (this.environment?.display) {
      case 'default':
        return this.element?.category.replace(' ', '-');
      case 'heat':
        return this.physicalState();
      default:
        break;
    }
  }
  getElementGridPosition(i: number) {
    if (i === 2) return 'element-position-1';
    else if (i === 5 || i === 13) return 'element-position-4or12';
    else if (i > 57 && i < 72) return `element-position-55to71`;
    else if (i > 88 && i < 104) return `element-position-87to103`;
    else if (i === 72 || i === 104) return 'element-position-71or103';
    else return '';
  }

  elementClasses() {
    return `element-${
      this.environment?.display
    }-${this.getElementDisplayState()}`;
  }

  physicalState() {
    if (this.element?.melt) {
      if (this.environment?.temperature <= this.element?.melt) {
        return 'solid';
      } else if (
        this.element?.boil &&
        this.environment?.temperature > this.element?.boil
      ) {
        return 'gas';
      } else if (this.environment?.temperature > this.element?.melt) {
        if (this.element?.boil) {
          if (this.environment?.temperature <= this.element?.boil) {
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

  constructor() {}

  ngOnInit(): void {
    this.position = this.getElementGridPosition(this.element?.number);
  }
}
