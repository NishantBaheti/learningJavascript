function* person() {
  let age = yield "Age please";
  console.log(age);
  let location = yield "Your age is " + age + "Your location please....";
  console.log(location);
  return location;
}
let iterator = person();
iterator.next();
// Object {value: "Age please", done: false}
iterator.next(10);
// Object {value: "Your age is 10
//              Your location please....", done: false}
iterator.next("LA");
//   Object {value: "LA", done: true}
