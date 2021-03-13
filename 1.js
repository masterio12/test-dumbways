var snana = 0 		// detik waktu nana (sec)
var sangel = 0 		// detik waktu angela (sec)
var vnana = 7 		// percepatan nana meter/sec 
var vangel = 10 	// kecepatan angelia meter/sec

while (vnana% 10 !== 0){
    vnana += 7
    snana += 1
} 

while (vangel% 7 !== 0){
  vangel += 10
  sangel += 1   
}
console.log("nana di jam "+"12:0"+snana+" nemenpuh jarak yang sama dengan angela")
console.log("angela di jam "+"13:0"+sangel+" menempuh jarak yang sama dengan nana dan mendahului nana")