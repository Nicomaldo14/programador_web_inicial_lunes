const pie = 1000;
const bicicleta = 10000; 
const colectivo = 30000;
const auto = 100000; 
const avion = 100000; 

if (pie<= 1000) {
    console.log(`la mejor opcion es ir a pie`); }

else if (bicicleta > 1000 && bicicleta <= 10000) {
    console.log(`la mejor opcion es ir en bicicleta`); }
else if (colectivo > 10000 && colectivo <= 30000) {
    console.log(`la mejor opcion es ir en colectivo`); }
else if (auto > 30000 && auto <= 100000) {
    console.log(`la mejor opcion es ir en auto`); }
else if (avion > 100000 && avion <= 100000) {
    console.log(`la mejor opcion es ir en avion`); }
