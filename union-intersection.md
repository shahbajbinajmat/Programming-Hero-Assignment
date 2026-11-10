7. Union (|) and Intersection (&) Types in TypeScript

Union Type (|):
A union type allows a variable to hold one of several specified types. It means OR. For example, a variable can be either a string or a number.

Intersection Type (&):
An intersection type combines two or more types into one. It means AND. The resulting object must contain all the required properties from the combined types.

Providing a practical example below

type Person = {
  name: string;
};

type Employee = {
  salary: number;
};

type Staff = Person & Employee;

type Role = "Manager" | "Developer";

const staff: Staff = {
  name: "Alice",
  salary: 50000
};

const role: Role = "Manager";
console.log(staff);
console.log(role);

*Output*
{ name: 'Alice', salary: 50000 }
Manager