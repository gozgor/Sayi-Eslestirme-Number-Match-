// let childDiv;
let divs=[];
let imgs=[];
let sayiTemp=[];
let islemSonucu=[];

const mainDiv = document.querySelector(".first");
for (let i =0;i<20;i++){
const childDiv =document.createElement("div");
childDiv.classList.add("child")
childDiv.classList.add(i)
const img =document.createElement("img");
img.src="desen.jpg";
img.classList.add("desen");
img.style.zIndex="999";
divs.push(childDiv);
imgs.push(img);

mainDiv.appendChild(childDiv);

mainDiv.appendChild(img);
}




  for (let i =0;i<20;i++){
  imgs[i].style.top=divs[i].offsetTop+"px";
  imgs[i].style.left=divs[i].offsetLeft+"px";
  }


let sayilar=[];

sayiUret=()=>{
  for (let i=0;i<4;i++){
    let sayi=Math.floor(Math.random()*20+1);
    sayilar.push(sayi);
  }
  }
function opSec(){
let indeks =Math.floor(Math.random()*20);
for (let i=0;i<20;i++){
while(sayiTemp.includes(indeks)){
indeks =Math.floor(Math.random()*20);

}
sayiTemp.push(indeks);
}
  bolum=(ilk,ikinci)=>{
    return ilk/ikinci;
  }
  toplam=(ilk,ikinci)=>{
    return ilk+ikinci;
  }
  carpim=(ilk,ikinci)=>{
    return ilk*ikinci;
  }
  cikarma=(ilk,ikinci)=>{
    return ((ilk-ikinci)>0)?(ilk-ikinci):(ikinci-ilk);
  }
}
  let temp;
 esitmi=(sayiGrup,islem)=>{
  for (let i = 0; i < 4; i++) {
     for (let j = 0; j < 4; j++) {
       for (let k = 0; k < 4; k++) {
         for (let l = 0; l <4; l++) {
           if(islem(sayiGrup[i],sayiGrup[j])===islem(sayiGrup[k],sayiGrup[l]) &&i!==k && l!==j&&i!==l&&j!==k&&i!==j&&k!==l){
             islemSonucu.push(islem(sayiGrup[i],sayiGrup[j]));
              if(islem==cikarma){
                if(sayiGrup[j]>sayiGrup[i]){
                  temp=sayiGrup[j];
                  sayiGrup[j]=sayiGrup[i]
                  sayiGrup[i]=temp;

                }
                if(sayiGrup[l]>sayiGrup[k]){
                  temp=sayiGrup[l];
                  sayiGrup[l]=sayiGrup[k]
                  sayiGrup[k]=temp;

                }
              }
             return [sayiGrup[i],sayiGrup[j],sayiGrup[k],sayiGrup[l]];
           }
         }
       }
     }
  }
  return [0,0,0,0];
 }

 let islemSec,secilenİslem,operand;
 let deneme=[];
function doldurEkrana(){
deneme[2]=0;
 for (let i = 0; i < 10; i++) {
      islemSec=Math.floor(Math.random()*3+1)

      if(islemSec===1){
        secilenİslem=toplam;
      }
      else if(islemSec===2) {
        secilenİslem=cikarma;
      }
      else if(islemSec===3){
        secilenİslem=carpim;
      }
      while(deneme[2]==0)  {
        sayilar=[];
          sayiUret();
        deneme=esitmi(sayilar,secilenİslem);


      }

    const ekleme=document.getElementsByClassName(sayiTemp[i])
    const eklemeİki=document.getElementsByClassName(sayiTemp[i+10])
    if(secilenİslem==toplam){operand="+";}
    if(secilenİslem==cikarma){operand="-";}
    if(secilenİslem==carpim){operand="*";}
    ekleme[0].innerText= deneme[0]+operand+ deneme[1];
    ekleme[0].dataset.sonuc=islemSonucu[i];
    eklemeİki[0].dataset.sonuc=islemSonucu[i];
    eklemeİki[0].innerText= deneme[2]+operand+ deneme[3];


      deneme[2]=0;
 }
}
 let sayac=[];
function resimGoster(){
  let puan=0;
  const puanId=document.getElementById("puan")
 imgs.forEach((item,i) => {
    item.onclick=()=> {
      sayac.push(i)

      if (sayac.length==1){

        imgs[i].style.visibility="hidden";
       }
      if(sayac.length>1&&(divs[sayac[1]].dataset.sonuc==divs[sayac[0]].dataset.sonuc)){

        imgs[sayac[1]].style.visibility="hidden";
        imgs[sayac[0]].style.visibility="hidden";
        puan+=parseInt(divs[sayac[1]].dataset.sonuc);
        puanId.innerText=puan;
          sayac=[];
      }
      if(sayac.length==2&&(divs[sayac[1]].dataset.sonuc!==divs[sayac[0]].dataset.sonuc)){

          imgs[sayac[1]].style.visibility="hidden";
          imgs[sayac[0]].style.visibility="hidden";
        setTimeout(function(){
          imgs[sayac[0]].style.visibility="visible";
          imgs[sayac[1]].style.visibility="visible";
          sayac=[];
        },1500)

      }
    }
 });}
 function gorunurYap(){
for (let i=0;i<20;i++){
  imgs[i].style.visibility="visible";
}
    }
 function yenioyun(){

    sayiTemp=[];
    islemSonucu=[];
    sayilar=[];
    deneme=[];
    sayac=[];
    puan=0;
   gorunurYap();
   opSec();
   doldurEkrana();
   resimGoster();
 }
 yenioyun();
 let dugme=document.getElementById("dugme");
 	dugme.onclick=yenioyun;
