{
  if (countrys) {
    const country_links = countrys.getElementsByClassName('js__country-link')
    langs = {
      0: 'ee',
      1: 'ru',
      2: 'en',
    }

    // functions
    const clear_body_langs = () => {
      for (const key in langs) {
        body.classList.remove(langs[key])
      }
    }

    const change_active_status = (event) => {
      event.preventDefault()
      countrys.classList.toggle('countrys--active')
      clear_body_langs()
      body.classList.add(langs[event.target.dataset.langId])
    }

    // listener
    ;[...country_links].forEach((link) => {
      link.addEventListener('click', change_active_status)
    })
  }
}
