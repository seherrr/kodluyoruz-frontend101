let girilenisim = prompt("İsminiz nedir ?");
let myName = document.querySelector("#myName");
myName.innerHTML = girilenisim;
function showTime(){
    let tarih = new Date();
    let gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let gun = gunler[tarih.getDay()];
    let saat=tarih.getHours();
    let dakika=tarih.getMinutes();
    let saniye=tarih.getSeconds();	

    if(saat < 10) {
        saat='0'+saat
      }   
    if(dakika < 10) {
        dakika='0'+dakika
      }   
    if(saniye < 10) {
        saniye='0'+saniye
      }   
    let tamamdir = `${saat}:${dakika}:${saniye} ${gun}`;

    document.querySelector ("#myClock").innerHTML= tamamdir;
}
setInterval(showTime,1000);