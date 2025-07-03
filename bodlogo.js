  function subtractProductAndSum(n) {
    let sum = 0;
    let multi = 1;
    let a = n.toString();
    for (let i = 0; i < a.length; i++) {
      sum = sum + Number(a[i]);
      multi = multi * Number(a[i]);
    }
    return multi - sum;
  }

  console.log(subtractProductAndSum(234));
