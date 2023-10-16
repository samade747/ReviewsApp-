const reviews = [
    { id: '01',
      name: 'samad',
      desination: 'Webdeveloper app dev ',
      detail: 'hhha'},

      {id: '02',
      name: 'kamil',
      desination: 'Webdeveloper',
      detail: 'asdsda'},

      {id: '03',
      name: 'haroon',
      desination: 'Webdevelasddsaoper',
      detail: 'asdsa'}

]

let currIndex = 0;


function lelei() {
    if(i = 0; i > 3; i++){
        i = currIndex;
    

    let lili = document.getElementById('main-name');
    let workName = document.getElementById('work-name');
    let desMain = document.getElementById('dest-main');

    lili.textContent = reviews[currIndex].name;
    workName.textContent = reviews[currIndex].desination;
    desMain.textContent = reviews[currIndex].detail;

    }
}
