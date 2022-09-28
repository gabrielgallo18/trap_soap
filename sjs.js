let arr = {
    p1 : [
        1, -3
    ],
    p2 : [
        1, 1
    ],
    p3 : [
        1, -2
    ]
};

const res = Object.values(arr);

let responseSoma = res.map(item => {
    return item.reduce((soma, increment) => {
        return soma + increment
    });
});

let newArr = [];

for (let index = 0; index < res.length; index++) {
    const element = res[index];
    const soma = responseSoma[index];

    newArr.push({p : element, soma});
}

let orderBy = newArr.sort((a, b)=> parseFloat(a.soma) - parseFloat(b.soma));

let fila = [];

orderBy.map(item => {
    item.p.map(el => {
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