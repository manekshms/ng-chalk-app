# NgChalkApp
NgChalk is a UI Component library.

## Example
[https://manekshms.github.io/ng-chalk-app/ng-chalk-example/](https://manekshms.github.io/ng-chalk-app/ng-chalk-example/)

## Installation
```bash
npm i ng-chalk
```
## Usage

Import NgChalkModule in your main module

```ts
// Import library module
import { NgChalkModule } from 'ng-chalk';

@NgModule({
  imports: [
    NgChalkModule
  ]
})
export class AppModule { }
```
Template usage  

```html
<ng-chalk color="white"  borderVal="2px solid DarkBlue " bg="CornflowerBlue ">Hai there</ng-chalk>
```

### Component properties 

**color:** Text color (Example: red, #000, rgba(255,255,255))  
**borderVal:** border style (Example: 2px solid red)  
**bg:** Text background color (Example: red, #000, rgba(233,123, 123))  

