console.log("I am Kristy");

let a = 0, b = 1;
console.log(a,b);

a = 3
b = 4
console.log(a,b);


//1
{
    let firstName ='Kristy',lastName = 'Chen'
}

//2
{
    let firstName = 'Kristy'
    let lastName = 'Chen'
}

//3
{
    let firstName
    let lastName

    firstName = 'Kristy'
    lastName = 'Chen'
}

//4
{
    let firstName
    let lastName
    let middleName //undefined 类型
    let none = null //null 类型

    firstName = "Kristy"
    lastName = 'Chen'
    

    thisIsANumber = 76876

    //firstName = 34304

    console.log(firstName,lastName, middleName);
    console.log(thisIsANumber, typeof thisIsANumber);
    console.log(firstName, typeof firstName);
    console.log(middleName, typeof middleName);
    console.log(none, typeof none);
}

{
  let string_a = 'ABC'
  let string_b = "DEF"
  let string_c = `GHI`

  /**TODO: 这个活爱谁谁干
   * FIXME: 请务必把这个BUG修复
   */

  let string_d = "he said: \" 'defasfds'  "
  console.log(string_d);

  let string_e = "he said:" + ' "afasdfasdfds" '
  console.log(string_e);

  let string_f = `he said: " \` adfasf: 'adsfasdf' " `
  console.log(string_f);

  let string_g = `he said:
  "adsfasfase"
  afhkjajhsdkfj`

  console.log(string_g);

  let myName = "Kristy Chen"
  console.log(`Hello ${myName}`);
}

{

   // if adshjfahsldf and aflashdfs:
  //   adjflashdlf

    let a = true
    let b = false

    if(a) {
        console.log('good');
        // 它并不会走到下面去
        a = false
    } else {
        console.log('bad');
    }

    if(b) {
        console.log('bad');
    }    

    if(a) {
      console.log('good');
      // 它并不会走到下面去   
      a = false
    } else {
      console.log('bad');
      if (b) {
        console.log('b good');
      } else {
        console.log('b bad');
      }
    }
  
// if () {

  // } else if () {

  // } else if () {

  // } else if () {

  // } else {

  // }

}

{
    let obj = {
        name: "Kristy",
        age: 18,
    }
    
    let a = 1
    let b = a
    console.log(a, b);
    b = 2
    console.log(a, b);

    let obj_2 = obj
    console.log(obj, obj_2);
    obj_2.age = 30
    console.log(obj. obj_2);

    let obj_3 = { ...obj }
    console.log(obj, obj_3);
    obj_3.name = 'Ruichen'
    console.log(obj, obj_3);

    let user = {
      name: "kristy",
      age: 18,
      profile: {
        cv:'https://xxx',
        id:1111

      }
    }

  let user_2 = { ...user }
  console.log(user, user_2);
  user_2.name = "Ruichen"
  console.log(user, user_2);
  user_2.profile.id = 2222222;
  console.log(user, user_2);
}


{
  let array = [1, 2, 3, "4", true, { name: "kristy" }]
  console.log(array);
  // console.log(array.length);
  // array.length = 4;
  // console.log(array);

  // i++;
  // i = i+1;


  for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

array[1] = "shjsd"
console.log(array);

const a = 10
// a = 11
// console.log(a);

const array_1 = ["90"]
const obj_1 = { name: "Kristy" }

console.log(array_1, obj_1);
// array_1 = ["sdhsdh"]
  // obj_1 = {}
  array_1[0] = "91"
  console.log(array_1);

  array_1[100] = "92"
  console.log(array_1);
  console.log(array_1.length);

  obj_1.age = 18
  console.log(obj_1);
  obj_1['middle'] = 'none'
  console.log(obj_1);
  obj_1[100] = '100'
  console.log(obj_1);
  // console.log(obj_1.length);
}

{
    let x = 10
    let y = 3
    console.log(x + y);
    console.log(x - y);
    console.log(x * y);
    console.log(x / y);
    console.log(x % y);
    console.log(x ** y);
    console.log(Math.sqrt(100));
    console.log(x++);
    console.log(x);
    console.log(x--);
    console.log(x);
    console.log(++x);
    console.log(x);
    console.log(--x);
    console.log(x);
  }
  
  {
    let x = 10
    x++
    x = x + 5
    x += 5
    x = x - 5
    x -= 5
    x *= 5
    x /= 5
    x %= 5
    console.log(x);
    x ?? 5 
    console.log(x);//大家查一下
  }


 