let choice;
let employees = [];
do{
    choice = +prompt(`----MENU----
        1.Thêm nhân viên mới.
        2.Xóa nhân viên theo id.
        3.Cập nhật mức lương của nhân viên theo id
        4.Tìm kiếm nhân viên theo tên.
        5.Hiển thị.
        0.Thoát`);
    switch(choice){
        case 1:
            let nameEmployeeAdd = prompt("Mời bạn nhập tên nhân viên mới: ");
            let positionEmployeeAdd = prompt("Mời bạn nhập chức vụ của nhân viên vừa thêm");
            let salaryEmployeeAdd = +prompt("Mời bạn nhập mức lương của nhân viên vừa thêm");
            let employeeNew = {
                id : Math.ceil(Math.random() * 1000000),
                name : nameEmployeeAdd,
                position : positionEmployeeAdd,
                salary : salaryEmployeeAdd
            }
            employees.push(employeeNew);
            alert("Nhập thông tin thành công");
            break;
        case 2:
            let idEmployeeDelete = +prompt("Mời bạn nhập id nhân viên cần xoá");
            let findIDEmployeeDelete = employees.findIndex((employee) => employee.id === idEmployeeDelete);
            if(findIDEmployeeDelete !== -1){
                let confirmDelete = confirm(`Bạn có chắc chắn muốn xoá nhân viên có id ${idEmployeeDelete} không`);
                if(confirmDelete === true){
                    employees.splice(findIDEmployeeDelete, 1);
                    alert("Xoá nhân viên thành công");
                }
            }
            else{
                alert(`Không tìm thấy nhân viên có id ${idEmployeeDelete}`);
            }
            break;
        case 3:
            let idUpdateSalaryEmployee = +prompt("Mời bạn nhập id nhân viên cần cập nhật mức lương");
            let updateSalaryEmployee = +prompt("Mời bạn nhập mức lương mới");
            let findIdUpdateSalaryEmployee = employees.findIndex((employee) => employee.id === idUpdateSalaryEmployee);
            if(findIdUpdateSalaryEmployee !== -1){
                employees[findIdUpdateSalaryEmployee].salary = updateSalaryEmployee;
                alert("Cập nhật mức lương thành công");
            }
            else{
                alert(`Không tìm thấy nhân viên có id ${idUpdateSalaryEmployee}`);
            }
            break;
        case 4:
            let nameEmployee = prompt("Mời bạn nhập tên nhân viên cần tìm kiếm").toLowerCase();
            let findName = employees.filter((employee) => employee.name.toLowerCase().includes(nameEmployee));
            if(findName.length > 0){
                console.table(findName);
            }
            else{
                console.log("Không tìm thấy nhân viên");
            }
            break;
        case 5:
            console.table(employees);
            break;
        case 0:
            break;
        default:
            alert("Không hợp lệ");
    }


}while(choice !== 0)