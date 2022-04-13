let n = 100;
for (let a = 2; a <= n; a++) {
    let flg = 1;
    if (a > 2 && a % 2 != 0) {
        for (let b = 3; b*b <= a ; b=b+2) {
            if (a%b==0){
                flg=0;
                break;
            }
        }
    }
    else if (a != 2) flg = 0;
    if (flg==1) {console.log(a);}
}