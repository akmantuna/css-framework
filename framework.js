window.addEventListener('load', () => {

    window.addEventListener('click', (el) => {
        const $el = el.target

        switch (el.target.dataset.eventType) {
            case 'alert':
                document.querySelector(`[data-alert-key="${$el.dataset.alertKey}"]`).remove()
                break;
            case 'modal':
                if ($el.dataset.modalType === 'open')
                    document.querySelector(`.modal[data-modal-key="${$el.dataset.modalKey}"]`).classList.add('show')
                else if ($el.dataset.modalType === 'close')
                    document.querySelector(`.modal[data-modal-key="${$el.dataset.modalKey}"]`).classList.remove('show')
                break;
        }
    })

})