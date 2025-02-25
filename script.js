document.getElementById("changeColorButton").addEventListener("click", function() {
    let text = document.getElementById("text");
    
    // ລົບຄຣາສເກົ່າທັງໝົດ
    text.classList.remove("red-text", "blue-text", "green-text");
    
    // ສ້າງສີແບບສຸ່ມ
    let colors = ["red-text", "blue-text", "green-text"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // ໃສ່ຄຣາສໃໝ່ໃຫ້ຂໍ້ຄວາມ
    text.classList.add(randomColor);
    
});
