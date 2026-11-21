# CSS Specificity 

- Inline(style attribute)
- Internal(style tag)
- External(Recommended)

- When multiple selectors target the same HTML element, CSS decides which one wins based on the specificity rule.

##  Selectors

1. Universal(*) - Lowest  
2. Type/Tag(p,h1...) - Low 
3. Class(.) - Medium 
4. Attribute(input[type="password"]) - Medium
5. Psuedo-Class(:hover) - Medium
6. ID Selector(#) - High
7. Inline Style(style) - Very High
8. !important - Highest 

- CSS calculates (A,B,C,D) from left to right 

  1. A = Inline
  2. B = Number of ID selectors 
  3. C = Number of Class, Attribute, Psuedo-class 
  4. D = Number of element and Psuedo-element selectors


