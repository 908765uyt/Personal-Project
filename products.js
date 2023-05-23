let elementsel=document.querySelector(".elements")
let cartitemsel=document.querySelector(".cartitems");
let subtotalel=document.querySelector(".subtotal");
let itemsincartel=document.querySelector(".btn-white sup");
const products=[
    {
        id:9,
        name:"Chinese Style Black Iron Table Lamp",
        price:250,
        stock:11,
        qty:0
    },
    {
        id:12,
        name:"Seated Wood Figure Of Amida Nyorai",
        price:250,
        stock:10,
        qty:0
    },
    {
        id:7,
        name:"Plus Women Cotton Solid Soft Light",
        price:370,
        stock:12,
        qty:0
    },
    {
        id:11,
        name:"Bhunes Antiques Brass Decorative Box",
        price:70,
        stock:9,
        qty:0
    },
    {
        id:1,
        name:"Mens Fair Isle Brodgar Yoke Jumper",
        price:9,
        stock:10,
        qty:0
    },
    {
        id:14,
        name:"Acrylic Transparent Board Ice Texture",
        price:240,
        stock:8,
        qty:0
    },
    {
        id:6,
        name:"Antique White Metal Winding Pocket",
        price:17,
        stock:13,
        qty:0
    },
    {
        id:18,
        name:"Cherry Crumble Kids Cream Coloured",
        price:250,
        stock:10,
        qty:0
    },
    {
        id:17,
        name:"Life Mysteries Cherub Statue Plant",
        price:180,
        stock:8,
        qty:0
    },
    {
        id:3,
        name:"Plus Women Cotton Solid Soft Light",
        price:250,
        stock:7,
        qty:0
    },
    {
        id:13,
        name:"Ceramic Belly Vase Matte Blush Matte",
        price:300,
        stock:9,
        qty:0
    },
    {
        id:5,
        name:"Ceramic Pottery Vase Lempereur Sar",
        price:235,
        stock:5,
        qty:0
    },
    {
        id:4,
        name:"Cast Of A Bust Of Michelangelo...",
        price:240,
        stock:9,
        qty:0
    },
    {
        id:2,
        name:"Aristide Petrilli Decorative Object",
        price:340,
        stock:11,
        qty:0
    },
    {
        id:8,
        name:"Genevieve Knutson Obituary Yuma",
        price:100,
        stock:12,
        qty:0
    },
    {
        id:15,
        name:"Ceramic Pottery Vase Lempereur Sar",
        price:90,
        stock:10,
        qty:0
    },
    {
        id:10,
        name:"Genevieve Knutson Obituary Yuma",
        price:85,
        stock:9,
        qty:0
    },
    {
        id:16,
        name:"3D Wooden Puzzle For Adults Animal",
        price:120,
        stock:7,
        qty:0
    }
]
function display()
{
   products.map((items)=>{
     elementsel.innerHTML+=`
    <div class="col">
              <div class="card">
                <h6><span class="badge bg-secondary m-2 mb-0">Sale</span></h6>      
                <div class="d-flex show">
                  <img src="images/${items.id}.jpg" class="img-fluid d-block" alt="...">    
                
                  <div class="hide" style="margin-left:-40px;">        
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-suit-heart mb-4" viewBox="0 0 16 16">
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                  </svg>      
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-text-left mb-4" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                  </svg>      
                  <i class="fa-sharp fa-solid fa-eye fs-5 mb-4"></i>      
                </div>
              </div>
                <div class="card-body">
                  <a href="#"> <p class="card-text text-wrap">${items.name}</p></a>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <p>$${items.price}</s></p>
                  <button type="button" class="btn bg-primary-subtle" onclick="addtocart(${items.id})">+<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg></button>
                </div>
              </div>
            </div>
    `
   })
}
display()
let cart=JSON.parse(localStorage.getItem("CART")) || [];
updatecart();
function addtocart(id)
{
    // check if product already exist
    if(cart.some((item)=>item.id===id))
    {
        changeqty("plus",id);
    }
    else
    {
        const item=products.find((product)=>product.id===id);
    cart.push({
        ...item,
        qty:1
    });
    
    }
   updatecart(); 
}
function updatecart()
{
    rendercartitems();
    rendersubtotal();
    localStorage.setItem("CART",JSON.stringify(cart));
}
function rendercartitems()
{
    cartitemsel.innerHTML="";
    cart.forEach((item)=>{
cartitemsel.innerHTML+=`
                  <table class="table" style="margin-right:150px;">
                  <tbody>
                    <tr><td><img src="images/${item.id}.jpg" height=50 width=50></td>
                    <td><p style="font-size:10px;">${item.name}</p></td>
                    <td>${item.price}</td>
                    <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16" onclick="changeqty('minus',${item.id})">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                  </svg> ${item.qty} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" onclick="changeqty('plus',${item.id})">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg></td>
                    <td><i class="fa-solid fa-trash text-primary" onclick="removeitem(${item.id})"></i> </td>
                  </tr></tbody></table>`

    })
}
function changeqty(action,id)
{
    cart=cart.map((item)=>{
        let qty=item.qty;
        if(item.id===id)
        {
            if(action==="minus" && qty>1)
            {
                qty--;
            }
            else if(action==="plus" && qty<item.stock)
            {
                qty++;
            }
        }
        return {
            ...item,
            qty,
        };
    })
    updatecart();
}
function rendersubtotal()
{
    let totalprice=0,totalitems=0;
    cart.forEach((item)=>{
        totalprice+=item.price*item.qty;
        totalitems+=item.qty;
    });
    subtotalel.innerHTML=`Subtotal(${totalitems} items):$${totalprice.toFixed(2)}`
    itemsincartel.innerHTML= totalitems;            
}
function removeitem(id)
{
    cart=cart.filter((item)=>item.id!==id);
    updatecart();
}
