window.addEventListener('load', () => {

    window.addEventListener('click', (el) => {
        const $el = el.target

        switch (el.target.dataset.eventType) {
            case 'alert':
                document.querySelector(`[data-alert-key="${$el.dataset.alertKey}"]`).remove()
                break;
        }
    })

})