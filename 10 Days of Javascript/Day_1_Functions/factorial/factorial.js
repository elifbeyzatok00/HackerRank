function faktoriyelHesapla(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    
    let faktoriyel = 1;
    
    for (let i = 2; i <= n; i++) {
      faktoriyel *= i;
    }
    
    return faktoriyel;
  }
  
  // Fonksiyonu kullanarak faktöriyel hesaplaması yapabilirsiniz
  console.log(faktoriyelHesapla(5)); // 120
  console.log(faktoriyelHesapla(7)); // 5040

  console.log(faktoriyelHesapla(4))  // 4
  