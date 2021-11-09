var numberOfButtons = document.querySelectorAll(".btn").length;

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        alert("Chức năng đặt hàng hiện chưa khả dụng. Chúng tôi sẽ cập nhật trong các bản update sau! Xin vui lòng liên hệ trực tiếp tới chủ shop để đặt hàng.");
    });
};
