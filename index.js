function rotLeft(a, d) {

    let d1 = d;
    let output = d1.splice(a).concat(d.splice(0,a));
    return output.join(' ');
}
function factorial(n) {
    
    let sum = 1;
    for (let i=2; i<=n; i++) {
        sum *= i;
    }
    return sum;
}

function processData(input) {
    let arr = input.split(/\n/);
    arr.shift();

    let output = arr.map(a => {
        let sOdd = '';
        let sEven = '';
        for (i=0; i < a.length; i++) {
            sEven+=a[i];
            if (a[i+1]) {sOdd+=a[i+1];} 
            i++;
        }
        return sOdd ? sEven + ' ' + sOdd : sEven;
    });
   
return output.join('\n');  
} 

function hourglassSum(arr) {
  let sumArr = [];
  let i = 0; 
  let j = 0;

  while (i < arr.length-2) {
    while (j < arr.length -2) {
      let sum = 0;
      sum += arr[i][j] + arr[i][j+1] + arr[i][j+2];
      sum += arr[i+1][j+1];
      sum += arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
      sumArr.push(sum);
      j++;
    }
    i++;
    j=0;
    }

  return Math.max(...sumArr);
}

function diagonalDifference(arr) {
    let n = arr.length;
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i < n; i++){
        sum1 += arr[i][i];
        sum2 += arr[(n-1)-i][i];
    }

    return Math.abs(sum1-sum2);
}

function jumpingOnClouds(c) {

    let count = 0;
    let i = 0;
    while(i < c.length-1){
        if(i+2 < c.length && c[i+2] != 1){
            count++;
            i +=2;
        }
        else{
            count++;
            i++;
        }
    }
    return count;

}

function repeatedString(s, n) {
    let count = 0;
    for (let i=0; i < s.length; i++) {
        if (s[i] === 'a') {
            count++;
        }
    }
 
    count = count * Math.floor(n/s.length);
    let modulus = n % s.length;

    for (let i=0; i < modulus; i++) {
        if (s[i] === 'a') {
            count++;
        }
    }
    return count;
}

function countingValleys(n, s) {

    let no = 0;
    let level = 0;
    for (let i=0; i<n; i++){
        level = (s[i] === 'D') ? level +=1 : level -=1 ;
        if (level === 0 && s[i] === 'U'){
            no ++;
        } 
    }
    return no;
}


function sockMerchant(n, ar) {

    let pairs = 0;
    ar.sort(); 
    let j=0; 
    for (let i=0; i<n; i++){
        if(ar[i] !== ar[i+1] && ar[i-1] === ar[i]){
            pairs = pairs + Math.floor((i+1-j)/2);
            j=i+1;
        } else if (ar[i] !== ar[i+1] && ar[i-1] !== ar[i]) {
            j ++;
        }
    }
    return pairs;

}


function compareTriplets(a, b) {
  let result = [0,0];
  for (let i = 0; i < 4; i++) {
      if (a[i] > b[i]) {
          result[0] += 1;
      } else if (a[i] < b[i]) {
          result[1] += 1;
      }
  }
  return result;
}

module.exports.triplets = compareTriplets;
module.exports.socks = sockMerchant;
module.exports.valleys = countingValleys;
module.exports.repeatedString = repeatedString;
module.exports.jumpingOnClouds = jumpingOnClouds;
module.exports.diagonalDifference = diagonalDifference;
module.exports.hourglassSum = hourglassSum;
module.exports.processData = processData;
module.exports.rotLeft = rotLeft;
module.exports.factorial = factorial;