fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>productView(data)).catch(err=>console.log(err))

function productView(products){
  var htmlData=``
  products.forEach((p) => {
    htmlData+=`
    <div class= "wrapper">
    <div class="card"">
  <img src="${p.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${p.title}</h5>
    <p class="card-text">${p.category}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">RS ${p.price}</li>
    
  </ul>
  <div class="card-body"> 
  </div>
</div>
</div>
    `
    

  });
  c1.innerHTML=htmlData;
  function fetchPro(e){
    pid = e.target.name;
    pro = products.find((p)=> p.id == pid);
    display(pro)
  }
}

function display(p)
{
  let divElement = document.createElement('div');
  divElement.innerHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" onclick = "location.reload()" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" >&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="card" style="width: 100%;">
      <img src="${p.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${p.title}</h5>
        <p class="card-text">${p.category}</p>
        <p class="card-text">${p.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"> Rs - ${p.price}</li>
        <li class="list-group-item">${p.rating.rate} out of ${p.rating.count}</li>
        
      </ul>
      <div class="card-body">
        
       
      </div>
    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick = "location.reload()">Close</button>
        <button type="button" class="btn btn-primary" onclick = "location.reload()">Save changes</button>
      </div>
    </div>
  </div>
</div>`
document.body.append(divElement)
$("#exampleModal").modal()
}