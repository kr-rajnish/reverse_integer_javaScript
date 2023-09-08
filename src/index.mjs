import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// Q.) Reverse an integer?

// Steps to code:=
// 1st--->convert integer into String
// --->split string
//2nd --->use reverse method to reverse the splited String
// ---> join the splited string
//3rd --->convert String into integer
// take console

/*
function reverseInt(num){
  const str = num.toString().split("").reverse().join("");
  // const ans = parseInt(str);
  // if input is negative
  let ans = 0;
  if(num <0){
     ans =-1 * parseInt(str);
  }else
   ans = parseInt(str);

  console.log(ans);
}
reverseInt(-51);
*/

// one liner code:
const reverseInt = (num) => {
  if(num < 0){
    return -1* parseInt(num.toString().split("").reverse().join(""));
  }else
  return parseInt(num.toString().split("").reverse().join(""));
}
console.log(reverseInt(-51));
