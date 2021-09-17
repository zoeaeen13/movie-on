export default function removeCards(className) {
  const modals = document.querySelectorAll(className)
  if (modals) modals.forEach(modal => {
    modal.classList.add('hidden')
    setTimeout(() => modal.remove(), 100)
  })
}