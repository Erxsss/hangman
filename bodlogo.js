function subtractProductAndSum(n) {
  let sum = 0;
  let multi = 1;
  console.log(n);
  for (let i = 0; i < n.length; i++) {
    sum += n % 10;
    multi *= n % 10;
    n = n / 10;
  }
  return multi - sum;
}

console.log(subtractProductAndSum(234));
