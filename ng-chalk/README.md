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
**borderRadius** Border radius (Example: 2px)  
**padding** Padding (Example: 3px )  
**template** Template name of inbuilt template or custom template name(Example: danger)  


### Adding Configuration to NgChalk
By default ngChalk has some default configuration like padding 2px around the text. 
To change default configuration add a configuration by NgChalk.forRoot(--your configuration--)  

```ts
// Import library module
import { NgChalkModule } from 'ng-chalk';

@NgModule({
  imports: [
    NgChalkModule.forRoot({
      defaultPadding: '5px'
    })
  ]
})
export class AppModule { }
```

### Inbuilt templates
By default NgChalk comes with some default templates which is listed below
* danger
* warning
* info
* success

**Usage Example**  
```html
<ng-chalk template="danger"><ng-chalk>
```  
### Create Custom template
There are already some default inbuilt template comes with NgChalk but you can also add 
your own template theme and it is very easy  

**Create a Template class file**
```ts
import { NgChalkTemplate } from 'ng-chalk';
// all these properties in the class are optional
export class FooTemplate {
    color:String = "#cf0a11"
    bg:String = "#fdd9d9";
    padding:String = "3px";
    borderVal:String = "1px solid #ddd";
    borderRadius:String = "2px";
}
```

**Add the template in your AppModule**  
```ts
// Import library module
import { NgChalkModule } from 'ng-chalk';
import { FooTemplate } from 'foo-template.ts';

@NgModule({
  imports: [
    NgChalkModule.forRoot({
      templates: [
        { name: 'foo', template: new FooTemplate()}
      ]
    })
  ]
})
export class AppModule { }
```
**Usage of custom template in html file**  
```html
<ng-chalk template="foo">Hai It's foo template<ng-chalk>
```