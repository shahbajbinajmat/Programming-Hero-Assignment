function multiplyValue(value : number , multiplier : number = 2): number {
        return value * multiplier
}



const processInput = (value : string | number | boolean) : string | number => {
    if (typeof value === "string") {
        return value.trim().toLowerCase()
    } else if (typeof value === "number") {
        return value * 10
    } else {
        if (value) {
            return "Active"
        } else {
            return "Inactive"
        }
    }
}



const formatCoordinate = (coordinates : readonly [number, number, string]) : string => {
    const [latitude, longtitude, location] = coordinates;
    return (`Location: ${location} (${latitude} ${longtitude})`)
}



const concatenateArrays = <T>(...arrs : T[][]) : T[] => {
    const result : T[] = [];

    for(let arr of arrs) {
        result.push(...arr);
    }
    return result;
}



const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

interface Courses {
    title : string,
    students : number,
    isPublished : boolean
}

const getPopularCourses = (Course : Courses[], minStudents : number) : Courses[] => {
    const popularCourses : Courses [] = [];
    for (let course of courses) {
        if (course.isPublished === true && course.students >= minStudents) {
            popularCourses.push(course)
        }
    }
    return popularCourses;
}



const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];

function pluckValues<T, K extends keyof T>(
  items: T[],
  key: K
): T[K][] {
    const values = [];
    for (let item of items) {
        values.push(item[key])
    }
    return values
}



class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}



async function validateAgeAsync(age: number): Promise<string> {
  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  } else {
    await new Promise<void>(resolve => setTimeout(resolve, 1000));

    return "Access Granted";
  }
}