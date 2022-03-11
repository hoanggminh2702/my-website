const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const productData = [
  {
    link: "https://store.rodbooks.com/Upload/2020/1/31/9-cuon-sach-dan-ong-ban-linh-nhat-dinh-phai-doc-trong-doi-hinh-anh-3.png",
    name: "Sách hay",
    des: "Đây là sách nói về những gì mà chúng tôi hay làm",
    price: 7,
  },
  {
    link: "https://store.rodbooks.com/Upload/2020/1/31/9-cuon-sach-dan-ong-ban-linh-nhat-dinh-phai-doc-trong-doi-hinh-anh-4.png",
    name: "Nghĩ và làm giàu",
    des: "Think & Grow Rich - Nghĩ Giàu Và Làm Giàu là một trong những cuốn sách về cách bước chân vào thế giới của Napoleon Hill được bán chạy nhất mọi thời đại. Đã hơn 60 triệu bản được phát hành với gần trăm ngôn ngữ trên toàn thế giới và được công nhận là cuốn sách tạo ra nhiều triệu phú hơn, một cuốn sách truyền cảm hứng thành công nhiều hơn bất cứ cuốn sách kinh doanh nào trong lịch sử.",
    price: 7,
  },
  {
    link: "https://store.rodbooks.com/Upload/2020/1/31/9-cuon-sach-dan-ong-ban-linh-nhat-dinh-phai-doc-trong-doi-hinh-anh-5.png",
    name: "Người Giỏi Không Phải Là Người Làm Tất Cả",
    des: "Ngắn gọn, súc tích và đi thẳng vào vấn đề là những gì bạn thấy ngay từ những trang đầu của cuốn sách Người Giỏi Không Phải Là Người Làm Tất Cả này. Từ những người mới bắt đầu tìm hiểu về nghệ thuật quản lý hay đến cả những người đã từng học những khóa học đắt tiền về quản lý cũng sẽ phải gật gù tâm đắc với “Người giỏi không phải là người làm tất cả”. Vì những điều được nói trong cuốn sách thực sự là những điều rất hữu ích và cần thiết nhưng không phải khóa học quản lý nào cũng làm người học hiểu được những điều đó.",
    price: 7,
  },
  {
    link: "https://store.rodbooks.com/Upload/2020/1/31/9-cuon-sach-dan-ong-ban-linh-nhat-dinh-phai-doc-trong-doi-hinh-anh-6.png",
    name: "Người Thông Minh Giải Quyết Vấn Đề Như Thế Nào?",
    des: "Cuốn sách này thực sự đã giúp hàng triệu người trên khắp thế giới tìm ra những giải pháp thành công, ngay cả đối với những vấn đề rắc rối nhất, thử đặt mua và đọc xem, nếu bạn muốn biết cách người thông minh giải quyết vấn đề như thế nào?",
    price: 7,
  },
];

// Gen Select
function genCustomSelectHTMLString(
  className,
  menuName,
  itemNameArr,
  selector,
  callbackArr
) {
  return `
<div class="select${className ? ` ${className}` : ""}">
            ${menuName}
            <div class="select-options">

              ${itemNameArr
                .map((item, index) => {
                  if (selector && callbackArr && callbackArr.length)
                    $(selector).closet(
                      `.select-option:nth-child(${index})`
                    ).onclick = callbackArr[index];
                  return `<div class="select-option">${item}</div>`;
                })
                .join(" ")}
            </div>
          </div>`;
}

const menuArr = [
  {
    className: "sort-by-name",
    menuName: "Sort By Name",
    itemNameArr: ["A - Z", "Z - A"],
  },

  {
    menuName: "Sort By Price",
    itemNameArr: ["Increase", "Decrease"],
  },
];

(function genSelectToElement(selector, menuArr) {
  let menuHTMLString = "";
  menuArr.forEach((menu) => {
    menuHTMLString += genCustomSelectHTMLString(
      menu?.className || undefined,
      menu.menuName,
      menu.itemNameArr,
      selector,
      menu?.callbackArr
    );
  });

  $(selector).innerHTML = menuHTMLString;
})(".filter-bar", menuArr);

function genOverflowString(string, numberOfCharacter) {
  return string.length > numberOfCharacter
    ? `${string.slice(0, numberOfCharacter).trim()}...`
    : string;
}

// Gen Product
const productDesLength = 35;
const productNameLength = 12;

function genProductHTMLString(product) {
  return `<div class="product-group">
    <div class="product-img">
      <img
        src="${product.link}"
        alt="product"
      />
    </div>
    <div class="product-info">
      <div class="product-info-left">
        <h1 class="product-name">${genOverflowString(
          product.name,
          productNameLength
        )}</h1>
        <p class="product-des">${genOverflowString(
          product.des,
          productDesLength
        )}</p>
      </div>
      <div class="product-info-right">
        <h1 class="product-price-title">Price</h1>
        <p class="product-price">${product.price}$</p>
      </div>
    </div>
    <div class="detail-btn">Nhấn vào để xem</div>
  </div>`;
}

(function genProductList(productList) {
  let productStringHTML = "";
  productList.forEach((product) => {
    productStringHTML += genProductHTMLString(product);
  });

  $(".product-container").innerHTML = productStringHTML;
})(productData);
