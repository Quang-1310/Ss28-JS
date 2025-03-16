let choice;
let books = [];
do{
    choice = +prompt(`----MENU----
        1.Thêm sách mới.
        2.Hiển thị danh sách sách.
        3.Tìm kiếm sách theo tiêu đề.
        4.Cập nhật trạng thái mượn/trả sách theo id sách.
        5.Xóa sách theo id sách ra khỏi danh sách.
        6.Sắp xếp sách theo giá tăng dần.
        7.Thoát`);
    switch(choice){
        case 1:
            let titleBookAdd = prompt("Mời bạn nhập tên sách mới: ");
            let authorBookAdd = prompt("Mời bạn nhập tác giả của cuốn sách vừa thêm");
            let yearBookAdd = +prompt("Mời bạn nhập năm xuất bản của cuốn sách vừa thêm");
            let priceBookAdd = +prompt("Mời bạn nhập giá của cuốn sách vừa thêm");
            let isAvailable = false;
            let bookNew = {
                id : Math.ceil(Math.random() * 1000000),
                title : titleBookAdd,
                author : authorBookAdd,
                year : yearBookAdd,
                price : priceBookAdd,
                isAvailable : isAvailable
            }
            books.push(bookNew);
            alert("Thêm sách thành công");
            break;
        case 2:
            console.table(books);
            break;
        case 3:
            let nameTitle = prompt("Mời bạn nhập tên sách cần tìm").toLowerCase();
            let findNameTitle = books.filter((title) => title.title.toLowerCase().includes(nameTitle));
            if(findNameTitle.length > 0){
                console.table(findNameTitle);
            }
            else{
                alert("Không tìm thấy tên sách ");
            }
            break;
        case 4:
            let idBookisAvailable = +prompt("Mời bạn nhập id cuốn sách muốn mượn hoặc trả");
            let findIdBookisAvailable = books.findIndex((book) => book.id === idBookisAvailable);
            if(findIdBookisAvailable !== -1){
                if(books[findIdBookisAvailable].isAvailable === false){
                    books[findIdBookisAvailable].isAvailable = true;
                    alert("Mượn sách thành công");
                }
                else{
                    books[findIdBookisAvailable].isAvailable = false;
                    alert("Trả sách thành công");
                }
            }
            else{
                alert(`Không tìm thấy sách có id ${idBookisAvailable}`);
            }
            break;
        case 5:
            let idBookDelete = +prompt("Mời bạn nhập id cuốn sách cần xoá");
            let findIDBookDelete = books.findIndex((book) => book.id === idBookDelete);
            if(findIDBookDelete !== -1){
                let confirmDelete = confirm(`Bạn có chắc chắn muốn xoá cuốn sách có id ${idBookDelete} không`);
                if(confirmDelete === true){
                    books.splice(findIDBookDelete, 1);
                    alert("Xoá sách thành công");
                }
            }
            else{
                alert(`Không tìm thấy cuốn sách có id ${idBookDelete}`);
            }
            break;
        case 6:
            books.sort((a,b) => a.price - b.price);
            console.table(books);
            alert("Sắp xếp sách theo giá tăng dần thành công");
            break;
        case 7:
            break;
        default:
            alert("Không hợp lệ");
    }


}while(choice !== 7)