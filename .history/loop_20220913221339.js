const orders = [500,30,99,15,223]
'bad💩'
const total = 0
const withTax = []
const highValue = []
for(var i = 0; i < orders.length;i++){
    //Reduce
    total+= orders[i]

    //Map
    withTax.push(orders[i]*1.1)

    //Filter
    if(orders[i] > 100){
        highValue.push(orders[i])
    }
}

'good✔️'
//Reduce
const totals = orders.reduce((acc,cur)=> acc+cur)
//Map
const withTaxs = orders.map(v=>v*1.1)
//Filter
const highValues = orders.filter(v=>v>100)