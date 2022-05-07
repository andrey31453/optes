{
  if (countrys) {
    const change_active_status = () => {
      event.preventDefault()
      countrys.classList.toggle('countrys--active')
    }

    countrys
      .getElementsByClassName('js__country-link')[0]
      .addEventListener('click', change_active_status)
  }
}
