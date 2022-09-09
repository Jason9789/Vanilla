window.onload = () => {
  const label = document.querySelector('.label')
  const options = document.querySelectorAll('.option-item')

  console.log(label)
  console.log(options)

  // 클릭한 옵션의 text를 label에 넣기
  const handleSelect = (item) => {
    label.parentElement.classList.remove('active')
    label.innerHTML = item.textContent
  }

  // 옵션 클릭시 클릭한 옵션 넘김
  options.forEach((option) => {
    option.addEventListener('click', () => handleSelect(option))
  })

  // 라벨 클릭시 옵션 목록이 열림/닫힘
  label.addEventListener('click', () => {
    if (label.parentNode.classList.contains('active')) {
      label.parentNode.classList.remove('active')
    } else {
      label.parentNode.classList.add('active')
    }
  })
}
