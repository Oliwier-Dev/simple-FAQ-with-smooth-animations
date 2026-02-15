const ui = {
    FAQconta:  document.querySelectorAll(".FAQ-container"),
    btns:      document.querySelectorAll(".btn"),
    FAQtext:   document.querySelectorAll(".FAQ-text")
};

ui.btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const FAQNumber = btn.dataset.faq;

        ui.btns.forEach(btn => btn.classList.remove("active"))
        ui.FAQtext.forEach(text => text.classList.remove("active"))
        ui.FAQconta.forEach(container => container.classList.remove("active"))

        btn.classList.add("active")

        const activeText = document.querySelector(`.FAQ-text[data-FAQ="${FAQNumber}"]`)
        const activeContainer = document.querySelector(`.FAQ-container[data-FAQ="${FAQNumber}"]`)

        activeText.classList.add("active")
        activeContainer.classList.add("active")
    })
});