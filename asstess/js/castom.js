let myclock = document.querySelector('.clock')
myclock.append(myclockfun());
myclock.append(numberset()); 
myclock.append(kata()); 


 function myclockfun(){
    let parentdiv = document.createElement('div');
    parentdiv.classList.add('striap-area');
    for(let i = 0 ;i<60; i++){
        let spanTagforstrip = document.createElement('span');
        
        if(i % 5 == 0){
            
            spanTagforstrip.classList.add ('striap', 'cercel');
        }
        else {
            spanTagforstrip.classList.add ('striap');
        }

        spanTagforstrip.style.transform= `rotate(${i*6}deg)`;

        parentdiv.append(spanTagforstrip);
    }

    
        
    
   

    return parentdiv; 
}
function numberset(){
    let numberarea = document.createElement('div');
    numberarea.classList.add('number-area');
    for(let i = 1;i<=12; i++ ){

        let num = document.createElement('div');
        num.classList.add('number');
        num.style.transform= `rotate(${i*30}deg)`;
        let spantag = document.createElement('span');
        spantag.textContent= i;
        spantag.style.transform=`rotate(${-i*30}deg)`;

        num.append(spantag);
        numberarea.append(num);
    }
        return numberarea;
}

function kata(){
    let kataArea= document.createElement('div');
    kataArea.classList.add('kata-area');
    let minKata = document.createElement('div');
      minKata.classList.add('min');
    let hourKata = document.createElement('div');
    hourKata.classList.add('hour');
    let secKata = document.createElement('div');
    secKata.classList.add('sec');

  



    kataArea.append(minKata)
    kataArea.append(hourKata)
    kataArea.append(secKata)



    return kataArea;
}

kata();
function updateKata(){
    let d = new Date();
    let rs = d.getSeconds();
    let rm = d.getMinutes();
    let rh = d.getHours();
    let rt = 30;

    let secKata = document.querySelector('.sec');
    let minKata = document.querySelector('.min');
    let hourKata = document.querySelector('.hour');
    console.log(rs);
    console.log(rm);
    console.log(rh);

    secKata.style.transform = `rotate(${rs*6}deg)`;
    minKata.style.transform = `rotate(${rm*6}deg)`;
    hourKata.style.transform = `rotate(${((rh %12)*30)+rm*.5}deg)`;


}
setInterval(updateKata, 1000);
updateKata()





