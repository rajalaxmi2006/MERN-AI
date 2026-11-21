# CSS Selectors 


   - A CSS selector is a pattern used to select one or more HTML element so that css styles can be applied to them.
   

```css
    syntax: 

    selector{
        property:value;
    } 
     ex: 
     p{

     color: red;
     }    
```

## Types of selectors :

 1. Universal selector(*)
    - It selects all html elements.

 2. Type selector(all html tags h1,h2,p...)

 3. Class selector(.)
    - `class="heading"`
    - To select same class elements.

 4. ID selector(#)
    - `id="para"`
    - For unique id 


 5. Attribute selector 
    - To select input[] type attributes
 
 6. Descendant selector(div p h1) 

 ```html
     <div> 
       <p>
       <p>
       <h1>
       <h2>
    </div>  
```
    - Select every elements inside/nested that div tag 
 
 7. Child selector(>)

```html
     <div> 
       <p>
       <p>
       <h1>
       <h2>
    </div>  
```
   - Only direct child(div>p)

 8. Adjacent sibling selector(+)

    - Select the first sibling element

 9. General sibling selector(~)
    
    - Select all the sibling element

 10. Pseudo-class selector 
    
```js
    // a:hover
    // a:focus
    // a:active
    // a:checked
    // a:disabled
    // a:visited
```
11. Pseudo-element selector 
```js
    // a::before
    // a::after
    // a::first-letter
```
12. Grouping selector(p,h1,h2)

```html
     <div> 
       <p>
       <p>
       <h1>
       <h2>
    </div>  
```