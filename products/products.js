import data from "./products.json" assert {type: 'json'};
import chemistData from "./layout.json" assert {type: 'json'};
  let url = "https://blinkit-clone.surge.sh/categories/"
  showTopData()
  showChemist()
  function showTopData(){
    let topProd = document.getElementById('topProd')
    let offer = document.getElementById('offer')
    topProd.innerHTML = null
    offer.innerHTML = null
    data.topData.map((ele,i)=>{
        let a = ` <div class="child">
        <img src="${url}${ele.coverFile}" alt="" loading="lazy" srcset="" class="childImg">
    </div>`
    topProd.innerHTML += a;
    })
    data.objects.map((ele,i)=>{
        let b = ` <div class="offerchild ">
        <img src="${ele.data.image_url}" alt="" loading="lazy" srcset="" class="offerchildImg">
    </div>`
    offer.innerHTML += b;
    })
  }

function showChemist(){
 let a = chemistData.filter((ele,i)=>{
    if(i==6){
      return ele
    }
  });
  console.log(a.objects);
}