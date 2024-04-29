//...
//proeqti  1 - Saying Hello - გამარჯობა
//console.log("Hello, " + prompt("what is your name?")+ "," +" nice to meet you!")

//proeqti 2 - Counting the Number of Characters

// let text = prompt("What is the input string")
// let lenght =text.length

// console.log(text + " has " + text.length + " characters." )

//proeqti  3 - Printing Quotes - ციტატების ბეჭდვა

// let str1 = prompt(What is the quote?)

//proeqti 4 - Indoor Voice - ჩუმი ხმა

// let text = prompt()

// console.log(text.toLowerCase())

//proeqti  5 - Playback Speed - საუბრის სიჩქარე????????????????????????

// let text = prompt("ჩაწერეთ რამე წინადადება")

// console.log(text.replaceAll(' ', '....',))

//proeqti  6 - Making Faces - სახეების მიღება
// let text = prompt("ჩაწერეთ სმაილი")

// console.log(text);
// text = text.replaceAll(":)", "🙂").replaceAll(":(", "🙁")
// console.log(text);

//proeqti 7 - თამაში Mad Libs

// let str2 = prompt("Enter a verb:")
// let str3 = prompt("Enter an adjective:")
// let str1 = prompt("Enter a noun:")
// let str4 = prompt("Enter an adverb:")

// console.log("Do you " + str2 + " your " + str3 + " " + str1 + " " + str4 + "? That's hilarious!" );

//savarjishoebi  tavi 2

// 1.დაწერეთ პროგრამა რომელიც კონსოლში გამოიტანს "Hello World" -ს.
//console.log("Hello World")

// 2.შექმენით ცვლადი და მიანიჭეთ მას რიცხვი. დაბეჭდეთ ცვლადის მნიშვნელობა.
// let num = 33

// console.log(num)

// 3.დაწერეთ პროგრამა ორი რიცხვის შესაკრებად და შედეგის გამოსატანად.
// let num1 = 2;
// let num2 = 5;

// console.log(num1 + num2)

// 4. დაწერეთ პროგრამა რომელიც გამოაკლებს ორ რიცხვს ერთმანეთს და აჩვენებს შედეგს.
// let num1 = 99;
// let num2 = 9;
// let num = num1 - num2;

// console.log(num)

// 5.დაწერეთ პროგრამა ორი რიცხვის გასამრავლებლად და შედეგის გამოსატანად.
// let num1 = 5;
// let num2 = 7;

// console.log(num1 * num2)

// 6. დაწერეთ პროგრამა ორი რიცხვის გასაყოფად და შედეგის გამოსატანად.
// let num1 = 40;
// let num2 = 8;

// console.log(num1/num2)

//7. დაწერეთ პროგრამა ორი რიცხვის გაყოფის ნაშთის გამოსათვლელად.

// let num1 = 15;
// let num2 = 2;
// let nashti = num1 % num2

// console.log(nashti)

// 8. შექმენით ცვლადი და მიანიჭეთ მას სტრიქონი. ამობეჭდეთ სტრიქონის სიგრძე.

// let str = "string"
// let lenght = str.length

// console.log(str.length)

// 9. დაწერეთ პროგრამა ორი სტრიქონის შესაერთებლად და შედეგის ჩვენების მიზნით.
// let str1 = "nino"
// let str2 = "chino"

// console.log(str1 + str2)

// 10. დაწერეთ პროგრამა სტრიქონის დიდ ასოებზე გადასაყვანად.
// let str1 = "chinoo"
// let str2 = str1.toUpperCase()

// console.log(str2)

// 11. დაწერეთ პროგრამა სტრიქონის მცირე ასოზე გადასაყვანად.
// let str = "CHINONINO"
// let str2 = str.toLowerCase()

// console.log(str2)

//პრაქტიკული2 1.მთელი რიცხვი seminari
//console.log(Number.isInteger(10))

//2, stringi ricxvad

// let num = 12
// let str = num.toString()

// console.log(typeof str)

// let str = "32"
// let num = parseInt(str)

// console.log(typeof num)

//3 not a number
// let num = 20
// let check = isNaN(num)

// console.log(check)

//4 დაამგვალებს რიცხვს

// let num = 2.9;
// let roundedNum = Math.round(num)

// console.log(roundedNum)

//5 რანდომული მთელი რიცხვი 0 დან x მდე

// let x = 10;
// let random = Math.floor(Math.random() * x);

// console.log(random)

// 6.randomuli mteli ricxvi x-dan y-mde
//  let x = 5;
//  let y = 10;
//  let range = y - x;
//  let random = Math.floor(Math.random() * range)+ x;

// console.log(random)

//7.daamgvalebs atwilads measedebamde
// let floatNum = 4.678;
// let roundedNum = floatNum.toFixed(2)

// console.log(roundedNum)

// Math.sqrt ფესვი
// console.log(Math.sqrt(16))

// //Math.abs აბსოლუტი-მოდული
// console.log(Math.abs(-10))

// ---------------------string methods-------------------------------------------------

// includes -შეიცავს, მოიცავს
// let str =  "hello nino"
// console.log(str.includes("nino"))

//startsWith/endsWith
// let str = "hello nino chino"
// let check = str.startsWith("hello")
// console.log(check)

// let str = "hello nino chino"
// let check = str.endsWith("chino")
// console.log(check)

//replace
// let str = "hello world"
// let replacedString = str.replace("hello", "goodbye")
// console.log(replacedString)

//slice / substring
// let str = "hello world"
// let slicedString = str.slice(1, 7)
// console.log(slicedString)

//concat
// let string = "hello"
// let str2 = " world"
// console.log(string.concat(str2))

// trim
// let str = "    nino  "
// let trimedString = str.trim()

// console.log(trimedString)

// padStart / padEnd
// let num = 5;
// let string = num.toString()
// let paddedStringStart = string.padStart(10, "0");
// let paddedStringEnd = string.padEnd(10, "0")
// console.log(paddedStringStart);
// console.log(paddedStringEnd)

//tavi 2 savarjishoebi--------

// 1. დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი ლუწია თუ კენტი.
// let num = 8;

// if(num = num % 2 == 0){
//     console.log("luwia")
// }else{
//     console.log("kenti")
// }

// 2.დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი დადებითია, უარყოფითი თუ ნული.
// let num = 0;

// if (num > 0){
//     console.log("dadebitia")
// }else if (num < 0){
//     console.log("uaryofitia")
// }else   {
//     console.log("0-is tolia")
// }

// 3.დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა რიცხვი გასაყოფი სხვა რიცხვზე.

// let num1 = 8;
// let num2 = 2;

// if (num1 % num2 == 0){
//     console.log("iyopa")
// }else {
//     console.log("ar iyopa")
// }

//4 დაწერეთ პროგრამა, რათა შეამოწმოთ სტრიქონი ცარიელია თუ არა.

// let str = ""

// if(str.length == 0){
//     console.log("carielia")
// }else {
//     console.log("ar aris carieli");
// }

//5.დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა სტრიქონი კონკრეტულ სიტყვას.

// let str = "hello nino chino"
// let str2 = "hhhhh"

// if (str.includes(str2)){
//     console.log("sheicavs");
// }else {
//     console.log("ar sheicavs");
// }

//6. დაწერეთ პროგრამა, რომ იპოვოთ მინიმალური ორი რიცხვიდან.

// console.log(Math.min(88, 90, 100));

// let num1 = 10;
// let num2 = 11;

// if(num1 > num2){
//     console.log("num1 maqsimaluria");
// }else if(num2 > num1){
//     console.log("num2 maqsimaluria");
// }else{
//     console.log(" ertmanetis tolia")
// }

//tavi 3 savarjishoebi--------------

//1.დაწერეთ პროგრამა რომელიც კონსოლში გამოპრინტავს რიცხვებს 0 დან 10 ის ჩათვლით.

// let num = 0
// while(num <=10){
//     console.log(num)
//     num++
// }

// for(let i=0; i<=10; i++){
//     console.log(i)
// }

//2.დაწერეთ პროგრამა წინადადებაში ყველაზე გრძელი სიტყვის სიგრძის საპოვნელად.

// function findLargest(sentence){
//    let splited=sentence.split(" ");

//    let max=splited[0];
//    for(let i=0;i<splited.length;i++){
//     if(splited[i].length>max.length){
//         max=splited[i]
//     }
//    }
// return max

// }

// console.log(findLargest("hello bitcamp front end react course"))

// 3.დაწერეთ პროგრამა, რომელიც ბეჭდავს ლუწ რიცხვებს 1-დან 20-მდე for loop-ის გამოყენებით.

//  for(let i=1; i<20; i++){
//      if(i % 2===0){
//         console.log(i)

// }

//  }

// 4. დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს შეიყვანოს რიცხვი და დაბეჭდოს "Hello!" იმდენჯერ რამდენსაც უდრის ეს შეყვანილი რიცხვი.

// let num = Number(prompt("enter the number:"))

// for (let i = 0; i < num; i++){
//     console.log("hello")
// }

// 5. დაწერეთ პროგრამა, რომელიც გამოთვლის რიცხვების ჯამს 1-დან 100-მდე for loop-ის გამოყენებით და დაბეჭდავს შედეგს.

// let sum = 0;
// for(let i = 1; i<100; i++){
//    sum = sum + i

// }
// console.log(sum)

// 6.დაწერეთ პროგრამა, რომელიც ინფუთის სახით მიიღებს თვის რიცხვს (1 იანვრისთვის, 2 თებერვლისთვის და ა.შ.) და ამობეჭდავს დღეების რაოდენობას ამ თვეში switch/case-ის გამოყენებით.

// switch (prompt("თვე")){

//     case "ianvari":
//         console.log("31 dge")
//         break;
//     case "tebervali":
//         console.log("28 dge")
//         break;
//     case "marti":
//         console.log(31 dge);
//         break;

// }

// 7. დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს გამოიცნოს საიდუმლო რიცხვი 1-დან 10-მდე. განაგრძეთ გამოცნობის მოთხოვნა, სანამ ისინი სწორად გამოიცნობენ, while loop-ის გამოყენებით.

// let secretNumber = 5

// let userNumber = Number(prompt("Guess the number"))

// while( secretNumber !== userNumber){
//     userNumber = Number(prompt("Guess the number"))
// }
// console.log("congretulations!!!");

// let secretNumber =5;
// let userNumber;

// do {
//     userNumber = Number(prompt("guess the number"))

// }while(secretNumber !== usernumber)

// console.log("congretulations!!!");

//8.დაწერეთ პროგრამა, რომელიც მიიღებს შეფასებას (A, B, C, D ან F) ინფუთის სახით და დაბეჭდავს შესაბამის შეტყობინებას switch/case-ის გამოყენებით. მაგალითად, თუ ინფუთი არის "A", უნდა დაბეჭდოს "შესანიშნავი!"

// switch (prompt("shefaseba").toUpperCase()){
// case "A":
//     console.log("shesanishnavi");
//     break;
// case "B":
//     console.log(kargi);
//     break;
// case "C":
//     console.log("sashualo")
//     break;

// }

//9.დაწერეთ პროგრამა, რომელიც მოუწოდებს მომხმარებელს შეიყვანოს პაროლი. პროგრამამ უნდა გააგრძელოს პაროლის მოთხოვნა სწორი პაროლის შეყვანამდე. სწორი პაროლის შეყვანის შემდეგ აჩვენეთ წარმატების შეტყობინება. სწორი პაროლი არის "12345".

// function guessNumber(){
// let corectPassword="12345"

// let password=prompt("please enter the password")

// while(password!==corectPassword){
//     password=prompt("please enter the password")
// }

// console.log("სწორია");

// }

// guessNumber()

//10.დაწერეთ ფუნქცია სახელად sumDigits, რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს მისი ციფრების ჯამს.

// function sumDigits(num){
//      let word=String(num)
//      let count=0

// for(let i=0; i<word.length;i++){
// count+=Number(word[i])
// }

// return count

// }

// console.log(sumDigits(54584748));

//11.დაწერეთ ფუნქცია სახელად countBs, რომელიც იღებს სტრიქონს თავის ერთადერთ არგუმენტად და აბრუნებს სტრიქონში დიდი "B" სიმბოლოების რაოდენობას.

// function countBs(word){
// count=0
// for(let i=0; i<word.length;i++){
//     if(word[i]=="B")
//     count++
// }
// return count
// }

// console.log(countBs("hello Bitcamp b try B B"));

//4 tavi.....savarjishoebi

//1 დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა რიცხვის ჯამი.

// let array=[1,2,3,4,5,6,7,8,9,10]

// function sumDigits(arr){
//     let  count=0
//     for(let i=0;i<arr.length;i++){

//         count+=arr[i]
//     }

//     return count
// }

// console.log(sumDigits(array))

//2.დაწერეთ პროგრამა მასივში რიცხვების საშუალოს საპოვნელად.

// let array=[1,2,3,4,5,6,7,8,9,10]

// function average(arr){

//     let sum=0
//     for(let i=0; i<arr.length;i++ ){
//         sum +=arr[i]
//     }
// return sum/arr.length
// }
// console.log(average(array));

//3. დაწერეთ პროგრამა რიცხვების მასივის ზრდის მიხედვით დასალაგებლად.

// let array=[5,10,2,4,99,1,3]

// function sort(arr){
//     let sorted=arr.sort((a,b)=>a-b)

//     return sorted
// }

// console.log(sort(array))

//4.დაწერეთ პროგრამა მასივში ყველაზე დიდი ელემენტის მოსაძებნად.

// let array=[6,9,2,1,5,11]

// // console.log(Math.max(...array))

// function max(arr){

// let sorted=arr.sort((a,b)=>a-b)

// return sorted[sorted.length-1]
// }
// console.log(max(array))

//5.დაწერეთ პროგრამა მასივის ყველაზე პატარა ელემენტის მოსაძებნად.

// let array=[6,9,2,1,5,11]

// function min(arr){

// let sorted=arr.sort((a,b)=>a-b)

// return sorted[0]
// }
// console.log(min(array))

//6.დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა მასივი კონკრეტულ ელემენტს.

// function includes(arr, element){
// for(let i=0;i<arr.length;i++){
//     if(arr[i]===element){
//         return arr[i]
//     }
// }

// return false
// }

// console.log(includes([1,4,7,9],9))

//7.დაწერეთ პროგრამა მასივიდან ელემენტის ამოსაღებად.

// let array=[2,4,6,8]

// console.log(array.pop())
// console.log(array);

// console.log(array.shift());

// console.log(array);

//8.დაწერეთ პროგრამა მასივში კონკრეტული ელემენტის გავრცელების რაოდენობის დასათვლელად.

// function findElement(arr,element){
// let count=0
// for(let i=0;i<arr.length;i++){

//     if(arr[i]===element){
//         count++
//     }
// }
// return count

// }

// console.log(findElement([2,4,2,6,7,2,6,7,2,7],2))

//9.დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა ლუწი რიცხვის ჯამი

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

// function isEven(arr) {

//     let count = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0)
//             count += arr[i]
//     }
//     return count

// }

// console.log(isEven(array))

//10.დაწერეთ პროგრამა მასივში სიდიდით მეორე რიცხვის მოსაძებნად.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9,10]

// function findNumber(arr){

// let sorted=arr.sort((a, b) => b-a)

// return arr[1]
// }
// console.log(findNumber(array));

//11.დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა ორი მასივი ტოლი.

// let array1=[1,2,3,4,5]
// let array2=[1,2,3,4,5,6]

// function compareArray(arr,arr2){

// for(let i=0;i<arr.length;i++){
//     if(arr.length !== arr2.length){
//         return false
//     }if(arr[i]!==arr2[i]){
//         return false
//     }
// }

// return true
// }

// console.log(compareArray(array1,array2))

//12.დაწერეთ პროგრამა რომ ორი სორტირებული მასივის შერთდეს და გახდეს ერთი მასივი რომელიც ასევე სორტირებული იქნება.

// let array1=[1,2,3,4,5]
// let array2=[4,5,6,7,8,9]

// function concatarr(arr1,arr2){

//     let result=arr1.concat(arr2)
//     let sorted=result.sort((a,b)=>a-b)
//     return sorted

// }

// console.log(concatarr(array1, array2))

//13.დაწერეთ პროგრამა სტრიქონების მასივის ანბანის მიხედვით დასალაგებლად.

// let array1=["nino","giga","samueli","wili"]
// let array2=["vaja","marina","rezo"]

// function arraySort(arr1,arr2){
//     let result=arr1.concat(arr2)
//     let sorted=result.sort((a,b)=>a-b)

//     return sorted

// }
// console.log(arraySort(array1, array2))

//14.დაწერეთ პროგრამა მრავალ მასივებს შორის საერთო ელემენტების მოსაძებნად.

// let a=[1,3,5,7,8]
// let b=[2,5,7,9,8]
// let c=[2,11,,5,6]

// 15. შექმენით ობიექტი სახელწოდებით car თვისებებით მარკის, მოდელისა და წლისთვის. დაბეჭდეთ ობიექტი კონსოლზე.

// let car= {

//     brand:"BMW",
//     model: "ffff",
//     age: 2024,
// }
// console.log(car)

//16.დაამატეთ მეთოდი car ობიექტს სახელწოდებით start, რომელიც ბეჭდავს "The car is starting!" როდესაც გამოძახება. გამოიძახეთ დაწყების მეთოდი.
// let car= {

//         brand:"BMW",
//         model: "ffff",
//         age: 2024,
//         start:function(){
//          return   "The car is starting!"
//         }
//     }
//     console.log(car.start())

//17.შექმენით სხვა ობიექტი სახელად Person სახელის, ასაკისა და ქალაქის თვისებებით. დაბეჭდეთ სახელის თვისება წერტილის გამოყენებით.

// let person={

//     name: "nino",
//     age: 29,
//     city: "tbilisi",
// }

// console.log(person.name)

//18.დაამატეთ ახალი თვისება სახელწოდებით job, Person ობიექტს და მიანიჭეთ მას მნიშვნელობა. დაბეჭდეთ განახლებული ობიექტი.

// let person={

//     name: "nino",
//     age: 29,
//     city: "tbilisi",
//     job: "umushevari",
//     person: "mshvenieri",
// }

// console.log(person)

//proeqti  10 - ქულების გამომთვლელი

// let score=prompt("Enter the student's score: ")
// let Grade

// if( score>=90 && score<=100){
//     grade ="A"
// }else if (score>=80 && score<=89){
//     grade ="B"
// }else if(score>=70 && score <=79){
//     grade ="C"
// }else if(score>=60 && score <=69){
//     grade ="D"
// }else if(score>=0 && score <=59){
//     grade ="F"
// }else {
//     console.error("invalid score")
// }
// console.log("Student\'s Score:" + score)
// console.log("Grade: " + grade)

//proeqti  11 - Simple Math - მარტივი მათემატიკა

// let question=Number(prompt("What is the first number? "))
// let question2=Number(prompt("What is the second number?"))

// console.log(question + question2)
// console.log(question2 - question)
// console.log(question * question2)
// console.log(question2 / question)

//.proeqti  12 - Einstein - აინშტაინი

// let mass=Number(prompt("enter a mass in kilograms"))
// let joules=mass * (300000000 *300000000)

// console.log(joules)

//.proeqti  13 - Tip Calculator - "ჩაის" კალკულატორი

// let question=prompt("How much was the meal? ")
// let question2=prompt("What percentage would you like to tip? ")

// function getPrice(answer){
//     return parseFloat(answer.replace('$','')).toFixed(1)
// }

// function getPercent(answer){
//     return (answer.replace("%","")/100).toFixed(2)
// }

//proeqti 14 - Retirement Calculator - საპენსიო კალკულატორი

// let muAge=prompt("What is your current age?")

// let retirementAge=prompt("At what age would you like to retire?")
// let leftAge=Number(retirementAge - muAge)

// let date = new Date()
// date.getFullYear()

// let year=(date.getFullYear())+leftAge

// console.log("You have " + leftAge + " years left until you can retire, " +  year);

// proeqti 15 - Area of a Rectangular Room - მართკუთხა ოთახის ფართობი

// let question1 = Number(prompt('What is the length of the room in feet?'))
// let question2 = Number(prompt("What is the width of the room in feet?"))

// let squareFeet = question1 * question2

// let squareMeters = squareFeet * 0.09290304

// console.log("You entered dimensions of " +  question1 + " feet by "+ question2 + " feet.");

// console.log('The area is '+ squareFeet +' square feet');

// console.log(squareMeters + " square meters");

//proeqti 16 - Pizza Party - პიცის წვეულება

// let people=Number(prompt("How many people?"))

// let pizza=Number(prompt("How many pizzas do you have?"))

// let left= (pizza * 10) % people

// let eachPerson= ((pizza * 10) - left)/people

// console.log(people +" people with " + pizza + " pizzas");

// console.log("Each person gets " + eachPerson + " pieces of pizza");

// console.log("There are "+ left + " leftover pieces.");

// // console.log(question.toFixed(1))

// // console.log(question2.toFixed(2))

// console.log("leave $" + getPrice(question)*getPercent(question2));

// 59

//-savarjishoebi- 5------------

//1 შექმენით ობიექტი სახელად Person,ობიექტს ექნება სახელი,გვარი,ასაკი.
//2 დაამატეთ ობიექტში ფუნქცია სახელად sayHello რომელიც დაპრინტავს ობიექტში სახელის values.

// let person={
//     name: "nino",
//     last_name: "mtsituridze",
//     age: 3,
// sayHello: function(){
//     console.log(this.name)
// }

// }
// //console.log(person)
// // person.sayHello()
// delete person.age

// person.job= "frontend developer"
// person.joblength=function(){
//     console.log(this.job.length)
// }
// // console.log(person)
// person.joblength()

// let count=0
// for(let key in person){
//     console.log(typeof person[key])
//     if(typeof person[key]=="function")
//     count++
// }
// console.log(count);

// if(!person.hasOwnProperty("gender")){
//     person.gender = "female"
//     console.log("gender not fount");
// }

// console.log(person)

// for(let key in person){
//     if(typeof person[key]!== "function")
//     console.log(key)
// }

// for(let key in person){

//     console.log(person[key])
// }

// //5.1 seminari
//1

// let arr=[1,2,3,4,5,6]

// let filtered=arr.filter((number) => number %2 ==1)

// console.log(filtered)

//2

// let arr =[

// {
//     name: "lasha",
//     age: 20,
// },

// {

//     name: "nika",
//     age: 17,
// },

// {

//     name: "irakli",
//     age: 18,
// },

// ]
// let filtered=arr.filter((obj)=>obj.age>=18)

// // filtered.map((person)=>console.log(person))
// let maped=filtered.map((person)=>person.age)
// console.log(maped);
// // console.log(filtered);

//3

// let arr =[1,2,3,4,5,6]

// let result=arr.reduce((a,b)=>a+b)

// console.log(result);

//5-2
//-1

// Object.prototype.ObjectLength = function (){

//     return Object.keys(this).length;
// }
// let obj={
//     name: "temo",
//     age: 18,
//     sayHallo(){
//         console.log("hiii")
//     }
// }
// console.log(obj.ObjectLength());

//3

// let numbers=[2,4,6,8]

// function isEven(arr){

//     let answer = arr.every(number => number %2 === 0)
//     return answer
// }

// console.log(isEven(numbers))

// //4

// let scores =[100, 97, 65, 78, 41]
//  function isFailed(scores){
//       return scores.some(score=> score<51)
// }

// console.log(isFailed(scores));

// let person ={

//     name: "nino",
//     lastname: "mtsituridze",
//     age: "3",

//     sayHello: function(){
// console.log(values);
//     }

// }
// delete person.age

// person.job= "developer",
// console.log(person);

// Object.prototype.joblength = function(){
//     return this.job.length

// }

// console.log(person.joblength());

// Object.prototype.methodCount = function(){
//     return Object.values(this).filter(value=>typeof value == "function").length

// }

// console.log(person.methodCount());

// console.log(person.hasOwnProperty("gender"))

// person.gender = "female"
// console.log(person);

//savarjishoebi 6

//1.დაწერეთ ფუნქცია generateRandomNumber, რომელიც იღებს მინიმალურ და მაქსიმალურ რიცხვს არგუმენტებად და აბრუნებს შემთხვევით რიცხვს მინიმალურ და მაქსიმალურ მნიშვნელობებს შორის.

// let max=77
// let min=3
// let generateRandomNumber=Math.random() * (max-min)+min;

// console.log(generateRandomNumber);

// function generateRandomNumber(min, max){

//     let random=Math.random() * (max-min)+min;
// return random
// }
// console.log(generateRandomNumber(4, 55));

//2დაწერეთ ფუნქცია სახელწოდებით capitalizeWords, რომელიც იღებს წინადადებას (სტრიქონს) არგუმენტად და აბრუნებს ახალ წინადადებას, სადაც თითოეული სიტყვის პირველი ასო დიდია.

// function capitalizeWords(str){
//    return str.split("").map((value, index, arr)=>{
//         if (index==0 || arr[index-1]==" ")
//         return value.toUpperCase();
//         return value
//      }).join("")

// let splitedstr= str.split(" ");

// for(let i=0; i<splitedstr.length; i++){
//     splitedstr[i]=splitedstr[i].split('')
//     splitedstr[i][0]=splitedstr[i][0].toUpperCase()
//     splitedstr[i]=splitedstr[i].join('')

// }

// return splitedstr.join(" ")

//console.log(capitalizeWords("hello nino chino"));

//   6.1. seminari
// 1

// let word="hello nino chino"

// function capitalizeWords(str){
//     let splited=str.split(" ")

//     let capitalizeWord=splited.map((word)=>word[0].toUpperCase()+word.slice(1))
// return capitalizeWord.join(" ")

// }
// console.log(capitalizeWords(word));

//  2
// let arr=[1,2,3,4,5,6,7]
//     function odd(array){
//         let count=0

//      //erti varianti
//       //let result=array.reduce((acc,num)=>num%2==1 ? acc+num:acc)

// //meore varianti
// let filtered=array.filter((number)=>number%2==1)
// let result=filtered.reduce((acc,num)=> acc+num)

// return result
// }
// console.log(odd(arr))

//3
// let arr=[1,2,3,4,5,6,7,8,9,10,11,22,33,44,55]

// function evenDouble(array){

//     // let filtered=array.filter((item)=>item%2==0)
//     // let maped=filtered.map((num)=> num*2)
//     // return maped

// let filtered=array.filter((num)=> num%2==0).map((number)=> number*2)
// return filtered

// }

// console.log(evenDouble(arr));

//4
// let item="helo ninoo Chinooooo"

// function findWord(str){
// let splited=str.split(" ")

// let longestWord=splited.reduce((longest,curent)=> curent.length>longest.length ? curent : longest)

// return longestWord

// }

// console.log(findWord(item));

//6.2 seminari.............

//1
// const objects =[
// {name: "zebra", value: 10},
// {name: "apple", value: 5},
// {name: "banana", value: 8},
// {name: "cherry", value: 3},

// ]

// let sortedobjects=objects.sort((a,b)=> a.name.localeCompare(b.name))

// console.log(sortedobjects);

//2martivi ricxvi
// let numbers=[1,2,3,4,17,94,12,32,43,54,-4,-1]

// let primeNumbers=numbers.filter(number => {

//     if(number<=1){
//         return false
//     }

// for(let i=2; i<=Math.sqrt(number);i++){

//     if(number%i===0){
//         return false
//     }
// }
// return true
// })

// console.log(primeNumbers);

//3
// function findString(strings, letter){

// let str=strings.find(string => string.startWith(letter))

// return str
// }
// const stringS= ["zebra", "apple", "banana", "cherry"]
// console.log(findString(strings,"C"))

//4
// const students = [
// {name: "Alice", age: 20, gender: "Female"},
// {name: "Bob", age: 22, gender: "male"},
// {name: "Cathy", age: 21, gender: "Female"},
// {name: "David", age: 23, gender: "male"},

// ]

// let femaleStudents=students.filter(student =>student.gender === "female" )

// let sortedByName=femaleStudents.sort((a,b)=>a.name.localeCompare(b.name))

// let averageAge=sortedByName.reduce((ageSum,currentStudent)=>ageSum+currentStudent.age,0)/sortedByName.length

// console.log(averageAge);

//savarjishoebi 6 tavi

//10.დაწერეთ პროგრამა,რომელიც შეკრიბავს მასივის ყველა რიცხვს(არ გამოვიყენოთ reduce).

// let arr=[1,2,3,4,5,6,]

// let count=0
// for( let i=0;i<arr.length;i++){
//     count+=arr[i]
// }
// console.log(count);

//9.დაწერეთ პროგრამა,რომელიც იპოვის მასივში ყველაზე დიდ რიცხვს(არ გამოვიყენოთ სორტი).

// let arr=[1,2,4,77,44,99]
// function largest(array){

//     let  max=arr[0]
//     for(let i=1;i<arr.length;i++){
//        if(max<array[i])
//            (max=array[i])

//     }
//     return max
// }

//  console.log(largest(arr));

//8.დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა სტრიქონი პალინდრომი.
// let str="arra"

// let splited=str.split("").reverse().join("")
// if(str==splited){
//     console.log("palindromia");
// }else{
//     console.log("ar aris palindromi");
// }

//.7.დაწერეთ პროგრამა წინადადებაში სიტყვების თანმიმდევრობის შესაბრუნებლად.

// let str="hello nino, rogor xar?"
// let reversed=str.split(" ").reverse().join(" ")
// console.log(reversed);

//.6.დაწერეთ პროგრამა, რომ ამოიღოთ ყველა ცრუ მნიშვნელობა მასივიდან.

// let arr=[1,4,true,0,false,NaN]

// let filtered=arr.filter((value)=>!value)

// console.log(filtered);

//.5.დაწერეთ ფუნქცია, რომელიც მიიღებს წინადადებას შეყვანად და აბრუნებს უნიკალური სიტყვების მასივს ანბანური თანმიმდევრობით, გამოკლებით გავრცელებული ინგლისური სიტყვების, როგორიცაა "the", "a" და "is".

// function uniqueWords(str){

// let splited=str.split(" ")
// let filtered=splited.filter((value, ind, arr)=> {
//     return ['the', 'a', 'is'].indexOf(value) == -1
//             && ind == arr.indexOf(value)
// })
// let sorted=filtered.sort((a,b) => a.localeCompare(b))

// return sorted

// }

// let str="the little cat jump on the table a is table"

// console.log(uniqueWords(str))

//.4.დაწერეთ ფუნქცია, რომელიც იღებს სტრიქონს შეყვანად და აბრუნებს ჭეშმარიტს, თუ ის არის პანგრამა (შეიცავს ანბანის ყველა ასოს ერთხელ მაინც), ცრუ სხვა შემთხვევაში

// let mark= new Array(26).fill(false)
// function checkpPangram(str){

// for(let  i=0;i<str.length;i++){

// if("A"<=str[i] && str[i]<="Z"){
//     index=str.charCodeAt(i)-"A".charCodeAt(0)

// }else if
//     ("a"<=str[i] && str[i]<="z")
// index=str.charCodeAt(i)-"a".charCodeAt(0)

// mark[index]=true

// }
// return mark.filter((value)=>!value).length==
// 0
// }

// let str="The quick brown fox jumps over the lazy dog"
// console.log(checkpPangram(str));
//

//.3.დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს და თვისების სახელს და აბრუნებს ამ თვისების უნიკალური მნიშვნელობების მასივს ყველა ობიექტიდან.
// const students = [
//     {name: "Alice", age: 20, gender: "Female"},
//     {name: "Bob", age: 22, gender: "male"},
//     {name: "Cathy", age: 21, gender: "Female"},
//     {name: "David", age: 23, gender: "male"},

//     ]

//     function findUnique(array, prop){

//         let values=array.map((value)=>value[prop])

// let filtered=values.filter((value,index,array)=>index==array.indexOf(value))

// return filtered

//     }

//     console.log(findUnique(students,"gender"));

//7.2 seminari............
//1

// const para = document.getElementById("text");

// function changeColor(){
// const color=prompt("enter the color: ");
// para.style.color=color;

// }

//SAVARJISHOEBI ME-7..............

//1.Changing Text Content - ტექსტის შეცვლა
// შექმენით HTML გვერდი p ელემენტით. დაწერეთ JavaScript ფუნქცია, რომელიც გამოძახებისას ცვლის p ელემენტის ტექსტურ შინაარსს "Hello, DOM!"-ით.

// let para=document.querySelector(".text")

// function changeText(){
// para.textContent = "hello, dom"

// };
// changeText()

//2...Changing Styles - სტილის შეცვლა
//შექმენით HTML გვერდი button ელემენტით. დაწერეთ JavaScript ფუნქცია, რომელიც გამოძახებისას ცვლის button-ის ფერს წითლად და ტექსტის ფერს თეთრად.

// let button=document.querySelector(".click")

// function changeColor(){
// button.style.color="white";
// button.style.background="red"

// }
// button.addEventListener("click, change color")

//.3.Creating Elements - ელემენტების შექმნა
//შექმენით HTML გვერდი ცარიელი div ელემენტით. დაწერეთ JavaScript ფუნქცია, რომელიც გამოძახებისას ქმნის ახალ p ელემენტს ტექსტით "ახალი აბზაცი" და სვავს div-ში როგორც მის შვილ ელემენტს.

// let div=document.querySelector(".conteiner")

// function newPara(){
//     let para=document.createElement("p")
//     para.textContent="new paragraph"
//     div.append(para)

// }
// newPara()

//.4შექმენით HTML გვერდი button ელემენტით. დაწერეთ JavaScript ფუნქცია, რომელიც ღილაკზე დაწკაპუნებისას აჩვენებს გაფრთხილებას შეტყობინებით "ღილაკზე დაწკაპუნება!".

// let btn=document.querySelector(".click")
// btn.addEventListener("click", () => {
//     alert("ღილაკზე დაწკაპუნება!")
// } )

//.5.Form Validation - ფორმის ვალიდაცია
// შექმენით HTML გვერდი form ელემენტით, რომელიც შეიცავს ტექსტის შესაყვან ველს და გაგზავნის ღილაკს. დაწერეთ JavaScript ფუნქცია, რომელიც ფორმის გაგზავნისას ამოწმებს შესაყვან ველს. თუ ველი ცარიელია, აჩვენეთ შეცდომის აღმნიშვნელი შეტყობინება შესაყვანი ველის გვერდით. თუ ველი ცარიელი არ არის, აჩვენეთ გაფრთხილება შეტყობინებით "ფორმა გაგზავნილია!".

// function formValidation(){
//     let span=document.querySelector(".span")
// let x=document.forms["myForm"]["fname"].value
// if (x== ""){
// span.innerHTML="error"

// }else{
// span.innerHTML="ფორმა გაგზავნილია"
// }
// return false;
// }

//6...Dynamic List Management - დინამიური სიის მართვა
//შექმენით HTML გვერდი ul ელემენტით და input ველით, ღილაკთან ერთად "Add Item". დაწერეთ JavaScript ფუნქცია, რომელიც ღილაკზე დაჭერით მომხმარებლებს საშუალებას აძლევს დაამატონ ინფუთში ჩაწერილი ტექსტი სიაში. ყველა ტექსტს გვერდზე უნდა ჰქონდეს ასევე X ღილაკი, რომელზე დაჭერითაც შესაბამისი ტექსქტი წაიშლება.

//  function listManagement(){

//    let sia=document.querySelector(".sia")
//   let text=document.querySelector(".text").value
//    let list=document.createElement("li")
// list.textContent=text
// let x=document.createElement("button")
// x.textContent="x"
// x.addEventListener("click", () =>  list.remove() )
// list.appendChild(x)
// sia.appendChild(list)

// }

//proeqti 40

// function ComparingNumbers(){
// let num1=document.querySelector(".number1").value

// let num2=document.querySelector(".number2").value

// let num3=document.querySelector(".number3").value

// let max=0

// if ( num1 !== num2 && num2!==num3 && num1 !== num3){
//     if(num1 > max)
//         max=num1
//     if(num2 > max)
//     max=num2
//     if(num3 > max)
//     max=num3
//     console.log(max);
// }

// }

//proeqti 39
// let month=parseInt(prompt("enter the number"))

// switch(month){
//     case 1:
//         console.log('ianvari');
//         break;
//     case 2:

//     console.log('tebervali');
//     break;
//     case 3:
//         console.log('marti');
//     break;
//     case 4:
//         console.log("aprili");
//     break;
//     case 5:
//          console.log("maisi");
//     break;
//     case  6:
//          console.log("ivnisi");
//     break;
//     case 7:
//          console.log("ivlisi");
//     break;
//     case 8:
//          console.log("agvisto");
//     break;
//     case 9:
//          console.log("seqtemberi");
//     break;
//     case 10:
//          console.log("oqtomberi");
//     break;
//     case 11:
//         console.log("noemberi");
//     break;
//     case 12:
//          console.log("dekemberi");
//     break;
//     default:
//     console.log('incorrect month number');
// }

//8e tavi............
//seminari 1
//1
// function equalsCheck(successCalback, errorCalback){
// if(1+1 === 2){

//     successCalback("equals")
// }else{
//     errorCalback("doesn't equals")
// }
// }

// equalsCheck(
//     (message)=> {
//     console.log("success:", message);
// },
// (message)=>{
//     console.log("failed:", message);
// }

// );

//promise
// function equals(){
//     return new Promise((resolve, reject)=>{
// if (1+1===3){
//     resolve("equals")
// }else{
//     reject("doesn't equals")
// }
//     });
// }
// equals()
// .then((message)=> {
// console.log("success:", message);
// })
// .catch((message)=> {
//     console.log("error:",message);
// })

//2 promise chaining

// function  promiseOne(){
//     return new Promise(resolve => {
//         resolve(5)
//     })
// }

// function promiseTwo(number){
//     return new Promise((resolve,reject) => {
//         reject("failed")
//         // resolve(number *2)
//     })
// }
// promiseOne()
// .then((result)=> promiseTwo(result))
// .then(finalResult => {
//     console.log(finalResult)
// })
// .catch((error)=>{
//     console.log(error);
// });

//3

// async function getGithubUser(){
//     const respons= await fetch
//     ("https://api.github.com/users/NinoChino")
//     console.log(respons);
//     const data= await respons.json()
//     console.log(data);
// }

// function mainFunction(){
//     let counter =0;
//    let interval = setInterval(()=>{
// counter++
// console.log(counter)
// if(counter>=10){
//     clearInterval(interval)
//     getGithubUser()
// }
//     }, 100)
// }
// setTimeout( mainFunction, 2000)

//8 davaleba
//1Callback Basics: Write a function that takes a callback as an argument and calls it after a delay of 1 second.
// function callBack(fn) {
//     let result = 10+15;
//     setTimeout(() => fn(result), 1000)

//     return 100;
// }

// let result1 = callBack((arg1) => console.log('async ',arg1));
// console.log('sync', result1);

//2.Promise Basics: Create a promise that resolves after 2 seconds and logs a success message.
// function promise(){
// return new Promise((resolve, reject) => {

// setTimeout(() =>  resolve("success message"), 3000)

// })

// }

// promise()
// .then(e=>console.log(e))

//3.Promise Chain: Create a chain of promises where each resolves after 1 second and logs a message.

// function promis1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("success message 1")
//         }, 1000)
//     })
// }

// function promis2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("success message 2")
//         }, 1000)
//     })
// }
// promis1()
// .then((e) => {
//     console.log(e);
//     return promis2()
// }).then((e) => {
//     console.log(e);
//     return promis1()
// }).then((e) => {
//     console.log(e);
//     return promis2()
// }).then((e) => {
//     console.log(e);
//     return promis1()
// })
// .then(e => console.log(e))

//4.Async/Await: Write an asynchronous function using async/await that simulates fetching data from an API after 2 seconds.

// async function user(){

//     const response= await fetch
//     ("https://api.github.com/users/NinoChino")

//     const data=await response.json()

//    setTimeout (()=> console.log(data), 2000)
// }
// user()

//
//5. Error Handling: Modify the previous example to include error handling using try/catch.

// async function foo(){
//     const response= await fetch ("https://jsonplaceholder.typicode.com/ps")
//     console.log(response.ok);
//     if(!response.ok){
//         throw new Error("failed hhhhhhhhhh")
//     }
//     const data=await response.json()

//    return data
// }

// async function newfunc() {
//     try{
//     let x=await foo()
//     console.log(x);
// }catch(error){
//         console.log(error.message);
//     }
// }
//  newfunc()

//.6. Fetch API: Use the Fetch API to make a simple GET request to a mock API and log the response.

// fetch("https://jsonplaceholder.typicode.com/posts").then((x)=>x.json()).then(y=>console.log(y))

///
// .7.Async Function with Fetch: Create an asynchronous function that uses the Fetch API to get data from an API and log it.

// async function func() {
//     let respons = await fetch("https://jsonplaceholder.typicode.com/posts")
//     let data = await respons.json()
//     console.log(data);
// }
// func()

//seminari

// async function user(){
//     // return new Promise((resolve, reject)=> {
//     //     reject("error")
//     // })

//     const respons= await fetch
//     ("https://api.github.com/users/NinoChino")

// const data= await respons.json()
// setTimeout(()=> console.log(data), 2000)

// }

// user()

// function checkEquals(num1, num2, funcEquals, funcNotEquals){

//     if(num1===num2){
//         funcEquals();
//     }else{
//         funcNotEquals()
//     }
// }
// checkEquals(
//     5, 10
//     ()=> {console.log("equals")
// },
//     ()=>{
//         console.log("not equals")
//     }
// )

// const age = parseInt(prompt("Enter your age: "));
// const userPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (age >= 18) {
//       resolve("Adult");
//     } else {
//       reject("Minor");
//     }
//   }, 3000);
// });
// userPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// console.log("hi");

// function checkEqual(num1, num2, funcEquals, funcNotEquals) {
//   if (num1 === num2) {
//     funcEquals();
//   } else {
//     funcNotEquals();
//   }
// }
// checkEqual(
//   5,
//   10,
//   () => {
//     console.log("Equals");
//   },
//   () => {
//     console.log("Not Equals");
//   }
// );

// function firstPromise() {
//     return new Promise((resolve) => {
//       resolve(6);
//     });
//   }
//   function secondPromise(num) {
//     return new Promise((resolve) => {
//       resolve(num * 2);
//     });
//   }
//   firstPromise()
//     .then((number) => {
//       console.log("First Promise:", number);
//       return secondPromise(number);
//     })
//     .then((finalNumber) => {
//       console.log("Second Promise:", finalNumber);
//     });

// async function fetchAll() {
//     const responses = await Promise.all([
//       fetchData1,
//       fetchData2,
//       fetchData3,
//       fetchData4,
//       fetchData5,
//       fetchData6,
//       fetchData7,
//       fetchData8,
//       fetchData9,
//       fetchData10,
//     ]);
//     console.log(responses);
//     const data = await Promise.all(responses.map((response) => response.json()));
//     console.log(data);
//   }
//   fetchAll();

//8tavis seminari 3

// let obj={
//     name:"tekla",
//     age: 39,
//     surname:"kvaracxelia"

// }
// const {name,...details}=obj
// console.log(details);

// const {age, surname}=details;
// console.log(age);

//proeqti 42

// let a = prompt(" Enter the first string:")
// let b = prompt("Enter the second string:")

// function isAnagram(str1, str2) {
//     let first = str1.split("").sort().join('')
//     let second = str2.split("").sort().join('')
//     if (first === second) {
//         console.log(str1 + " and " + str2 + "are anagrams!");

//     }
//     // for (let i = 0; i < first.length; i++) {
//     //     // if (first.length === second) {
//     //         if (first[i] === second[i]) {
//     //             console.log(first + " and " + second + "are anagrams!");

//     //         } else {
//     //             console.log("are not anagrams");
//     //         }
//     //     // }
//     // }
// }
// isAnagram(a, b)

//proeqti 43 დაწერა ჩემმა ქმარმა

// function isNumb(char) {
//     return char.charCodeAt(0) >=48 && char.charCodeAt(0) <= 57
// }
// function isStr(char) {
//     return (char.charCodeAt(0) >= 'a'.charCodeAt(0)
//             && char.charCodeAt(0) <= 'z'.charCodeAt(0))
//             || (char.charCodeAt(0) >= 'A'.charCodeAt(0)
//             && char.charCodeAt(0) < 'Z'.charCodeAt(0))
// }
// function passwordValidator(password) {
//     let numbers = false;
//     let strings = false;
//     let symb = false;
//     let score = 0;
//     for (let i = 0; i < password.length; i++) {
//         if(isNumb(password[i])) {
//             numbers = true;
//         } else if(isStr(password[i])) {
//             strings = true;
//         } else {
//             symb = true;
//         }
//     }
//     if (numbers) {
//         score += 1;
//     }
//     if (strings) {
//         score += 2;
//     }
//     if (symb) {
//         score += 2;
//     }
//     if (password.length >= 8) {
//         score += 4
//     }
//     return score;

// }
// function evalueatePassword(a) {
//     let strength = passwordValidator(a)
//     console.log(strength);
//     if (strength < 2)
//     console.log('The password ' + a + ' is a very weak password.');
//     else if (strength < 7)
//     console.log('The password ' + a + ' is a weak password.');
//     else if (strength < 9)
//     console.log('The password ' + a + ' is a strong password.');
//     else if (strength >= 9)
//     console.log('The password ' + a + ' is a very strong password.');
// }

// evalueatePassword( prompt("enter the password"));

//.9.seminari
//1

// function divides(a,b){
// if(typeof a !=="number" || typeof b !=="number"){
//     throw new Error("values must be numbers")
// }
// if(b===0){
//     throw new Error("can't divide by 0")
// }

// return a/b

// }
// try{
//     console.log(divides(5,0))
//  } catch (error){
//     console.log(error);
//  }

//2,

// async function getGithubUser(user){
// const response= await fetch(`https://api.github.com/users/${user}`)
// console.log(response.ok);
// if(!response.ok){
//     throw new Error("failed fetching data")
// }
// const data= await response.json()
// return data

// }
// async function handleuser(usernmae){
//     try{
//         console.log(await getGithubUser(usernmae));
//     } catch(error){
//         console.log(error);
//     }
// }
// handleuser("fcgchcmhgckg")

//4
// function jsonParse(jsonString){
// try{
//     let obj=JSON.parse(JSONstring)
//     return obj
// }catch(error){
//     console.log("failed");
// }

// }
// let JSONstring='{name": "nino", "age":34}'

// console.log(jsonParse(JSONstring));

// class MultiplicatorUnitFailure extends Error {}

// function primitiveMultiply(a, b) {

//     let random=Math.random()
//   if (random < 0.2) {
//     return a * b;
//   } else {
//     throw new MultiplicatorUnitFailure("Klunk");
//   }
// }

// function reliableMultiply(a, b) {
//   while(true){
//     try{
//         return primitiveMultiply(a,b)
//     }catch(error){
//         if(error instanceof MultiplicatorUnitFailure){
//             console.log(error.message);
//         }
//     }
//   }
// }

// console.log(reliableMultiply(8, 8));

//9 savarjishoebi axali
//1.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ობიექტს და დააბრუნებს მის name ფროფერთის მნიშვნელობას. თუ name ფროფერთი არ გააჩნია, დაარეთარნეთ null.

// let obj ={
//     "name": "nino",
//     "age":34,
// }
// function foo(obj){
// if(typeof obj.name==undefined){
//     return null
// } else{
//     return obj.name
// }

// }
// console.log(foo(obj));

//.2. გადააწყეთ პირველი დავალება try/catch-ის გამოყენებით. თუ name ფროფერთი არ გააჩნია, გაისროლეთ ერორი და შემდეგ გაუმკლავდით.

// let obj ={
//     "name1": "nino",
//     "age": 34,
// }
// function foo(obj){
// if(typeof obj.name=='undefined'){
//     throw new Error ("null")
// }

// if(typeof obj.name==="string"){
//     return obj.name
// }
// }
//  function newfunc(obj){
//     try{
//         let y= foo(obj)
//         console.log(y)}

//     catch(x){
//         console.log(x.message);
//     }

// }

// console.log(newfunc(obj));

//.3.დაწერეთ ფუნქცია, რომელიც იღებს ორ რიცხვს პარამეტრებად და ცდილობს მათ გაყოფას. თუ რომელიმე რიცხვის ტიპის არაა, გაისროლეთ ერორი. ასევე გაუმკლავდით იმ შემთხვევასაც, როცა მეორე რიცხვი 0-ია (0-ზე გაყოფა არ შეიძლება).

// function foo(a,b){
// if(typeof a !=="number" || typeof b !=="number"){
//     throw new Error("not a number")
// }
// if(b===0){
//     throw new Error("ar seiZleba 0-ze gayopa")
// }
//     return a/b

// }
// try{
//     console.log(foo("6",2));
//         }catch(x){
//             console.log(x);
//         }

//4.დაწერეთ ფუნქცია სახელად promptAge, რომელიც შეეკითხება მომხმარებელს თავის ასაკს და თუ არასწორად იქნება ასაკი შემოყვანილი, გასივრის ერორს. ეს ფუნქცია გამოიძახეთ isAdult ფუნქციაში, რომელიც ადგენს არის თუ არა მომხმარებელი სრულწლოვანი. გამოიყენეთ try/catch ერორების გასამკლავებლად.

// function promptAge() {
//     let ask = Number(prompt("enter your age"))

//     if (typeof ask !== "number") {
//         throw new Error(" arasworia ")
//     }
//     return ask;
// }
// function isAdult() {
//     // try/c\
//     let ask;
//     try {
//         ask = promptAge();
//     } catch (x) {
//         console.log(x.message);
//     }

//     if (ask >= 18) {
//         console.log("srulwlovania");
//     } else {
//         console.log("arasrulwlovania");
//     }
// }
// isAdult();

//.5.დაწერეთ ფუნქცია, რომელიც ცდილობს JSON სტრინგის პარსინგს (მაგალითად სტრინგად ჩაწერილ ობიექტს გადაიყვანს ობიექტში). გამოიყენეთ try/catch იმ ქეისებისთვის, როცა JSON სტრინგი არავალიდურია.

// function jsonParse() {
//     const str=('{"name":"John", "age":30, "city:"New York"}')
//     let obj;
//     try{
//         obj = JSON.parse(str)
//     }catch(e){
//         return e.message
//     }

//     return obj
// }

// console.log(jsonParse());

//6.დაწერეთ ფუნქცია, რომელიც აგზავნის რექვესთს GitHub-ის API-ზე და მოაქვს გითჰაბის იუზერის დატა. (მაგალითად: https://api.github.com/users/temuritsutskiridze). თუ სასურველი პასუხი ვერ მიიღეთ (როცა response.ok არის false), გაისროლეთ ერორი და გამკლავდით მას. გამოიყენეთ async/await სინტაქსი.

// async function user(){
//  let response=await fetch("https://api.github.com/users/temuritsutskiridze)")

// if(!response.ok){
//     throw new Error("false")

// }
// const data=await response.json()
// console.log(data);
// }
// async function foo(){
//     try{

//         console.log(await user());
//     }

//     catch(x){
//         console.log(x.message);
//     }
// }

// foo()

//.proeqti 19 - Paint Calculator

// let question1 =Number(prompt(" Enter the length of the room"))
// let question2 =Number(prompt("Enter the width of the room"))

// let ceilingSize=question1*question2
// let pergalone=350

// function paint(){

// let galoni = ceilingSize/pergalone
// galoni = Math.ceil(galoni)

// return galoni
// }
// console.log(paint());

//proeqti  20 - Self-Checkout

// let a1=prompt("Enter the price of item 1:")
// let b1=prompt("Enter the quantity of item 1:")
// let a2=prompt("Enter the price of item 2:")
// let b2=prompt("Enter the quantity of item 2:")
// let a3=prompt("Enter the price of item 3:")
// let b3=prompt("Enter the quantity of item 3:")

// let Subtotal = (a1*b1) + (a2*b2) +(a3*b3)
// let  Tax= (Subtotal*5.5)/100

// let Total=Subtotal+Tax
// console.log(Total);

//proeqti 21

// let amountfrom=Number(prompt("How many euros are you exchanging? "))

// let rate =Number(prompt("What is the exchange rate"))
// let rateto = 100

// let amountto =Number ((amountfrom * rate) / rateto)

// console.log(amountfrom + " euros at an exchange rate of " + rate +" is " + amountto + " dollars");

//proeqti 22

// let p=prompt("Enter the principal:")
// let r=prompt("Enter the rate of interest:")
// let t=prompt("Enter the number of years:")

// let a = p*(1 + (r*t))

// console.log("After "+ t + " years at "+ r + " % "+ " the investment will be worth " + a +" $");

//seminari 10. 1
//.1
// async function addTodo(newTodo){
// try {
//     const respons= await fetch ("http://localhost:3000/todos", {

//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newTodo),
// });

// if(!respons.ok){
//     throw new Error( "failed to add todo")
// }

// }catch(error){
//     console.log(error.message);
// }

// }
// addTodo({ task: "prepare for exams", completed: true})
// addTodo({ task: "prepare for exams", completed: true})
// addTodo({ task: "prepare for exams", completed: false})
// addTodo({ task: "prepare for exams", completed: false})
// addTodo({ task: "prepare for exams", completed: false})

//.2.
// async function completeTodo(id){
// try{
//     const response = await fetch (`http://localhost:3000/todos/${id}`, {
// method: "PATCH",
// headers: {
//     "Content-Type": "application/json"
// },
// body: JSON.stringify({
//     completed: true,
// })

//     })

//     if (!response.ok){
//         throw new Error("failed to update todo")
//     }
// }catch(error){
//     console.log(error.mesaage);
// }

// }
// completeTodo("4fed")

//.3.

// async function getcompletedTodos(){
// try{
// const response= await fetch("http://localhost:3000/todos")
// if(!response.ok) throw new Error("failed")

// const data= await response.json()

// return data
// }catch(eroor){
//     console.log(error.message);
// }

// }

// async function deleteTodo(){

//     try{
//         const todos= await getcompletedTodos()
// const completedTodos= todos.filter((todo)=>todo.completed)

//         completedTodos.map(async (todo)=> {
//             const response=await fetch (`http://localhost:3000/todos/${todo.id}`,{
//                 method: "DELETE",
//             })
//             console.log(response.ok);
//         })
//     }catch(error){
//         console.log(error.message);
//     }
// }deleteTodo()

//
//seminari 2

//1

// async function getcompletedTodos(){
//     try{
//     const response= await fetch("http://localhost:3000/todos/?completed=true")
//     if(!response.ok) throw new Error("failed")

//     const data= await response.json()

//     return data
//     }catch(eroor){
//         console.log(error.message);
//     }

//     }
//     async function deleteTodo(){
//         try{
//         const todos= await getcompletedTodos()
// completedTodos.map(async (todo)=> {
//             const response=await fetch (`http://localhost:3000/todos/${todo.id}`,{
//                 method: "DELETE",
//             })
//             console.log(response.ok);
//         })
//     }catch(error){
//         console.log(error.message);
//     }
// }deleteTodo()

//2

// async function addNewUser(name){
// try{
//     const userResponse=await fetch("http://localhost:3000/users", {
//        method: "POST",
//        headers:{
//         "Content-Type": "application/json",
//        } ,
//        body: JSON.stringify({
//         name,
//         borrowedBooks:[],
//        }),
//     });
//     if(!userResponse.ok){
//         throw new Error("failed")
//     }
// }catch(error){
//     console.log(error.message);
// }

// }
// // addNewUser("ani")
// // addNewUser("samueli")
// // addNewUser("wiliami")

// async function deleteUser(id){
//     try {
//        const deleteResponse= await fetch (`http://localhost:3000/users/${id}`, {
//         method: "DELETE",
//        });
//         if(!deleteResponse.ok){
//             throw new Error (failed)
//         }

//     } catch (error) {
//         console.log(error.message);
//     }
// }

// // deleteUser("0442")

// // deleteUser("5dec")
// // deleteUser("de3d")

// async function addNewBook(name, author){
// try {
//     const bookresponse=await fetch ("http://localhost:3000/books", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             name,
//             author,
//         }),
//     });
//     if(!bookresponse.ok){
//         throw new error("feiled")
//     }
// } catch (error) {
//     console.log(error.message);

// }

// }
// // addNewBook("the great gatsby", "f. scott fitzgerald")
// // addNewBook("to kill a mockingbird", "harper lee")

// async function addBook(book){
//     try {
//         const bookresponse=await fetch ("http://localhost:3000/books", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(book),
//         });
//         if(!bookresponse.ok){
//             throw new error("feiled")
//         }
//     } catch (error) {
//         console.log(error.message);

//     }

//     }

// async function deleteBook(id){
//     try {
//         const deleteResponse= await fetch (`http://localhost:3000/books/${id}`,{
//             method:"DELETE"
//         })
// if(!deleteResponse.ok){
//     throw new Error("feiled")
// }
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// // deleteBook(1)
// // deleteBook("8f13")
// // addNewBook("1984", " george orwell")

// async function borrowBook(userId, bookId){
// try {
//   const userResponse=await fetch (`http://localhost:3000/users/${userId}`)
// if(!userResponse.ok){
//     throw new Error("user doesn't exist")
// }
// const bookResponse=await fetch(`http://localhost:3000/books/${bookId}`)
// if (!bookResponse.ok) {
//     throw new Error("book doesn't exist")
// }
// const user = await userResponse.json();
// const book= await bookResponse.json()

// const borrowBookResponse=await fetch(`http://localhost:3000/users/${userId}`,{
//     method: "PATCH",
//     headers:{
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         borrowedBooks: [...user.borrowedBooks, book]
//     }),
// })
// if(!borrowBookResponse.ok){
//     throw new Error("feiled to borrow a book from the library")
// }

// deleteBook(bookId)
// } catch (error) {
// console.log(error.message);
// }

// }
// borrowBook(1, "c0a2")

// async function returnBook(userId, bookId){
//     try{

// const userResponse=await fetch (`http://localhost:3000/users/${userId}`)
//     if(!userResponse.ok){
//         throw new Error("user doesn't exist")
//     }

// const user= await userResponse.json()
// const bookToReturn= user.borrowedBooks.find((book)=> book.id===bookId)
// if(!bookToReturn){
//     throw new Error("user doesn't  have that book borrowed")
// }

// const updatedBooksArr= user.borrowedBooks.filter((book)=> book.id !== bookId)
// const book= user.borrowBooks.find((book)=>book.id===bookId)

//  const updatedBooksResponse= await fetch (`http://localhost:3000/users/${userId}`,{
//     method: "PATCH",
//     headers:{
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         borrowedBooks: updatedBooksArr
//     }),
//  })
// if(!updatedBooksResponse.ok){
//     throw new Error ("failed to return book")
// }

// addBook(book)
// }catch(error){
//     console.log(error.message);
// }
// }

// returnBook(1, "c0a2")

// async function returnBook(userId, bookId){

//     try {

// const user=await fetch (`http://localhost:3000/users/${userId}`)
// if(!user.ok){
//     throw new Error("this user doesn't exist")
// }
//      const userinfo=await user.json();
//      const requestToReturnBook=await fetch (`http://localhost:3000/users/${userId}`, {
//         method:"PATCH",
//         headerS: {
//             "content-Type":"application/json"
//         },
//         body:JSON.stringify({
//             borrowedBooks:[userinfo.borrowedBooks.filter((items)=>items.id!==bookId)]
//         })
//      })
//      if(!requestToReturnBook.ok){
//         throw new Error("faild to return book")
//      }
//         let book= userinfo.borrowedBooks;
//         let result= book.filter((item)=>item.id==bookId)

//         addBook(result[0].name,result[0].author)
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// returnBook(1, "c0a2")

//savarjishoebi 10

//1.Retrieve User Profile: Create a function using Fetch API to retrieve a user's profile information from the server

// async function userProfile(){
// try {
//   const response = await fetch ("http://localhost:3000/usersProfile", {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json"
//     },

//     body: JSON.stringify()
//   })
//   const data= await response.json()
//   console.log(data);
// if(!response.ok) throw new Error("failed")

// } catch (error) {
//     console.log(error.message);
// }

// }
// userProfile()

//.2.Add New Blog Post: Implement a function to add a new blog post using Fetch API, sending the post data to the server.

// async function addPost(){
// try {
//   const response= await fetch ("http://localhost:3000/usersProfile", {
//     method:"POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//     id: 5,
//     name: "giga",
//     age: 33
//     }),
//   })
// if(!response.ok) {
//  throw new Error("failed")
//}

// } catch (error) {
//      console.log(error.message);
// }

// }
// addPost()

//.3.Delete Product from Inventory: Write a function that uses Fetch API to delete a specific product from the inventory by sending a DELETE request.

// async function deletePost(id){
// try {
//     const response= await fetch (`http://localhost:3000/usersProfile/${id}`, {
//         method: "DELETE"

//     })
// if(!response.ok) {
//     throw new Error("feiled")
// }
// } catch (error) {
//     console.log(error.message);
// }

// }
// deletePost(3)
// deletePost(4)
// deletePost(5)

//დასამთავრებელია

//.4.Update Contact Details: Create a function to update contact details on the server using Fetch API, sending the updated data for a specific contact.

// async function update(id){
//     try {
//       const response=await fetch(`http://localhost:3000/usersProfile/${id}`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//          mobile: 55555

//         })
//       })
// if(!response.ok) throw new Error("feiled")
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// update(1)

//1.დაწერეთ ფუნქცია, რომელიც დაამატებს ახალ note-ს /notes ენდფოინთზე. (note ობიექტის შიგთავსი თავად განსაზღვრეთ).

// async function addNote(){

//     try {

//         const response=await fetch("http://localhost:3000/note", {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             },

//         });
//         if(!response.ok) {
//             throw new Error("failed")
//         }

//         const data=await response.json()
//         console.log(data);

//     } catch (error) {
//         console.log(error.message)
//     };
// }
// addNote()

//2.დაფეჩეთ თუდუები ამ API-დან - https://jsonplaceholder.typicode.com/todos. დააკონსოლეთ მხოლოდ ის ობიექტები, რომელთა id იყოფა 2-ზე.
//dasamtavrebeli

// async function todo(){
//     try {

//         const response=await fetch ("https://jsonplaceholder.typicode.com/todos",{
//             method: "GET",
//             headers:{
//                 "Content-Type": "application/json"
//             },
//         })
//         if(!response.ok){
//             throw new Error("failed")
//         }
//         const data =await response.json()
//             console.log(data);

//             for( let i=0; i<data.length; i++){
//                 if(data[i].id % 2===0){
//                     console.log(data[i]);
//                 }

//             }

//     } catch (error) {
//         console.log(error.message);
//     }
// }
// todo()

//3. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს იუზერის ლოგინსა და პაროლს და დაამატებს /users ენდფოინთზე.

// async function user(logIn, password){

//     try {
//         const response=await fetch ("http://localhost:3000/users",{
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 logIn,
//                 password
//             })
//         })
//         if(!response.ok){
//             throw new Error("failed")
//         }
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// user("nino", 12345678)

//.4.შექმენით json-server პატარა todo-აპლიკაციისთვის.
// todos-ზე უნდა იყოს ობიექტები რამდენიმე ფროფერთით - "id", "task"(string), "completed"(boolean).
// დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს todo ობიექტს და დაამატებს /todos ენდფოინთზე.
// დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს id-ს და შლის შესაბამის ობიექტს /todos ენდფოინთიდან.
// დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს id-ს და შესაბამის ობიექტის "completed" ფროფერთის ხდის true-ს.
// დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს id-ს და newTask-ს და შესაბამის ობიექტის "task" ფროფერთის ცვლის.
// დაწერეთ ფუნქცია, რომელსაც /todos ენდფოინთიდან წამოიღებს ისეთ ობიექტებს, რომელთა completed ფროფერთი არის true.

// async function todo(){
//    try {
//             const response=await fetch ("http://localhost:3000/todo",{
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     id: 1,
//                     task: "fetch api",
//                     completed: "true"
//                 })
//             })
//             if(!response.ok){
//                 throw new Error("failed")
//             }
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
// todo()

// async function addUser(id){
//     try {
//              const response=await fetch ("http://localhost:3000/todo",{
//                  method: "POST",
//                  headers: {
//                      "Content-Type": "application/json"
//                  },
//                  body: JSON.stringify({
//                      id,
//                      task: "fetch api",
//                      completed: "true"
//                  })
//              })
//              if(!response.ok){
//                  throw new Error("failed")
//              }
//          } catch (error) {
//              console.log(error.message);
//          }
//      }
//  addUser(2)
//  addUser(3)
//  addUser(4)
//  addUser(5)
//  addUser(6)

//  async function deleteUser(id){
//     try {
//              const response=await fetch (`http://localhost:3000/todo/${id}`,{
//                  method: "DELETE"

//              });
// console.log(response.status);
//              if(!response.ok){
//                  throw new Error("failed")
//              }
//          } catch (error) {
//              console.log(error.message);
//          }
//      }

// deleteUser(2)

//     async function completedFalse(id){

//         try {

//             const falseResponse= await fetch (`http://localhost:3000/todo/${id}`, {

//             method:"PATCH",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 completed: false
//             })
//             })
//             if(!falseResponse.ok){
//                 throw new Error(failed)
//             }
//         } catch (error) {
//             console.log(error.message);
//         }
//     }

//     // completedFalse(4)

//     // completedFalse(5)

// async function putTodo(id,newTask) {
// try {
//     const response=await fetch (`http://localhost:3000/todo/${id}`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({

//             task: `${newTask}`

//         })
//     })
//     if(!response.ok){
//         throw new Error(failed)
//     }

// } catch (error) {
//     console.log(error.message);
// }

// }
// // putTodo(5, "hello nino")

// async function todoTask(){
//         try {

//             const response=await fetch ("http://localhost:3000/todo",{
//                 method: "GET",
//                 headers:{
//                     "Content-Type": "application/json"
//                 },
//             })
//             if(!response.ok){
//                 throw new Error("failed")
//             }
//             const data =await response.json()
//                 console.log(data);

//                 for( let i=0; i<data.length; i++){
//                     if(data[i].completed === "true"){
//                         console.log(data[i]);
//                     }

//                 }

//         } catch (error) {
//             console.log(error.message);
//         }
//     }
//     todoTask()

//11 seminari 1

// const car ={

//     wheels: 4,
//     start(){
//         return "car is starting";
//     }
// }
// const BMW =Object.create(Car)
// BMW.speed=250;

// const Mercedes=Object.create(Car);
//     Mercedes.speed=260;
//     console.log(BMW.start());

//     class Car{
// constructor(speed){
//     history.wheels=4;
//     this.speed= speed

// }
//     start(){
//         return "Car is starting"
//     }
// }
//     const BMW =new car(260)
//     const Mercedes=new car(250)

//     console.log(Mercedes.wheels);

// class Car{
//     constructor(speed, carName){
//         this.carName=carName
//         this.wheels=4
//         this.speed=speed
//     }

//     start(){
//         return`${this.carName} is starting`;

//     }
// }

// const BMW= new Car(260, "BMW")
// const Mercedes= new Car(250, "mercedes")

// console.log(BMW.start());

//2 polymorphism   inheritance

// class Shape{
//  calculateArea(){
//     return
// }
//     }
// class Circle extends Shape{
//  constructor(radius){
//         super()
//         this.radius= radius
//     }

// calculateArea(){
//     return Math.PI*Math.pow(this.radius, 2) //akvadrateba, wris perimetri
// }
// }

// class Square extends Shape{
//     constructor(side){
//         super()
//         this.side=side
//     }
// calculateArea(){
//     return this.side ** 2 //akvadrateba,   Math.pow(side,2)
// }
// }

// class Triangle extends Shape{
//     constructor(base, height){
//         super()
//         this.base=base
//         this.height=height
//     }

//     calculateArea(){
//         return 0,5 *this.base *this.height
//     }

// }

// const shape=new Shape()//obieqti shevqmenit Shape-dan

// const circle=new Circle(10)
// const square=new Square(10)
// const triangle=new Triangle(10, 5)

// console.log(circle.calculateArea())
// console.log(square.calculateArea())
// console.log(triangle.calculateArea())

//3 encapsulation

// class BankAccount{
//     constructor(accountHolder, balance ){
//         this._accountHolder=accountHolder
//         this._balance=balance

//         this.getAccountHolder=()=>{
//             return this._accountHolder// private method
//         }

//         this.getbalance = function() {
//             return this._balance
//         }

//         this.deposit = (amount)=> {
//             this._balance+=amount
//         }

//         this.withdraw =( amount)=>{
//             if(amount > this._balance){
//                 throw new Error("not enough money");
//             }
//             this._balance=this._balance-amount
//         }
//     }
// }

// const account =new BankAccount("temo", 100)
// console.log(account.getbalance());
// account.deposit(50)

// console.log(account.getbalance());
// try {
//     account.withdraw(100)
// } catch (error) {
//     console.log(error);
// }

// console.log(account.getbalance());

//seminari 2
//1
// class TodoList{
//     constructor(){
//         this.tasks=[]
//     }
//     addTask(description){
// this.tasks.push({
//     text:description,
//     completed:false
// })
//     }
// completedTask(index){
//     if(index<0 || index>=this.tasks.length){
//         return
//     }
//     this.tasks[index].completed=true

// }

// displayTask(){
//     if(this.tasks.length){
//         return

//     }for(let i=0; i<globalThis.tasks.length;i++){
//         console.log(`${this.tasks[i].text}: ${this.tasks[i.completed]}`);
//     }
// }
// }

// let todo=new TodoList()
// console.log(todo.tasks);
// todo.addTask("playing chess")
// todo.addTask("playing tenis")
// console.log(todo.tasks);

// todo.completedTask(0)
// console.log(todo.tasks);
// todo.displayTask()

//2

// class Vehicle{
//     constructor(name, year){
//         this.name=name
//         this.year=year

//     }
//     displayInfo(){
//         console.log(`vehicle ${this.name},age is ${this.year}`);
//     }
// }

// class Car extends Vehicle{
//     constructor(name, year, numberOfDoors){
//         syper(name, year)

//         this.numberOfDoors=numberOfDoors
//     }
//     display(){
//         super.displayInfo()
//         console.log(`number of doors : ${this.numberOfDoors}`);
//     }
// }

// let car=new Car("mercedes",2020,4)
// car.displayInfo()
// car.display()

//savarjishoebi 11
//1.

// შექმენით კლასი სახელად "Person". დააგენერირეთ ობიექტი,
// რომელსაც ექნება "name" და "age" ფროფერთები და "sayHello" მეთოდი
// (ეს ყველაფერი კლასშივე უნდა გაუწეროთ). გამოაკონსოლეთ ობიექტის ფროფერთები.

// class Person{
//     constructor(name, age){
//         this.name=name;
//         this.age=age
//     }
//     sayHello(){
//         console.log("hello", this.name, this.age);
//     }
// }
// let person1 = new Person("nino", 33)
// person1.sayHello()

//.2 მემკვიდრეობითობა: შექმენით კლასი "Student",
// რომელიც იქნება "Person"-ის შთამომავალი. დაამატეთ ახალი "grade" ფროფერთი

// class Person{
//         constructor(name ){
//             this.name=name;

//         }
//         sayHello(){
//             console.log("hello", this.name, this.grade );
//         }
//     }
//     let person1 = new Person("nino",)
//     person1.sayHello()

//     class Student extends Person {
//         constructor(name, grade) {
//             super(name)
//             this.grade=grade;

//     }

// }
// const student1=new Student("nino", 100)
// console.log(student1.sayHello());

// 3. ენკაფსულაცია: შექმენით კლასი სახელად "BankAccount" private ფროფერთით - "balance".
// დაამატეთ მეთოდები "deposit" და "withdraw" თანხის შეტანა-გამოტანისთვის.
// შესატან ან გამოსატან თანხას მეთორები უნდა იღებდნენ პარამეტრად.
// bonus: თუ გამოსატანი თანხა მეტია არსებულ ბალანსზე, გმოიტანეთ შესაბამისი შეტყობინება.

// class BankAccount {
//   #balance = 0;

//   deposit(amount) {
//     console.log('+'+amount);
//     this.#balance += amount;
//     this.checkBalance()
//   }
//   withdraw(amount) {
//     console.log('-'+amount);
//     if (amount > this.#balance) {
//       throw new Error("arasakmarisi Tanxa");
//     }
//     this.#balance -= amount;
//     this.checkBalance()
//   }
//   checkBalance(){
//     console.log(this.#balance);

//   }
// }

// const myacc = new BankAccount
// myacc.deposit(1000)
// myacc.deposit(1000)
// myacc.deposit(1000)
// myacc.deposit(1000)
// myacc.deposit(1000)
// myacc.deposit(1000)
// try{
//     myacc.withdraw(12000);

// }catch(e){
//     console.log(e.message);
// }

//4.პოლიმორფიზმი: შემქენით კლასი "Shape", რომელშიც იქნება მეთოდი სახელად "calculateArea".
// შექმენით ქვეკლასები "Circle" და "Rectangle", რომლებშიც ახლადშექმნილ მეთოდს გადააწერთ მშობლის მეთოდს.

// class Shape{

//     calculateArea(){

//     }
// }
// class Circle extends  Shape{

//     constructor(radius) {
//         super()
//         this.r = radius
//     }
//     calculateArea(){
//         return Math.PI * Math.pow(this.r, 2)
//     }
// }

// class Rectangle extends Shape{

//     constructor(width, height) {
//         super()
//         this.h = height
//         this.w = width
//     }
//     calculateArea(){
//         return this.h*this.w
//     }
// }

// class Triangle extends Shape{

//     constructor(length, height) {
//         super()
//         this.h = height
//         this.l=length
//     }
//     calculateArea(){
//         return this.h*this.l/2
//     }
// }

// class calculator{
//     area(shape){
//         return shape.calculateArea();
//     }
//     sum( a,b){
//         return a+b
//     }
// }
// const calc = new calculator;
// const rect = new Rectangle(10,10);
// const circ = new Circle(20);
// const tri = new Triangle(10, 5)

// console.log(calc.area(rect), calc.area(circ));
// console.log(calc.area(tri));

//5.სტატიკური მეთოდი: შექმენით კლასი "Calculator" სტატიკური მეთოდით,
//რომელიც პარამეტრად მიიღებს ორ რიცხვს და დააბრუნებს მათ ჯამს.

// class Calculator{
//     static sum(a, b){
//         return a+b;
//     }
// }
// const s=Calculator.sum(10,5)
// console.log(s);

//6. Getter and Setter: შექმენით კლასი "Temperature" private ფორფერთით - "celsius".
//  დაამატეთ getter და setter მეთოდები. getter მეთოდი უნდა აბრუნებდეს celsius ფროფერთის.
//   setter მეთოდი პარამეტრად უნდა იღებდეს ფარენჰეიტს,
// გადაჰყავდეს ცელსიუსში და ანიჭებდეს მიღებულ მნიშვნელობას celsius ფროფერთის.

// class Temperature{
//     #celsius
//     getter(){
//         return this.#celsius
//     }
//     setter(fahrenheit){
//          this.#celsius = (fahrenheit - 32) * 5/9
//     }
// }

// const temp= new Temperature()
// temp.setter(150)
// console.log(temp.getter());

//7.შექმენით კლასი - "ArrayHelper" მეთოდით "reverseArray",
//რომელიც პარამეტრად იღებს მასივს და აბრუნებს მის შებრუნებულ ვერსიას.

// class ArrayHelper {
//   constructor(arr) {
//     this.arr = arr;
//   }
//   reverseArray() {
//     return this.arr.reverse();
//   }
// }
// const array = new ArrayHelper([1, 5, 7, 9, 6]);
// console.log(array.reverseArray());

//8.შექმენით კლასი "Circle", რომელიც დააგენერირებს ობიექტებს "radius" ფროფერთით.
//  დაამატეთ მეთოდები წრის ფართობისა და პერიმეტრის გასაგებად. შექმენით "createCircle" მეთოდი,
//   რომელიც დააბრუნებს რაიმე რადიუსის მქონე წრის ობიექტს. (ახალი წრე შექმენით Circle კლასიდან)

// class Circle {
//     r;
//     constructor(radius){
//         this.r=radius
//     }
//     circleArea(){
//         return Math.PI * Math.pow(this.r, 2)
//     }
//     circlePerimeter(){
//         return 2 * Math.PI * this.r
//     }
//     static createCircle(){
//         return new Circle(Math.random()*10)
//     }
// }
// const c=Circle.createCircle();
// console.log(c.circleArea());
// console.log(c.circlePerimeter());

//9.Shopping Cart:
// Create a Product class with properties id, name, price, and quantity.
//  Implement a method getTotalPrice() that calculates the total price for the product (price * quantity).
// Create a ShoppingCart class that includes an array to store products.
// Implement methods to add a product to the cart, remove a product by id,
// and calculate the total price of all products in the cart.
// Extend the ShoppingCart class by adding a method checkout() that logs the products in the cart and the total price.
// Implement a method emptyCart() to clear all products from the cart.

// class Product {
//   id;
//   name;
//   price;
//   quantity;
//   constructor(id, name, price, quantity) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//   }

//   getTotalPrice() {
//     return this.price * this.quantity;
//   }
// }
// class ShoppingCart {
//   products = [];

//   add(product) {
//     this.products.push(product);
//   }
//   remove(id) {
//     const ind = this.products.findIndex((e) => e.id == id);
//     this.products.splice(ind, 1);
//   }

//   totalPrice() {
//     return this.products.reduce((acc, e) => acc + e.getTotalPrice(), 0);
//   }

//   checkout() {
//     console.log(this.products, this.totalPrice());
//   }

//   emptyCart() {
//     this.products = [];
//   }
// }

// const pr=new Product(4, "vashli", 10, 3)
// console.log(pr);

// const cart=new ShoppingCart()
// cart.add(pr)
// cart.checkout()
// cart.remove(4)
// cart.checkout()

// algorithm

//bubble sort

// let arr=[10, 5,7,3,20,15,17,50]

// for(let i=0; i< arr.length-1; i++){
//     for(let j=0; j< arr.length-1-i; j++){
//         if(arr[j]>arr[j+1]){
//             let temp=arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1]=temp;

//         }
//     }
// }
// console.log(arr);

//linear search

// let arr=[10,5,7,3,20,15,17,50]

// function linearsearch(arr, target){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]=== target){
//             return i
//         }
//     }
//     return -1
// }

// console.log(linearsearch(arr, 50));

// function binarySearch(arr, target){
// let low=0;

// let high = arr.length-1

// while (low <=high){
//     let mid= Math.floor((high+low)/2)

//     if(arr[mid]===target){
//         return mid
//     }else if(arr[mid] > target) {
// high= mid-1
//     }else{
// low= mid+1
//     }
// }
// return -1

// }

// console.log(binarySearch([2,3,5,7,8,10,12,15,18,20], 7));

//seminari 1 Selection search

// let arr = [20, 6, -4, 67, 45, 10, 9, 4];

// function selectionsort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {    // ფესებისთვის რაოდენობისთვის
//     let maxIndex = 0;   //maqsimaluri ricxvi  იდექსი ვითომ

//     for (let j = 1; j < arr.length - i; j++) { //მასივის ელემენტების შესადარებლად,  iში ინახება რამდენი ფესი მაქვს გავლილი, ახლიდან რომ აღარ გავიაროთ
//       if (arr[j] > arr[maxIndex]) {
//         maxIndex = j;
//       }
//     }
//  let temp= arr[maxIndex]    //droebiti cvladi    aq vinaxavt maqsimalur ricxvs
//  arr[maxIndex]=arr[arr.length-i-1 ]         //indexia
//  arr[arr.length-i-1 ] =temp
// }

// }

//selectionSort(arr)
// console.log(arr);

//quicksort

// let arr = [20, 6, -4, 45, 10, 9, 67, 4];

// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   const pivotIndex = Math.floor(arr.length / 2); //shua elementi
//   const pivot = arr[pivotIndex];
//   const left = [];
//   const rigth = [];

//   for (let i = 0; i < arr.length; i++) {
// if(i=== pivotIndex){
//     continue
// }

//     if (arr[i] > pivot) {
//       rigth.push(arr[i]);
//     } else {
//       left.push(arr[i]);
//     }
//   }

//   return [...quickSort(left), pivot, ...quickSort(rigth)];
// }
// console.log(quickSort(arr))

//luhn's algorithm

//3782822463100005

// function credit(creditNumber) {

//   const creditString = creditNumber.toString();
//   let length = creditString.length;

//   if (length!==13 && length !==15 && length !==16){
//     return "INVALID"
//   }

//   const firstTwoDigits =Number(creditString.substring(0, 2)); //vigebt pirvel 2ricxvs
//   const firstDigits = Number(creditString[0]);

// if (
//     firstDigits !==4 &&
//     firstDigits !==34 &&
//     firstDigits !==37 &&
//     firstDigits !==51 &&
//     firstDigits !==52 &&
//     firstDigits !==53 &&
//     firstDigits !==54 &&
//     firstDigits !==55 
//     )
// {
//     return "INVALID"
// }
// let checkSum =0

// while(creditNumber>0){


// let digit = Math.floor((creditNumber %100)/10)
// let product =digit * 2;

// if(product >= 10){
//     product = product % 10 + Math.floor(product / 10)
// }

// checkSum += product

// const remainedDigit =creditNumber% 10 
// checkSum += remainedDigit

// creditNumber = Math.floor(creditNumber/100)

// }

// if(checkSum % 10 !==0){
//     return "INVALId"
// }
// if(length === 15 && (firstTwoDigits ===34 || firstTwoDigits ===37)){
//     return "AMEX"
// }else if (
//     length == 16 && firstTwoDigits === 51 || 
//     firstTwoDigits === 51 ||
//     firstTwoDigits === 52 ||
//     firstTwoDigits === 53 ||
//     firstTwoDigits === 54 ||
//     firstTwoDigits === 55 )
//     {
//         return "MASTERCARD"
//     }else if (( length === 13 || length === 16 ) && firstDigits === 4){
//         return "viza"
//     }else {
//         return "INVALID"
//     }
// }
// console.log(credit(3782822463100005))

//seminari 2

// let arr=[-2,1,-3,4,-1,2,1,-5,4]

// function subArr(arr){

//     for(let i=0; i<arr.length; i++){      //saidan daiwyos
//         for(let j=i+1; j<arr.length; j++ ){    //sadamde gagrdzeldes
//             let= num=arr.slice(i,j).reduce((acc,num=>acc+num))
//            if(sum>count){
//             count=sum
//            }
//         }
//     }
//     return count
// }
// console.log(subArr(arr));

// edanis algoritmi

// let arr=[-2,1,-3,4,-1,2,1,-5,4]

// function subArr(arr){
// let current=arr[0]
// let global=arr[0]

// for(let i=1; i<arr.length; i++){
//     current=Math.max(arr[i],current+arr[i])
//     global=Math.max(current, global)
// }
// return global
// }
// console.log(subArr(arr));

// let arr=[1,2,3,4,5,6,7,9]

// function arrPair(arr, target){
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[i]+arr[j]==target){
//                 return [arr[i],arr[j]]
//             }
//         }
//     }
//     return "araris egeti wyvili"

// }
// console.log( arrPair(arr, 11));
