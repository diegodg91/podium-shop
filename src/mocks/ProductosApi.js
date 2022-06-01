export const productos = [
    {   
        id:'1',
        image:"/img/gu1.jpg",
        tipo: 'endurance',
        nombre: "Gu Salted Caramel",
        precio: 500,
        stock: 4
    },
    {
        id:'2',
        image:"/img/gu2.jpg",
        tipo: 'endurance',
        nombre: "Gu Jet Blackberry",
        precio: 500,
        stock: 10
    },
    {
        id:'3',
        image:"/img/gu3.jpg",
        tipo: 'endurance',
        nombre: "Gu Lemon Sublime",
        precio: 500,
        stock: 8
    },
    {
        id:'4',
        image:"/img/recoverydrink.png",
        tipo: 'recovery',
        nombre: "Recovery Drink",
        precio: 2500,
        stock: 6
    },
    {
        id:'5',
        image:"/img/prosalt.png",
        tipo: 'hidratacion',
        nombre: "Pro Salts",
        precio: 1200,
        stock: 10
    },
    {
        id:6,
        image:"/img/sportdrink.png",
        tipo: 'endurance',
        nombre: "Hydromax",
        precio: 1900,
        stock: 6
    }
]

export const getData = new Promise((resolve, reject) =>{
    let condition = true

    setTimeout(()=>{
        if(condition){
            resolve(productos)
        }else{
            reject('error en el proceso')
        }
    },3000)
})



