var totalprice = 0;
const output = document.getElementById("output");
const getCartItems = async () => {
  try {
    const items = JSON.parse(localStorage.getItem("items"));
    for (let i = 0; i < items.length; i++) {
      if (items[i] != null) {
        let temp = `<div class="p-2">
                                    <div alt="items" class="d-flex flex-row justify-content-around">
                                        <div class="p-2">
                                            <img src="${items[i].prdImageUrl}" id="productinbag-img" style="width: 230px; height: 230px;">
                                        </div>
                                        <div class="p-2">
                                            
                                            <div class="flex-column justify-content-start flex-wrap">
                                                <div class="p-2">
                                                    <h4 class="price">${items[i].prdPrice} THB</h4>
                                                </div>
                                                <div class="p-2">
                                                    <h4 class="product_name">${items[i].prdname}</h4>
                                                </div>
                                                <div class="p-2">
                                                    <div class="d-flex flex-row">
                                                        <div class="d-flex flex-column">
                                                            <div class="p-1">
                                                                <p class="type">Size</p>
                                                            </div>
                                                            <div class="p-1">
                                                                <select class="form-select" style="width:200px" aria-label="Default select example">
                                                                    <option selected>${items[i].prdSize}</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex flex-column">
                                                            <div class="p-1">
                                                                <p class="type">Quantity</p>
                                                            </div>
                                                            <div class="p-1">
                                                                <input class="quantity-input" type="text" placeholder="${items[i].quantity}" onchange="onchangevalue(this.value,${i})">
                                                            </div>
                                                        </div>  
                                                    </div>
                                                </div>
                                                <div class="p-2">
                                                    <a class="removeitem" onclick="deleteItem(${i})"><b>Remove this item</b></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
        output.innerHTML += temp;
        if (items[i].quantity == 1) {
          totalprice += parseInt(items[i].prdPrice);
        } else {
          totalprice += parseInt(items[i].prdPrice) * items[i].quantity;
        }
      }
    }
    document.getElementById("subtotal").innerHTML = totalprice;
    document.getElementById("total").innerHTML = totalprice;
  } catch (err) {
    if (err) throw err;
  }
};

getCartItems();

function deleteItem(index) {
  var r = confirm("Delete item?");
  if (r) {
    const items = JSON.parse(localStorage.getItem("items"));
    delete items[index];
    localStorage.setItem("items", JSON.stringify(items));
    output.innerHTML = "";
    totalprice = 0;
    getCartItems();
    alert("Delete Success");
  }
}

function onchangevalue(newvalue, index) {
  console.log(newvalue, index);
  const items = JSON.parse(localStorage.getItem("items"));
  let id = items[index].id;
  let prdname = items[index].prdname;
  let prdPrice = items[index].prdPrice;
  let prdSize = items[index].prdSize;
  let prdImageUrl = items[index].prdImageUrl;
  let txtDetail = items[index].txtDetail;

  items[index] = {
    id: id,
    prdname: prdname,
    prdPrice: prdPrice,
    prdSize: prdSize,
    prdImageUrl: prdImageUrl,
    txtDetail: txtDetail,
    quantity: newvalue,
  };

  localStorage.setItem("items", JSON.stringify(items));
  reloadprice();
}

function reloadprice() {
  totalprice = 0;
  const items = JSON.parse(localStorage.getItem("items"));
  for (let i = 0; i < items.length; i++) {
    if (items[i] != null) {
      if (items[i].quantity == 1) {
        totalprice += parseInt(items[i].prdPrice);
      } else {
        totalprice += parseInt(items[i].prdPrice) * items[i].quantity;
      }
    }
  }
  document.getElementById("subtotal").innerHTML = totalprice;
  document.getElementById("total").innerHTML = totalprice;
}

document.getElementById("checkout").addEventListener("click", function () {
  location.href = `payment.html?price=${totalprice}`;
});
