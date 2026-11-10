5. Access Modifiers in TypeScript 

Access modifiers in TypeScript are used to control how class properties and methods can be accessed. They help protect data and make code more organized and secure. TypeScript provides four important modifiers: public, private, protected, and readonly.

- Public: A public property or method can be accessed from anywhere, both inside and outside the class. It is the default access modifier in TypeScript.

- Private: A private property or method can only be accessed within the class where it is declared. It cannot be accessed directly outside the class or from child classes.

- Protected: A protected property or method can be accessed inside its own class and its child classes, but not directly from outside.

- Readonly: A readonly property can be assigned a value when it is declared or inside the constructor. After that, its value cannot be changed.