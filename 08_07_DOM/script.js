// JS DOM

// document.getElementBy...
// const myDom = document.getElementById('dom');

// console.log(myDom);

// const instructor = document.getElementById("info");
// console.log(instructor);

// const ins = document.getElementById("instructor");
// console.log(ins);


//ClassName..........
// const withClassName = document.getElementsByClassName("class-info");
// console.log(withClassName[0]);

//TagName...........
// const cw = document.getElementsByTagName("h3");
// console.log(cw);

//querySelector...........
//console.log(document.querySelectorAll(".class-info"));
// console.log(document.querySelector("#instructor"));
// console.log(document.querySelectorAll("h3")[0]);

// console.log(document.querySelectorAll("div h3"));
// console.log(document.querySelectorAll(".class-info h3"));

////////////////////////////////////////////////

//MANİPUlATİON

// const brands = document.querySelector("#brands");
// // console.log(brands);

// //brands.innerHTML += `<li>NioyaTech</li>`;// listeye yeni eleman ekleme

// brands.innerHTML = brands.innerHTML + `<li>NioyaTech</li>`; //listeye yeni bir eleman ekledik

// const classBrands = document.querySelectorAll(".brand");

// console.log(classBrands[3].innerText);//yalnızca text i dödürür

// const copyRight = document.querySelector("footer p"); //footer ın altındaki p

// // console.log(copyRight);
// // copyRight.innerText = "<h1>&copy; 2020 Clarusway.com</h1>"// inner.text yazarsak hepsini metin olarak algılar

// copyRight.innerHTML = "<h1>&copy; 2020 Clarusway.com</h1>"; // inner Html ile doğru uygular

// const lessonList = [
//     { id: 1, name: "HTML" },
//     { id: 1, name: "CSS" },
//     { id: 1, name: "JS" },
//     { id: 1, name: "REACT" },
// ];

// const lessonsElm = document.getElementById("lessons");
// lessonList.forEach(element => {
//     lessonsElm.innerHTML += `<li class="lessons-item">${element.name}</li>`;
// });//elamanları liste halinde yazdırdık


/////////////////////////////////////////////////////////////////////////////////
//setAttribute getAttribute

// const mdn = document.querySelector("#mdn");

// // console.log(mdn);
// const mdnHrefAttr = mdn.getAttribute("href");
// console.log(mdnHrefAttr);

// mdn.setAttribute("href", "https://www.w3schools.com/");

// mdn.innerHTML = "W3Schools";