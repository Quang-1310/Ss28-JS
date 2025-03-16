let choice;
let products = [];
do {
    choice = +prompt("1. Thêm sản phẩm.\n 2. Sửa thông tin sản phẩm.\n3. Xóa sản phẩm theo id.\n4. In danh sách sản phẩm.\n5. Tìm kiếm sản phẩm theo tên.\n6. Thoát chương trình");
    switch(choice){
        case 1:
            // Thêm sản phẩm
            const productName = prompt("Nhập tên sản phẩm:" );
            const productPrice = +prompt("Nhập giá sản phẩm:" );
            let newProduct = {
                id: Math.ceil(Math.random() * 100),
                Name: productName,
                Price: productPrice,
            }
            // Push đối tượng vào trong mảng
            products.push(newProduct);
            alert("Nhập thông tin thành công")
            break;
        case 2:
            // Cập nhật thông tin của sản phẩm
            // B1: Lấy id từ người dùng, và lấy thông tin cập nhật
            const idUpdate = +prompt("Nhập id sản phẩm cần update");
            
            // B2: Tìm kiếm thông tin sản phẩm có id vừa nhập vào: Tìm thấy hoặc không
            const findIndexProduct = products.findIndex((product) => product.id === idUpdate);

            // Khiem tra
            if(findIndexProduct !== -1){
                const productNameUpdate = prompt("Nhập tên sản phẩm:" );
                const productPriceUpdate = +prompt("Nhập giá sản phẩm:" );

                products[findIndexProduct].Name = productNameUpdate;
                products[findIndexProduct].Price = productPriceUpdate;
                alert("Cập nhật thông tin thành công")
            }else{
                alert("Không tồn tại sản phẩm")
            }
            break;
        case 3:
            // Xóa phần tử trong mảng theo id
            const idDelete = +prompt("Nhập id sản phẩm cần xóa:" );
            const findIndexDelete = products.findIndex((product) => product.id === idDelete);

            if(findIndexDelete !== -1){
                // Xác nhận xóa 
                const confirmDelete = confirm(`Bạn có chắc chắn xóa sản phẩm ${products[findIndexDelete].Name} này không?`);
                if(confirmDelete === true){
                    // Tiến hành xóa sp
                    products.splice(findIndexDelete, 1);
                    //Hiển thị thông báo
                    alert("Xoá sản phẩm thành công!");

                }
            }else{
                alert("Sản phẩm không tồn tại")
            }
            break;
        case 4:
            console.table(products);
            break;
        case 5:
            // 5. Tìm kiếm sản phẩm theo tên.
            const productNameSearch = prompt("Nhập tên sản phẩm cần tìm kiếm:" ).trim();

            const productNameNeedSearch = products.find((product) => product.Name.toLowerCase() == productNameSearch);
            console.log("Sản phẩm cần tìm kiếm: ",productNameNeedSearch);
            break;
        case 6:
            break;
    }

    
} while (choice !== 6);