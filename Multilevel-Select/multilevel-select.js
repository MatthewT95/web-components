document.querySelectorAll("select.sel-parent").forEach((element) => {
    element.addEventListener("change", (e) => {
        if (typeof (e.target) !== undefined) {
            let nextSelect = nextSelectSibling(e.target)
            if (typeof (nextSelect) !== undefined) {
                nextSelect.dataset.filterValue = e.target.value;
                nextSelect.value = "";
            }
        }
    })
})

function nextSelectSibling(element) {
    let nextSibling = element.nextElementSibling
    let steps = 0;
    while (nextSibling.tagName != "SELECT" && typeof (nextSibling) !== undefined && steps < 10) {
        nextSibling = nextSibling.nextElementSibling;
        steps++;
    }
    return nextSibling
}