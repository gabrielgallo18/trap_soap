let arr = {
        p1 : [
            1, -2
        ],
        p2 : [
            1, 1
        ],
        p3 : [
            1, -1
        ],
        p4 : [
            -3, 1
        ],
};

let fila = [];

const res = Object.values(arr);

res.map(item => {
    item.map(el => {
       if ( el == 1 ) {
            console.log('1 processo!', el);
       } else {
        fila.push(el);
       }
    });
});

fila.map(item => {
    console.log("Fila processado : ", item)
});