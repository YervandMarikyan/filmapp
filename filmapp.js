"use strict";
// Homework 19.2
// filmapp-ի մեջ փոփոխություններ եք անում, ամբողջովին պետք ա ռեֆակտորինգ անեք էդ կոդը, ու դա 
// նորմալ ա դուք պետք ա սովորեք ձեր կոդերը փոփոխել կամ ուրիշի կոդերի վրա աշխատանքներ տանել, 
// հետևաբար բոլոր այն ֆունկցիաները, որոնք մենք ստեղծել եք օբջեքթից դուրս, դարձրեք օբջեքթի մեթոդներ

let numberOfFilms;

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start() {
		numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
		while (isNaN(numberOfFilms) || numberOfFilms == null || numberOfFilms == "" || numberOfFilms < 1) {
			alert(`Անհրաժեշտ է մուտք անել 0-ից բարձր թիվ !!!`);
			numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
		}
	},
	showMyDB() {
		return personalMovieDB.privat === false ? `Տվյալների բազան փակ է!` : personalMovieDB;
	},
	yourFavoriteGenres() {
		// Homework 19.4
		// yourFavoriteGenres method-ում թույլ չտալ որպեսզի յուզեռը դատարկ տող ուղարկի, քենսլ անի, 
		// ու 20ից շատ սիմվոլ գրի, ու երբ որ յուզեռը էդ հարցերին պատասխանի, դուք console-ում forEach-ով տպեք 
		// յուզեռի սիրած ժանրերը բայց թվերով ու որ սկսվի մեկից, այսինքն Ձեր սիրելի ժանրը։ ԺԱՆՐ 1․․․

		for (let i = 0; i < 3; i++) {
			const favGenre = prompt(`${i + 1}. Ձեր նախընտրելի ժանրը`, "");

			if (favGenre != null && favGenre.trim() != "" && favGenre.length <= 20) {
				personalMovieDB.genres[i] = favGenre;
				console.log("OK with name of genre");				
			} else {
				console.log("ERROR with name of genre");
				i--;
			}
		}
		personalMovieDB.genres.forEach(function(val, index) {
			console.log(`ԺԱՆՐ ${index + 1}. ${val}`);
		});
	},
	detectUserPersonalLevel () {
		if (numberOfFilms < 10) {
			console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
		} else if (numberOfFilms < 30) {
			console.log("Դուք ֆիլմի սիրահար եք");
		} else {
			console.log("Դուք Կինոման եք !!!");
		}
	},
	rememberMyFilms () {
		for (let i = 0; i < 2; i++) {
			const a = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", "");
			const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք", "");
		
			if (a != null && b != null && a.trim() != "" && b.trim() != "" && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log("DONE");
			} else {
				console.log("ERROR");
				i--;
			}
		}
	},
	// Homework 19.3
	// ստեղծեք նոր մեթոդ որի անունը պետք է  լինի isVisibleMyDB, ու ինքը պետք ա ստուգի, եթե privat-ը 
	// եթե true ա, դարձնի false, եթե false ա, դարձնի true, թեստ անել showMyDB մեթոդի հետ
	isVisibleMyDB() {
		//Vesion 1
		personalMovieDB.privat = !personalMovieDB.privat;		

		//Vesion 2
		//personalMovieDB.privat === true ? personalMovieDB.privat = false : personalMovieDB.privat = true;

		//Vesion 3
		// if(personalMovieDB.privat === true) {
		// 	personalMovieDB.privat = false;
		// } else {
		// 	personalMovieDB.privat = true;
		// }		
	}
};

const {start, showMyDB, yourFavoriteGenres, detectUserPersonalLevel, rememberMyFilms, isVisibleMyDB} = personalMovieDB;
start();
detectUserPersonalLevel();
rememberMyFilms();
yourFavoriteGenres();
isVisibleMyDB();
console.log(showMyDB());
console.log(personalMovieDB.genres);







