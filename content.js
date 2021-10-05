var urlPage = window.location.toString();
urlPage = urlPage.replace("#",'')
var array = urlPage.split("/");

// question name
var questionName = document.querySelector('.title').textContent.split('.')[1];
questionName = questionName.replaceAll(' ', '');

// file name
fileName = array[array.length -2] + (array[array.length-1]).toUpperCase() +"-" + questionName + ".cpp"
console.log(fileName)
// get the title div from Codeforces.com
var el1 = document.querySelector(".title")

var downloadLink = document.createElement('a');
downloadLink.innerHTML = "Code"
downloadLink.style.marginLeft = "24px"
downloadLink.style.textDecoration = "none"

el1.appendChild(downloadLink)

// make a text-file
var blob = new Blob([], {type: "text/plain;charset=utf-8"});

const link = URL.createObjectURL(blob);

downloadLink.href = link
downloadLink.setAttribute("download", fileName); // Choose the file name

    
