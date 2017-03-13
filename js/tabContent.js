$(function() {
    function showdiv() {
        var contentTabs = document.getElementsByClassName("contentTab"),
            iContents = document.getElementsByClassName("inner-content");
        for (var i = 0; i < contentTabs.length; i++) {
            contentTabs[i].classList.remove("highlight_tab");
            iContents[i].style.display = "none";
        }
        this.classList.add("highlight_tab");
        document.getElementsByClassName(this.id.toString())[0].style.display = "table-row";
    }
    $(".contentTab").click(showdiv);
});