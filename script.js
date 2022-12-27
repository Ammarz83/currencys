
// function Car(model,year){
//     this.name = model
//     this.year = year
// }

// let toyota = new Car("Supra", 1991)
// let bmw = new Car("X5",2020)
// let mers = new Car("w210", 2008)
// person.name = "Andrei"


// function persons(height, age){
//     this.name = height
//     this.year = age
// }

// let Ammar = new persons("161cm", 13)
// let Alihan = new persons("181", 16)
// let human = {
//     arms: 2,
//     legs: 2,
//     eyes: 2,
//     nose: 1,
//     hair_color: "black",
//     height: "165cm"
// }
// let human2 = {
//     arms: 2,
//     legs: 2,
//     eyes: 2,
//     nose: 1,
//     hair_color: "brown"
// }
// let human3 = {
//     arms: 2,
//     legs: 2,
//     eyes: 2,
//     nose: 1,
// }
// let person = {
//     name: "Daniel",
//     __proto__: human    
// }
// let person2 = {
//     name: "Ammar",
//     arms: 2,
//     legs: 2,
//     eyes: 2,
//     nose: 1
// }
// let person3 = {
//     name: "danil",
//     __proto__: human
// }


// let grandfather = {
//     name: "grandfather",
//     __proto__: human,
    
// }
// let grandmother = {
//     name: "grandmother",
//     __proto__:human3,
//     hair_color: "brown"
// }

// let father = {
//     name: "father",
//     __proto__: human,
//     color_eyes: "brown"
// }
// let mother = {
//     name: "mother",
//     __proto__:human2,
//     height: "160cm"
// }
// let son = {
//     name: "Ammar",
//     __proto__:human,

// } ///proto: inheritence
// console.log(grandfather);
// console.log(grandmother);
// console.log(father);
// console.log(mother);
// console.log(son);


// function Car(model,year){
//     this.name = model
//     this.year = year
// }

// let toyota = new Car("Supra", 1991)
// let bmw = new Car("X5",2020)
// let mers = new Car("w210", 2008)

// Car.prototype.age = function(){
//     return new Date().getFullYear() - this.year
// }
// let data = new Date()
// function counter(){
//     let count = 0
//     return function(){
//         return ++count
//     }
// }
// let counter1 = counter()
// let counter2 = counter()
// let counter3 = counter()

// let adam = {
//     legs : 2,
//     arms : 2,
//     nose : 1,
// }

// function Human(name){
//     this.name = name
//     // this.__proto__ = adam
// }
// Human.prototype = adam
// let person = new Human("Nurbolot")

// let child = {
//     name:"karlin",
//     __proto__: person
// }
// function counter(){
//         let count = 0
//         return function(){
//         ++count
//         this.textContent = count
//         }
//     }    
//     let counter1 = counter()

// let btns = document.querySelectorAll('button')

// btns.forEach(function(elem){
//     elem.addEventListener('click', counter(this))
// })

// let colors = ["red","blue","black","pink","white","purple","cyan"]
// let color = document.getElementsByTagName('button');

// let theColor = function() {
// 	let j = 0;
// 	return function() {
// 		this.style.color = colors[j];
// 		j++;
// 		if (j == colors.length){
//             j=0}
// 	}
// }

// for (let i = 0; i < color.length; i++) {
// 	color[i].addEventListener('click', theColor());
// }

// function counter(){
//     let arr = []
    // let count = 0
    // let fib1 = 1
    // let fib2 = 1
    // return function(){
    //     console.log(arr);
    //     let random = Math.floor(Math.random()* 100)
    //     if (arr.includes(random)){
    //         counter()()
    //         console.log("==");
    //     }else{
    //         arr.push(random); return random
    //     }
        // let fib = fib1
        // fib1 = fib2
        // fib2 = fib + fib1
        // this.textContent = fib2
//     }
// }    
// let counter1 = counter()

// let person = {
//     name: "karlin",
//     age:18,
//     job:"Front",
//     year:function(){
//         setTimeout(function(){
//         console.log(new Date().getFullYear() - this.age); 
//     }, 1000)
//     }
// }
// let $input = document.querySelector('input')
// let $buttons = document.querySelectorAll('button')
// function counter(){
//     let count = -1
//     let arr = []
//     return{
//         plus: function(){
//             if (count >= 0){
//                 count++
//             }
//             $input.value = arr[count]
//         },
//         minus: function(){
//             if (count > 0){
//                 count--
//             }
//             $input.value = arr[count]
//         },
//         show: function(){
//             arr.push($input.value)
//             count = arr.length-1
//             console.log(count);
//             console.log(arr);
//             return count
//         }
//     }
// }
// let counter1 = counter()

// $input.addEventListener('change', function(){
//     counter1.show()
// })
// $buttons[0].addEventListener('click', function(){
//     counter1.minus()
// })
// $buttons[1].addEventListener('click', function(){
//     counter1.plus()
// })


// let person = {
//     name: "Nurbolot",
//     age: 18,
//     year: function(){
//         setTimeout(function(){
//             console.log(new Date().getFullYear() - this.age);
//         }.bind(this),2000)
//     }
// }   



// let listForMers = ["KZ", 150000]

// function showKeys(country, price){
//     for (key in this){
//         console.log(this[key]);
//     }
//     console.log(`in this country ${country} for sale ${price} this ${this.model}`);
// }

// function Car(model,year,door,type){
//     this.model = model
//     this.year = year
//     this.door = door
//     this.type = type
// }

// let toyota = new Car("Camry","2022","5","sedan",)
// let bwm = new Car("X5","2023","5","offRoad",)
// let mers = new Car("GelendWagen","2023","5","offRoad",)

// showKeys.call(toyota, "OAE", 35000)
// showKeys.call(bwm, "Kyrgyzstan", 120000)
// showKeys.apply(mers,listForMers)

// let elems = document.getElementById('elem');

// function func() {
// 	alert(this.value);
// }

// func.call(elems,"Иванов" ,"Иван");

// let elem1 = document.getElementById('elem');

// function func(surname, name) {
// 	alert(this.value + ', ' + surname + ' ' + name);
// }
// func.apply(elem1,["Иванов" ,"Иван"])


// let elem = document.getElementById('elem');

// function func(surname, name) {
//     alert(this.value + ',' + surname + ' ' + name);
// }

// let say =  func.bind()

// // func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
// // func('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'

 // let newFunc = func.bind(elem)
 // newFunc('Иванов', 'Иван')

// let human = {
//     legs: 2,
//     arms: 2,
//     nose: 1,
// }

// let user = {
//     name: "Ammar",
//     age: 13,
//     job: "student",
//     language: "JavaScript",
//     __proto__: human
// }
// for (key in user){
//     console.log(key);
// }         
// let arr = ["ammar","danil","nurbolot"]
// for(key in arr){
//     console.log(key);
// } 

// let keys = Object.keys(user)
// keys.forEach(function(elem){
//     console.log(user[elem]);
// })
// let person = {
//     name: "nurbolot",
//     age: 21
// }

// let user2 = Object.create({},{
//     name:{
//         value: "Adilet",
//         enumerable: true,
//         writable: true,
//         configurable: true
//     },
//     age: {
//         value: 20
//     },
//     get: function(){
//         return new Date().getFullYear()- this.age
//     },
//     set: function(){
//         console.log("dont touch");
//     }
// })
//delete user2.name
//true
// delete user2.age
//false

// let country = {
//     countryPop: 7000000,
//     area: 190900,
//     countryName: "kyrgyzstan"
// }

// let bishkek = Object.create({country},{
//     cityName: {
//         value: "bishkek"
//     },
//     population: {
//         value: 1500000
//     }
// })

// function Human(legs,arms,nose){
//     this.legs = legs
//     this.arms = arms
//     this.nose = nose
// }
// Human.prototype = bishkek

// let human = new Human(2,2,1)

// let person = {
//     name: "Nurbolot",
//     age: 21,
//     run: function(){
//         return 20
//     },
//     __proto__: human
// }

// Array.prototype.double = function(){
//     return this.map(function(elem){
//         return typeof elem == "number" ? elem*elem : elem+elem
//     })
// }

// let arr = [1,2,3,4,5,6,7,"ammar"]
// arr.double() ///[1,4,9,16,25,36,49,"ammarammar"]

// function City(name, population){
//     this.name = name
//     this.population = population
// }
// City.prototype.exportStr = function(){
//     return this.name + " " + this.population
// }
// City.prototype.getCity = function(){
//     return getObj.call(this)
// }

// let city1= new City ("ГородН",1000000)
// let city2 = new City ("ГородМ", 1e6)


// function getName(){
//     return this.name
// }
// getName.call(city1)
// getName.call(city2)

// function getObj(){
//     return this
// }



// let d1 = [45,78,10,3]
// d1[4] = 90
// d1[5] = 102
// d1[6] = 435
// d1[7] = 56
// console.log(d1);
// console.log(d1[6],d1[7]);
// let summa = 0
// for ( elem of d1){
//     summa+=elem
// }
// console.log(summa);
// d3 = [45,78,10,3]
// d3[4] = 90
// d3[5] = 102
// d3[6] = 43  
// d3[7] = 100
// let summas = 0
// for ( elem of d3){
//     summas+=elem
// }
// console.log(summas);

// d4 = [45,78,10,3]
// function my(a,b){
//     d4.sort(my) 
// }

// class Phone {
//     constructor(number,model,weight) {
//         this.number = number
//         this.model = model
//         this.weight = weight
//     }
// }
// let samsung = new Phone(70777707,"S20",100.1)

// function sum4(a,b){
//     return a + b
// }
// let sum =(a,b) =>{
//     return a+ b
// }
// let sum1 = (a,b) => {a+b}
// let sum2 = (a,b) => a+b
// let sum3 = a => a+b

// let person = {
//     name: "Ammar",
//     age: 16,
//     year: function(){
//         setTimeout(() => {
//             console.log(new Date().getFullYear() - this.age);
//         }, 2000);
//     }
// }

///rest



// //spread
// let cars = ["toyota","bmw","honda","kia"]

// function show2(arg1,arg2,arg3,arg4){
//     console.log(arg1,arg2,arg3,arg4);
// }
// show2(...cars)


// let symbol = Symbol.for('mySymbol')
// let symbol2 = Symbol('mySymbol')
// let symbolName = Symbol.keyFor(symbol)
// console.log(symbolName);
// console.log(symbol === symbol2);
// console.log( Symbol.for('mySymbol') == Symbol.for('mySymbol'))

// ///Символы это уникальные  значение помогают решить конфликт имен свойств.
// ///Когда объекты большие. Либо используются при создании библиотеки для уникальных имён и недопущения конфликта имён снаружи библиотеки 




// let user = {
//     name: "Ammar",
//     age: 13,

//     [Symbol.for('password')]: 'Ammar13'
//   };
//   console.log(user);
//   console.log(user.password);
//   console.log(user[Symbol.for('password')]);
//   console.log(Object.getOwnPropertySymbols(user));


// let $sred = document.querySelectorAll('.sred')
// let $sorange = document.querySelectorAll('.sorange')
// let $sgreen = document.querySelectorAll('.sgreen')
// let $wred = document.querySelectorAll('.wred')
// let $orange = document.querySelectorAll('.worange')
// let $green = document.querySelectorAll('.wgreen')


// let red = true
// let orange = false
// let green = false
// let redTime
// let orangeTime
// let greenTime


// let redInterval = setInterval(function () {
//     clearInterval(greenTime)
//     $sred[0].style.backgroundColor = "red"
//     $sred[1].style.backgroundColor = "red"
//     $sgreen[0].style.backgroundColor = "white"
//     $sgreen[1].style.backgroundColor = "white"
//     red = false
//     orange = true
//     $sred[0].innerHTML = "2"
//     $sred[1].innerHTML = "2"
//     redTime = setInterval(function () {
//         $sred[0].textContent = $sred[0].textContent - 1
//         $sred[1].textContent = $sred[0].textContent
//     }, 1000)
//     let orangeInterval = setTimeout(function () {
//         clearInterval(redTime)
//         $sred[0].style.backgroundColor = "white"
//         $sred[1].style.backgroundColor = "white"
//         $sorange[0].style.backgroundColor = "orange"
//         $sorange[1].style.backgroundColor = "orange"
//         orange = false
//         green = true
//         $sorange[0].innerHTML = "1"
//         $sorange[1].innerHTML = "1"
//         orangeTime = setInterval(function () {
//             $sorange[0].textContent = $sorange[0].textContent - 1
//             $sorange[1].textContent = $sorange[0].textContent
//         }, 1000)
//     }, 2000)
//     let greenInterval = setTimeout(function () {
//         if (green) {
//             clearInterval(orangeTime)
//             $sgreen[0].style.backgroundColor = "greenyellow"
//             $sgreen[1].style.backgroundColor = "greenyellow"
//             $sorange[0].style.backgroundColor = "white"
//             $sorange[1].style.backgroundColor = "white"
//             red = true
//             green = false
//             $sgreen[0].innerHTML = "2"
//             $sgreen[1].innerHTML = "2"
//             greenTime = setInterval(function () {
//                 $sgreen[0].textContent = $sgreen[0].textContent - 1
//                 $sgreen[1].textContent = $sgreen[0].textContent
//             }, 1000)
//         }
//     }, 4000)
// }, 7000)




// let promise = new Promise((resolve, reject) => {
//     setTimeout(function(data)  {
//         console.log("Server: from requset checking data in dataBase");
//         console.log("...");
//         resolve((["Ammar","NUrbolot","Arsen"]))
//         reject("error")
//     },1000 );
// })

// promise.then(function(data){
//     let find = data[0]
//     if(find == "Ammar");
//     // reject("error: Ammar is here")
// })

// setTimeout(function(){
//     console.log("Database: data was found sending the data to the server");
//     console.log("...");
// }).then(function(data){
//     setTimeout(function(data) {
//         console.log("Server: recieved the data from request and making their format Client and sending");
//     }, 2000);
// }).then( function(){
//     setTimeout(function(){
//         console.log("Client: recieved data and showing");
//         console.log("...");
//     }, 3000);
// }).catch(function(error){
//     console.log(error);
// })

// let url = 'https://jsonplaceholder.typicode.com/users'
// let users = document.querySelector('users')

// fetch(url)
// .then( response =>{
//     return response.json()
// })
// .then(data => {
//     data.forEach(element => {
//         console.log(element.name);
//     });
// })
let $list = document.querySelector('.list')
let $fromSelect = document.querySelector('#fromSelect')
let $toSelect = document.querySelector('#toSelect')
let $toImg = document.querySelector('#toImg')
let $fromImg = document.querySelector('#fromImg')
let $fromInput = document.querySelector('#fromInput')
let $toInput = document.querySelector('#toInput')


let url = "https://www.cbr-xml-daily.ru/daily_json.js"

fetch(url)

    

.then(resp => resp.json())
    .then(data => {
        console.log(data)
        let valute = data.Valute
        Object.keys(valute).forEach(function(elem){
            let item = valute[elem]
            $fromSelect.insertAdjacentHTML('beforeend',`
            <option value="${item.CharCode}">${item.CharCode}</option>
            `)
            $toSelect.insertAdjacentHTML('beforeend',`
            <option value="${valute.KGS.CharCode}">${valute.KGS.CharCode}</option>
            `)
            $list.insertAdjacentHTML('beforeend', `
                <div class="valute">
                    <img crossorigin = 'anonymous' src="https://countryflagsapi.com/png/${item.NumCode}">
                    <p>${item.CharCode}</p>
                    <p>${item.Name}</p>
                </div>
            `)
        })

    })

    let $listBtn = document.querySelector('#listBtn')
let $calc = document.querySelector('#calc')
let $pageList = document.querySelector('.pageList')
let $pageCalc = document.querySelector('.pageCalc')

$listBtn.addEventListener('click', function(){
    $pageList.classList.remove('hide')
    $pageCalc.classList.add('hide')
})
$calc.addEventListener('click', function(){
    $pageList.classList.add('hide')
    $pageCalc.classList.remove('hide')
})