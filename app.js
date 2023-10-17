const reviews = [
    { id: '01',
      name: 'Elon Musk',
      desination: 'Owner Tesla Starlink',
      detail: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis dolorum voluptates eum. Illo odio nisi esse laudantium excepturi nesciunt dolorum numquam placeat repudiandae rem non, beatae harum sint, impedit dolor.atur',
      image: src="./images/emouncle.png"},

      {id: '02',
      name: 'JeffBezoz',
      desination: 'Owner Amazon',
      detail: 'asdsdaLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam id blanditiis pariatur a fuga harum placeat tempora numquam at corrupti? Maiores laborum deleniti iste ipsum dolor ipsa neque id eius',
       image: src="./Images/jeffuncle.png"},

      {id: '03',
      name: 'Bill Gates',
      desination: 'Microsoft',
      detail: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis dolorum voluptates eum. Illo odio nisi esse laudantium excepturi nesciunt dolorum numquam placeat repudiandae rem non, beatae harum sint, impedit dolor.atur',
      image: src="./Images/bill-gates-42396.png"},

      {id: '04',
      name: 'zhang yiming ',
      desination: 'Owner Tiktok',
      detail: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis dolorum voluptates eum. Illo odio nisi esse laudantium excepturi nesciunt dolorum numquam placeat repudiandae rem non, beatae harum sint, impedit dolor.atur',
      image: src="./Images/download.png" },

      {id: '05',
      name: 'samad',
      desination: 'Owner',
      detail: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis dolorum voluptates eum. Illo odio nisi esse laudantium excepturi nesciunt dolorum numquam placeat repudiandae rem non, beatae harum sint, impedit dolor.atur'
      }



]

let currIndex = 0;


    let lili = document.getElementById('main-name');
    let workName = document.getElementById('work-name');
    let desMain = document.getElementById('dest-main');
    let imageMain = document.getElementById('img-main');

    lili.textContent = reviews[currIndex].name;
    workName.textContent = reviews[currIndex].desination;
    desMain.textContent = reviews[currIndex].detail;    
    imageMain.src = reviews[currIndex].image;


function updatingReview() {
       
         
    let lili = document.getElementById('main-name');
    let workName = document.getElementById('work-name');
    let desMain = document.getElementById('dest-main');
    let imageMain = document.getElementById('img-main');
    

    lili.textContent = reviews[currIndex].name;
    workName.textContent = reviews[currIndex].desination;
    desMain.textContent = reviews[currIndex].detail;   
    imageMain.src = reviews[currIndex].image;  
   
}

// function updatingReview (){

    
         
//     let lili = document.getElementById('main-name');
//     let workName = document.getElementById('work-name');
//     let desMain = document.getElementById('dest-main');
//     let imageMain = document.getElementById('img-main');
    

//     lili.textContent = reviews[currIndex].name;
//     workName.textContent = reviews[currIndex].desination;
//     desMain.textContent = reviews[currIndex].detail;   
//     imageMain.src = reviews[currIndex].image;

    
// }


 
function lelei() {
    if(currIndex < reviews.length){
        currIndex++;
    } else {
        currIndex = 0;
    }
    updatingReview();
}


function leleix(){
    if(currIndex < reviews.length){
        currIndex++;
    } else {
        currIndex = 0;
    }
    updatingReview();
}