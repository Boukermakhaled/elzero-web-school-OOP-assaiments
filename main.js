// //assaiment one
// class Car{
//     constructor(name,model,price){
//         this.name=name;
//         this.model=model;
//         this.price=price;
//     }
//     run(){
//         return "Car is running now";
//     }
//     stop(){
//         return "Car is stopped now";
//     }
// }

// let CarOne = new Car("Golf 7","VolxesWagen",14000);
// let CarTwo = new Car("G-class","Mercedes-Benz",14000);
// let CarThree = new Car("GTS 911","Porche",54000);

// console.log(`Car one name is ${CarOne.name} and model ${CarOne.model} with price of ${CarOne.price}$`);
// console.log(CarOne.run());


// //assaiment two
// class Phone {
//     constructor(name, serial, price) {
//       this.name = name;
//       this.serial = serial;
//       this.price = price;
//     }
//   }
  
//   // Write Tablet Class Here
//   class Tablet extends Phone{
//     constructor(name,serial,price,size){
//         super(name,serial,price);
//         this.size=size || "Unknown";
//     }
//     fullDetails(){
//         return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`
//     }
//   }
//   let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
//   let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
//   let TabletThree = new Tablet("LG", 250450650, 650);
  
//   console.log(`${TabletOne.fullDetails()}`);
//   // iPad Serial is 100200300 And Size Is 12.9
  
//   console.log(`${TabletTwo.fullDetails()}`);
//   // Nokia Serial is 350450650 And Size Is 10.5
  
//   console.log(`${TabletThree.fullDetails()}`);
//   // LG Serial is 250450650 And Size Is Unknown

// //assaiment three

// // Edit The Class
// class User {
//   constructor(name, card) {
//       this.name = name;
//       this._card = this._formatCardNumber(card);
//   }

//   // طريقة خاصة لتنسيق رقم البطاقة
//   _formatCardNumber(cardNumber) {
//       // إزالة جميع المسافات أو العلامات الموجودة مسبقًا
//       let cleaned = cardNumber.replace(/\D/g, '');

//       // تنسيق الرقم بحيث يظهر كما في الطلب
//       return cleaned.match(/.{1,4}/g).join('-');
//   }

//   // Getter للوصول إلى رقم البطاقة
//   get card() {
//       return this._card;
//   }

//   // لا يوجد Setter لضمان عدم إمكانية التعديل بعد التعيين
// }
// const user1 = new User("Alice", "1234567812345678");
// const user2 = new User("Bob", "1234-5678-1234-5678");
// const user3 = new User("Charlie", "1234 5678 1234 5678");

// console.log(user1.card); // Output: 1234-5678-1234-5678
// console.log(user2.card); // Output: 1234-5678-1234-5678
// console.log(user3.card); // Output: 1234-5678-1234-5678

//assaiment four 

// Write Your Code Here
String.prototype.addLove=function(){
  return `I love ${this} web school`;
}

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School