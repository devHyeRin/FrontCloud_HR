//dom 구축이 완료된 후 - dom만 쓰면 이걸 보통 많이 사용
document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById("title");
    title.textContent = "title^^";
});

//dom을 포함된 모든 리소스 완료된 후
window.addEventListener("load", function(){});