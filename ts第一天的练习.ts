const arr: number[] = [1, 2, 3]
const arr2: string[] = ['1', '2']

const arr3: Array<number> = [1, 2, 3, 4]
const arr4: Array<string> = ['1', '2', '3']

arr.push(1)
console.log()
let arr5: (number | string)[] = [1, 'a']
// 联合类型
let timer: number | null = null
console.log(typeof setInterval(() => {}, 1000))
// 类型别名：为任意类型起别名
// 使用场景：当同一类型被多次使用的时候
type CustomArray = (number | string)[]

let arr6: CustomArray = [1, 'a', 3, 'b']
// 函数的类型
function add(num1: number, num2: number): number {
  return num1 + num2
}

const add2 = (num1: number, num2: number): number => {
  return num1 + num2
}
// 函数的类型还可以同事指定参数的类型和返回值的类型
// 函数类型的别名:
type AddFn = (num1: number, num2: number) => number
const add3: AddFn = (num1, num2) => {
  return num1 + num2
}
const fnn: AddFn = (a, b) => {
  return 1
}
// 如果函数没有返回值，那么，函数的类型为void
function greet(name: string): void {
  console.log('Hello', name)
}

// 如果什么都不写此时，add函数的返回值类型为：void
const add4 = () => {}
// 函数的参数可选类型
function mySlice(start?: number, end?: number): void {
  console.log('起始索引')
}
// 空对象
let person: {} = {}
// 有属性的对象
let person2: { name: string } = {
  name: '同学',
}
let person3: { name: string; sayHi(): void } = {
  name: 'jack',
  sayHi() {},
}

// 既有属性又有方法的对象
let person4: { name: string; sayHi(): void } = {
  name: 'jack',
  sayHi() {},
}
// 带有参数的方法类型
type Person = {
  greet(name: string): void
}
let Person: Person = {
  greet(name) {
    console.log(name)
  },
}
// 对象类型-箭头函数的方法类型
type Person2 = {
  greet: (name, string) => void
}
let Person2: Person2 = {
  greet() {//这里没有参数没关系，但是调用的时候会有参数
    console.log(name)
  },
}
// 对象也可以有可选的属性
type Config={
  url :string
  methods?:string
}
function myAxios (config:Config){
  console.log(config);
}
myAxios({
  url:'123'
  // methods:'post'
})

