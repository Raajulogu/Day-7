var request=new XMLHttpRequest();
//step 02: Specify the API url
request.open("GET", "https://restcountries.com/v3.1/all");
//Step 03:Sending the request
request.send();
request.onload = function(){
var result=JSON.parse(request.response);
var reg=result.filter((ele)=>ele.region==="Asia");//.
var pop=result.filter((ele)=>ele.population<=200000);
var cur=result.filter((ele)=>ele.currencies==="US Dollar");
console.log("Countries Whose region is Asia");
for(var i=0;i<reg.length;i++){
    console.log(reg[i].name);
}
console.log("Countries Whose Population is less then 2 Lakh");
for(var i=0;i<pop.length;i++){
    console.log(pop[i].name);
}
console.log("All countries population Total");
console.log(result.reduce((a,b)=>a+b.population,0));
console.log("Countries Whose Currency is US Dollars");
for(var i=0;i<cur.length;i++){
    console.log(cur[i].name);
}
console.log("Name,capital,flag of country using forEach");
result.forEach((ele)=>console.log(ele.name));
result.forEach((ele)=>console.log(ele.capital));
result.forEach((ele)=>console.log(ele.flag));

}
