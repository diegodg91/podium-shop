export const productos = [
    {   
        id:1,
        image:"img/gu1.jpg",
        tipo: "Endurance",
        nombre: "Gu Salted Caramel",
        precio: 500
    },
    {
        id:2,
        image:"img/gu2.jpg",
        tipo: "Endurance",
        nombre: "Gu Jet Blackberry",
        precio: 500
    },
    {
        id:3,
        image:"img/gu3.jpg",
        tipo: "Endurance",
        nombre: "Gu Lemon Sublime",
        precio: 500
    },
    {
        id:4,
        image:"img/recoverydrink.png",
        tipo: "Recovery",
        nombre: "Recovery Drink",
        precio: 2500
    },
    {
        id:5,
        image:"img/prosalt.png",
        tipo: "Hidratacion",
        nombre: "Pro Salts",
        precio: 1200
    },
    {
        id:6,
        image:"img/sportdrink.png",
        tipo: "Endurance",
        nombre: "Hydromax",
        precio: 1900
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



