{
  const body = document.querySelector('body')
  const styleUpdate = () => {
    body.insertAdjacentHTML(
      'beforeend',
      `
		<style>
			*, ::after, ::before {
				-webkit-transition:
					width 150ms linear,
					max-width 150ms linear,
					height 150ms linear,
					max-height 150ms linear,
					color 150ms linear,
					border 150ms linear,
					box-shadow 150ms linear,
					background 150ms linear,
					margin 150ms linear,
					padding 150ms linear,
					transform 150ms linear,
					opacity 150ms linear,
					left 150ms linear,
					top 150ms linear,
					bottom 150ms linear,
					right 150ms linear,
					z-index 150ms linear,
					fill 150ms linear;
				-moz-transition:
					width 150ms linear,
					max-width 150ms linear,
					height 150ms linear,
					max-height 150ms linear,
					color 150ms linear,
					border 150ms linear,
					box-shadow 150ms linear,
					background 150ms linear,
					margin 150ms linear,
					padding 150ms linear,
					transform 150ms linear,
					opacity 150ms linear,
					left 150ms linear,
					top 150ms linear,
					bottom 150ms linear,
					right 150ms linear,
					z-index 150ms linear,
					fill 150ms linear;
				-o-transition:
					width 150ms linear,
					max-width 150ms linear,
					height 150ms linear,
					max-height 150ms linear,
					color 150ms linear,
					border 150ms linear,
					box-shadow 150ms linear,
					background 150ms linear,
					margin 150ms linear,
					padding 150ms linear,
					transform 150ms linear,
					opacity 150ms linear,
					left 150ms linear,
					top 150ms linear,
					bottom 150ms linear,
					right 150ms linear,
					z-index 150ms linear,
					fill 150ms linear;
				-ms-transition:
					width 150ms linear,
					max-width 150ms linear,
					height 150ms linear,
					max-height 150ms linear,
					color 150ms linear,
					border 150ms linear,
					box-shadow 150ms linear,
					background 150ms linear,
					margin 150ms linear,
					padding 150ms linear,
					transform 150ms linear,
					opacity 150ms linear,
					left 150ms linear,
					top 150ms linear,
					bottom 150ms linear,
					right 150ms linear,
					z-index 150ms linear,
					fill 150ms linear;
				transition: width 150ms linear,
					max-width 150ms linear,
					height 150ms linear,
					max-height 150ms linear,
					color 150ms linear,
					border 150ms linear,
					box-shadow 150ms linear,
					background 150ms linear,
					margin 150ms linear,
					padding 150ms linear,
					transform 150ms linear,
					opacity 150ms linear,
					left 150ms linear,
					top 150ms linear,
					bottom 150ms linear,
					right 150ms linear,
					z-index 150ms linear,
					fill 150ms linear;
			}
		</style>
	`
    )
  }
  window.addEventListener('load', styleUpdate)
}

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
