#  Some difference between interface and class are given below:

- Extend / intersection
  - interface: Can extend via extend keyword
  ~~~Example:
  interface People{
    name: string;
  }
  interface Student extend People{
    id:number;
  }
  ~~~
  - type: Can extend via intersection types(&), but not by the extend keyword
  ```Example:
  type People = {name: string}
  type Student = People & {id: number}
  ```
- Declaration using
  - interface: Can declare same interface name multiple time
  ~~~Example:
  interface People{
    name: string;
  }
  interface People{
    id:number;
  }
  ~~~
  - type: Can not support declaration
  ~~~Example
  type A = string;
  type A = number; // not possible
  ~~~
- Use case
  - interface: mainly use in object or class
  - type: mainly use in unions, tuples, primitives

---
# Example of union and intersection type in typescript

- Union: Union type is a type where variable can hold multiple types. It means variable can be any type specified in the union.
~~~Example:
type A = string | number;
const square(a: A)=>{
    return a*a;
}
console.log(square(5));
~~~
- Intersection: It is a combination of multiple types. It means variable must need to full fill all the types given in the intersection.
~~~Example:
type A = string & number;
const square(a: A)=>{
    return a*a;
}
console.log(square(5));
~~~