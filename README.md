# NgIcons

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.0.

![npm](https://img.shields.io/npm/dw/@manthanankolekar/ng-icons)
![npm](https://img.shields.io/npm/dm/@manthanankolekar/ng-icons)
![npm](https://img.shields.io/npm/dy/@manthanankolekar/ng-icons)
![npm](https://img.shields.io/npm/dt/@manthanankolekar/ng-icons)

## Installation

```bash
npm install @manthanankolekar/ng-icons
```

## Usage

Import

```typescript
import { Component } from '@angular/core';

import { NgIconsComponent } from '@manthanankolekar/ng-icons';

@Component({
   selector: 'app-root',
   imports: [
      NgIconsComponent
   ],
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'ng-icons';
}
```

Use

```html
<ng-icons name="home" [size]="32" color="blue"></ng-icons>
```

## Demo

[Stackblitz](https://stackblitz.com/edit/ng-icons-example)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
