const numberArr: number[] = [1, 2, 3];
const stringArr: string[] = ["a", "b", "c"];
const undefinedArr: undefined[] = [undefined, null];
const arr: (number | string)[] = [1, "string", 2];
type lady = { name: string; age: number }[];
class Madam {
  name: string;
  age: number;
}
const girl: Madam[] = [
  { name: "刘喜", age: 28 },
  { name: "刘欢", age: 18 },
];