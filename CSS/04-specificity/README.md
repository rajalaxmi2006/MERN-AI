# CSS Specificity (Interview-Level Notes)

## Learning Objectives

By the end of this session, you will be able to:

-   Understand what CSS Specificity is.
-   Predict which CSS rule will be applied.
-   Calculate specificity manually.
-   Solve interview questions confidently.
-   Avoid common CSS specificity mistakes.

------------------------------------------------------------------------

# What is CSS Specificity?

When multiple CSS selectors target the **same HTML element**, the
browser decides which style to apply using **Specificity**.

> **Definition:** CSS Specificity is the priority system used by the
> browser to determine which CSS rule wins when multiple rules target
> the same element.

------------------------------------------------------------------------

# Why Do We Need Specificity?

``` html
<p id="message" class="highlight">
  Hello World
</p>
```

``` css
p{
    color: blue;
}

.highlight{
    color: green;
}

#message{
    color: red;
}
```

**Output:** Red

Because the **ID selector** has higher specificity than the class
selector and element selector.

------------------------------------------------------------------------

# Priority Order

``` text
Inline Style
    ↓
ID Selector
    ↓
Class / Attribute / Pseudo-class
    ↓
Element / Pseudo-element
    ↓
Universal Selector (*)
```

### Memory Trick

> **Inline Is Classy Every Weekend**

-   Inline
-   ID
-   Class
-   Element
-   Wildcard

------------------------------------------------------------------------

# Specificity Formula

Browsers calculate specificity using four values:

``` text
(A, B, C, D)
```

  Letter   Represents
  -------- ---------------------------------
  A        Inline Style
  B        ID Selectors
  C        Class, Attribute & Pseudo-class
  D        Element & Pseudo-element

The browser compares **A → B → C → D** from left to right.

------------------------------------------------------------------------

# Easy Interview Formula

``` text
Inline = 1000

ID = 100

Class = 10

Element = 1

Universal = 0
```

> This is a learning shortcut. Browsers internally compare
> `(A, B, C, D)`.

------------------------------------------------------------------------

# Specificity Table

  Selector                 Score
  ---------------------- -------
  `*`                          0
  `p`                          1
  `div p`                      2
  `.box`                      10
  `.box.active`               20
  `[type="text"]`             10
  `:hover`                    10
  `#header`                  100
  `#header .menu`            110
  `#header .menu li a`       112
  Inline Style              1000

------------------------------------------------------------------------

# Examples

## Example 1

``` css
p{
    color: blue;
}

.text{
    color: green;
}
```

``` html
<p class="text">Hello</p>
```

**Winner:** `.text`

------------------------------------------------------------------------

## Example 2

``` css
.text{
    color: green;
}

#title{
    color: red;
}
```

``` html
<p id="title" class="text">Hello</p>
```

**Winner:** `#title`

------------------------------------------------------------------------

## Example 3

``` html
<p style="color:red;" id="title">
    Hello
</p>
```

``` css
#title{
    color: green;
}
```

**Winner:** Inline Style

------------------------------------------------------------------------

# Cascade Rule

If specificity is equal, the **last declared rule wins**.

``` css
p{
    color:red;
}

p{
    color:blue;
}
```

**Output:** Blue

------------------------------------------------------------------------

# !important

``` css
p{
    color:red !important;
}

#title{
    color:green;
}
```

**Winner:** `red`

> Avoid `!important` unless absolutely necessary.

------------------------------------------------------------------------

# Specificity Cheat Sheet

  Selector               Specificity
  ---------------------- -------------
  `*`                    (0,0,0,0)
  `p`                    (0,0,0,1)
  `.box`                 (0,0,1,0)
  `.box.active`          (0,0,2,0)
  `#header`              (0,1,0,0)
  `button:hover`         (0,0,1,1)
  `input[type="text"]`   (0,0,1,1)
  `#header .menu a`      (0,1,1,1)
  Inline Style           (1,0,0,0)

------------------------------------------------------------------------

# Common Interview Questions

### Q1

Which has higher specificity?

``` css
div p
```

or

``` css
.text
```

**Answer:** `.text`

------------------------------------------------------------------------

### Q2

Which wins?

``` css
#header
```

or

``` css
.box.active.large
```

**Answer:** `#header`

------------------------------------------------------------------------

### Q3

Which wins?

``` css
button:hover
```

or

``` css
button
```

**Answer:** `button:hover`

------------------------------------------------------------------------

### Q4

Which wins?

``` css
p{
color:red;
}

p{
color:green;
}
```

**Answer:** Second rule (Cascade)

------------------------------------------------------------------------

# Best Practices

-   Prefer classes over IDs for styling.
-   Keep selectors short.
-   Avoid deep nesting.
-   Avoid overusing `!important`.
-   Understand the cascade before increasing specificity.

------------------------------------------------------------------------

# Assignments

## Assignment 1 -- Calculate Specificity

Find the specificity of:

``` css
1. p
2. div p
3. .box
4. .box.active
5. #header
6. input[type="email"]
7. button:hover
8. p::first-letter
9. #menu .item a:hover
10. body main section article p
```

------------------------------------------------------------------------

## Assignment 2 -- Predict the Winner

### Question 1

``` css
p{
color:red;
}

.text{
color:green;
}
```

``` html
<p class="text">Hello</p>
```

------------------------------------------------------------------------

### Question 2

``` css
.box{
background:blue;
}

#card{
background:red;
}
```

``` html
<div id="card" class="box"></div>
```

------------------------------------------------------------------------

### Question 3

``` css
button{
background:gray;
}

button:hover{
background:green;
}
```

------------------------------------------------------------------------

### Question 4

``` css
div p{
color:blue;
}

.note{
color:red;
}
```

``` html
<div>
  <p class="note">Hello</p>
</div>
```

------------------------------------------------------------------------

### Question 5

``` css
#header p{
color:orange;
}

.text.active{
color:purple;
}
```

``` html
<p id="header" class="text active">
Hello
</p>
```

Explain whether `#header p` matches this HTML.

------------------------------------------------------------------------

## Assignment 3 -- Debug the CSS

Without using `!important`, explain why this behaves as it does and fix
it.

``` css
p{
color:blue;
}

.content p{
color:green;
}

#message{
color:red;
}
```

``` html
<div class="content">
    <p id="message">
        Hello World
    </p>
</div>
```

------------------------------------------------------------------------

## Assignment 4 -- Real-World Refactoring

``` css
body main section article div p{
color:black;
}

#content{
color:red;
}

.text{
color:green;
}
```

``` html
<p id="content" class="text">
Hello
</p>
```

Tasks:

1.  Calculate specificity.
2.  Identify the winning rule.
3.  Refactor the CSS for maintainability.

------------------------------------------------------------------------

## Assignment 5 -- Mini Project

Build a Profile Card using:

-   Element selectors
-   Class selectors
-   ID selectors
-   Attribute selectors
-   Pseudo-classes
-   Pseudo-elements

Document:

1.  Specificity of every selector.
2.  Winning selector.
3.  Why it wins.
4.  Whether the Cascade or Specificity determined the result.
