//Q2 Personal name: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var hellos = "hira naz";
console.log(" Hello ".concat(hellos, ", would you like to learn some Python today"));
console.log('-------------------------------------------------------');
//Q3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var person3 = "hafsa hammad";
console.log(person3.toLowerCase());
console.log(person3.toUpperCase());
console.log(person3.charAt(0).toUpperCase() + person3.slice(1));
console.log(person3.charAt(0).toLowerCase() + person3.slice(6));
console.log('------------------------------------------');
//Q4Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log("Tonny Robbin once said,\"your past does not equal your future\"");
console.log('-------------------------------------------------------');
//Q5Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famousname = "tonny robbin";
var famousquote = "your past does not equal your future";
console.log("".concat(famousname, " once said, ").concat(famousquote));
console.log('-------------------------------------------------------');
//Q6 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
//example 1
console.log("Hello\thow\tare\tyou");
console.log("Hello\nhow\nare\nyou");
console.log('---------------------------------------');
//example 2
var fname = "hira\tnaz";
var fname1 = "hira\nnaz";
console.log("".concat(fname, "\n").concat(fname1));
console.log('------------------------------------');
//example 3
var fname2 = "hira\tnaz";
var fname3 = "hira\nnaz";
var fname4 = "".concat(fname2, "\n").concat(fname3);
console.log(fname4);
console.log('-------------------------------------------------------');
//Q7 Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// example 1
console.log(4 + 4);
console.log(12 - 4);
console.log(16 / 2);
console.log(2 * 4);
console.log('----------------------------');
//example 2 addition
var a = (2);
var b = (6);
console.log("Addition", a + b);
console.log('---------------------------------');
//example 3 addition
var subtraction = (12 - 4);
console.log("subtraction ".concat(subtraction));
console.log('--------------------------------');
//example 4 multiplication
var multiplication = 2 * 4;
console.log("Multiplication ".concat(multiplication));
console.log('----------------------------------');
//example 4 division
var division = 16 / 2;
console.log("Division", division);
console.log('-------------------------------------------------------');
//Q8You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
console.log(4 + 4);
console.log(12 - 4);
console.log(16 / 2);
console.log(2 * 4);
console.log('-------------------------------------------------------');
//Q9Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.const favorite:number=99;
var favorite = 99;
console.log("My favorite number is", favorite);
console.log('-------------------------------------');
//Q10Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//example 3 addition
var Subtraction = (12 - 4);
console.log("Subtraction ".concat(Subtraction));
console.log('--------------------------------');
//example 4 multiplication
var Multiplication = 2 * 4;
console.log("Multiplication ".concat(Multiplication));
console.log('----------------------------------');
//Q11Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var number = ["Ali", "Usman", "Umar"];
console.log(number[0]);
console.log(number[1]);
console.log(number[2]);
console.log('-------------------------------------------------------');
//Q12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var friends = ["Ali", "Usman", "Umer"];
var message = "would you like to learn typescript";
console.log(friends[0] + " " + message);
console.log(friends[1] + " " + message);
console.log(friends[2] + " " + message);
console.log('-------------------------------------------------------');
//Q13Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transportation = ["honda", "Suzuki", "Mirrah"];
console.log(transportation[2]);
console.log('-------------------------------------------------------');
//Q14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
console.log("hello\nhina\nhamna\narha\nasim");
var aname = "hina";
console.log('-------------------------------------');
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var invitations = ["hania", "fatima"];
var count_invitations = invitations.length;
console.log("".concat(count_invitations, " people will come to the dinner"));
console.log('-------------------------------------------------------');
/*Q15-Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
var guesttArr = ["hassan", "hafsa", "hammad"];
var cannotAttend = "hammad";
//console.log(cannotAttend  +   "can not attend the dinner.");
var newGuest = "hira";
guesttArr[guesttArr.indexOf(cannotAttend)] = newGuest;
//console.log(guesttArr)
guesttArr.map(function (items) { return console.log("Dear ".concat(items, ", you are invited to the dinner.")); });
console.log('-------------------------------------------------------');
//Q16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
var guestArr = ["hani", "hadia", "ayan", "arha"];
var CannotAttend = "arha";
var newguest = "hamna";
guestArr[guestArr.indexOf(CannotAttend)] = newguest;
//console.log(guestArr);
//guestArr.map((items) =>
// console.log(`Dear ${items}, I found a bigger dinner table so I am invited more people. `));
//part2
var guestbeg = "arha";
guestArr.unshift(guestbeg);
//console.log(guestbeg);
//part3
var middleguest = "fatima";
var middleIndex = guestArr.length / 3;
guestArr.splice(middleIndex, 0, middleguest);
//console.log(guestArr);
//part 4
guestArr.push("hoorain");
console.log(guestArr);
//part5
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", you are invited the more peoples list on the dinner."));
});
console.log('---------------------------------------------------------------------------------');
//Q17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
/* • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
//1 initialize list of people
var GuestArr = ["hania", "fatima", "hadia", "ayan", "arha"];
//2 information that only two people can be invited
console.log("Due to limited space available,only two people can be invited for the dinner");
//3 removeing guest untill only two names renames
//while (GuestArr.length > 2 )  
//const removedguest = GuestArr.pop();
//console.log(`sorry, ${removedguest},"you are no longer invited guest in the dinner"`);
//4 print invitation details.guest
//Let guest:String =["hania","fatima",];
//.forEach (function (guest) {
//console.log(`Dear, ${guest},you are now invited to dinner`)
//})
//5 removing last two names from FileList
//guest.pop();
//guest.pop();
//console.log("final Guest list", guest);
/*Q18 Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.*/ //task 18
var favorite_places = ["Palestine", "Saudi-Arabia", "Kuwait", "Yemen", "turkey"];
console.log(favorite_places);
var sorted_favorite_places = __spreadArray([], favorite_places, true).sort();
console.log(sorted_favorite_places);
console.log(favorite_places);
var reverse_sorted_favorite_places = sorted_favorite_places.reverse();
console.log(reverse_sorted_favorite_places);
favorite_places.reverse();
console.log(favorite_places);
favorite_places.reverse();
console.log(favorite_places);
favorite_places.sort();
console.log(favorite_places);
favorite_places.reverse();
console.log(favorite_places);
console.log('-------------------------------------------------------');
//Q-19Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var cities = ["karachi", "lahore", "islamabad", "sindh"];
console.log("list of cities:");
console.log(cities);
console.log('-------------------------------------------------------');
//Q-20They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var person = { name: "hira", fname: "female", age: 27 };
console.log(person);
console.log('-------------------------------------------------------');
//Q-21Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var days = ["monday", "tuesday", "wednesday", "thursday", "Friday", "saturday", "sunday"];
//console.log(days{7})
console.log(days[6]);
console.log('-------------------------------------------------------');
//Q-22Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
var car = "subaru";
console.log("is car == 'subaru'? predict true");
console.log(car == "subaru");
console.log("is car !='honda city'? predict true");
console.log(car != "honda city");
console.log("is car == 'Sabaru'? predict false");
console.log(car == "sabaru");
console.log("is car ! == 'honda city'? predict false");
console.log(car != "honda city");
console.log("is car ! == 'SUBARU'? predict false");
console.log(car != "sabaru");
console.log("is car.length == 6? predict true");
console.log(car.length == 6);
console.log("is car.length != 12? predict true");
console.log(car.length != 12);
console.log("is 10>45? predict false");
console.log(10 > 45);
console.log("is 3<=2 ?predict false");
console.log(3 <= 2);
console.log("is 72 >= 84? predict false");
console.log(72 >= 84);
console.log("is car =='sabaru' && car.length ==10? predict true");
console.log(car == 'subaru' && car.length == 10);
console.log("----------------------------------------------------------------");
//Q-23
var name_1 = "hira";
var name_2 = "hira naz";
var name_3 = "miss hira naz";
if (name_1 == name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
console.log("-----------------");
if (name_1 == name_2) {
    console.log("name are equal");
}
else {
    console.log("name are not equal");
}
console.log("---------------");
if (name_2 == name_3) {
    console.log("name are equal");
}
else {
    console.log("name are not equal");
}
console.log("--------------------");
if (name_1 == name_2) {
    console.log("names are equal");
}
console.log("---------------");
if (name_2 == name_3) {
    console.log("names are equal");
}
console.log("--------------------");
if (name_1 == name_3) {
    console.log("names are equal");
}
console.log("--------------------");
var age_1 = 18;
var age_2 = 22;
if (age_1 == 18) {
    console.log("eligible for vote");
}
console.log("--------------------");
if (age_2 == 22) {
    console.log("eligible for vote in order catergaery");
}
console.log("--------------------");
if (age_1 <= age_2) {
    console.log("younger");
}
console.log("--------------------");
if (age_2 >= age_1) {
    console.log("older");
}
console.log("--------------------");
if (age_1 == 18 && age_2 == 22) {
    console.log("person is eligible for vote");
}
console.log("--------------------");
if (age_1 == 18 && age_2 != 22) {
    console.log("person is not eligible for vote");
}
console.log("--------------------");
var country = ["pakistan", "india", "japan", "uae",];
//if(country.includes("pakistan")){
// console.log("pakistan is in countrylist")
//}
console.log('--------------------------------------------------------');
//if(!country.includes("America")) {
//   console.log("America is not include in an array");
//}
console.log('--------------------------------------------------------');
//Q-24
//let alien_colour : string = "green"
//if (alien_colour == "green")
//   console.log("you earn 5 points");
console.log('--------------------------------------------------------');
//let alien_colour : string = "red"
//if (alien_colour == "green")
//   console.log("no output");
//Q-25
console.log('--------------------------------------------------------');
/*let alien_colour ="green"
if (alien_colour == "green"){
    console.log("player just earned 5 points for shooting the alien")
}else {
    console.log("player just earned 10 points ")
}console.log('--------------------------------------------------------')

let alien_colour ="red"
if (alien_colour == "green"){
    console.log("player just earned 5 points for shooting the alien")
}else {
    console.log("player just earned 10 points ")
}*/
//Q-26
console.log('--------------------------------------------------------');
var alien_colour = "yellow";
if (alien_colour == "green") {
    console.log("5 points");
}
else if (alien_colour == "yellow") {
    console.log("10 points");
}
else {
    console.log("15 points");
}
//Q-27
var age = 18;
if (age < 2) {
    console.log("you are a baby");
}
else if (age > 4) {
    console.log("you are a toldder");
}
else if (age < 13) {
    console.log('you are a kid');
}
else if (age > 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are a adult");
}
else {
    console.log("you are older");
}
//Q-28
console.log("------------");
/*let favorite_fruits :string [] = ["kivi","apples","oranges","peach","berry"]

if (favorite_fruits.includes("kivi") ) {
    console.log("kivi")
}

if (favorite_fruits.includes("peach") ){
    console.log("peach")
}

if (favorite_fruits.includes("oranges") ){
    console.log("oranges")
}

if(favorite_fruits.includes("apples") ){
    console.log("your really like bananas")
}

if (favorite_fruits.includes("berry") ){
    console.log("you really like bananas")
}*/
//Q-29
console.log('--------------------------------');
var users = ["admin", "eric", "hassan", "ali", "fatima"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user_1 = users_1[_i];
    if (user_1 === "admin") {
        console.log("hello admin,would you like to see a status report");
    }
    else {
        console.log("hello ".concat(user_1, ",thank you for loggin again"));
    }
}
//Q-30
console.log("-------------------------------------");
var user = ["admin", "eric", "hassan", "ali", "fatima"];
if (users.length === 0) {
    console.log('we need to find some user');
}
else {
    for (var _a = 0, users_2 = users; _a < users_2.length; _a++) {
        var user_2 = users_2[_a];
        if (user_2 === "admin") {
            console.log("hello admin,would you like to see a status report ");
        }
        else {
            console.log("hello ".concat(user_2, ",thank you for loggin in again"));
        }
    }
}
users = [];
if (users.length === 0) {
    console.log("we need to find some users!");
}
//Q-31
console.log("-----------------------------");
/*let current_users : string [] = ["Admin","Eric","Ali","Hamza","Fatima"]
let new_users : string[] = ["admin","fatima","aliza","hasseb","noor"]
let current_users_list : string[] = current_users.map(user => user.toLowerCase())

for(let new_user of new_users){
    if(current_users_list.includes (new_user.toLowerCase() )){
        console.log(`sorry ${new_users}that name is taken`)
    }else{
        console.log(`yes ${new_users}that name is taken`)
    }
}*/
//Q-36
console.log("-----------------------------------------");
function makeShirt(size, text) {
    console.log(" you order a ".concat(size, " shirt that says ").concat(text));
}
makeShirt('large', '"i love typescript" ');
makeShirt('small', '"i love typescript"');
console.log("-----------------------------------------");
//Q -37
/*function makeShirt(size : string, text: string = 'I Love typescript') :void {
    console.log(`you have order a ${size}, shirt that says ${text}`)
}
//makeShirt();
//makeShirt('large')

//different message
makeShirt('small','i need a big shirt to wear')*/
console.log("------------------------------");
//Q-38
function describe_city(city, country) {
    if (country === void 0) { country = 'pakistan'; }
    console.log("".concat(city, "is in ").concat(country));
}
describe_city('karachi');
describe_city('france', 'europe');
describe_city('lahore', ' pakistan');
