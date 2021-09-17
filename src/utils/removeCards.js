export default function removeCards() {
  const modals = document.querySelectorAll('.floating-card-wrapper')
  if (modals) modals.forEach(modal => {
    modal.classList.add('hidden')
    setTimeout(() => modal.remove(), 100)
  })
}