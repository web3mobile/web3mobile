export const formatAddress = (
  address: string | undefined | null,
  startLength = 4,
  endLength = 6
): string => {
  // Retourne une chaîne vide si l'adresse est undefined, null ou vide
  if (!address) return ''

  // Vérifie si l'adresse correspond au format Ethereum (0x suivi de 40 caractères hexadécimaux)
  const isValidAddress = /^0x[a-fA-F0-9]{40}$/.test(address)
  if (!isValidAddress) return ''

  // Si l'adresse est trop courte pour être tronquée
  if (address.length <= startLength + endLength) return address

  const start = address.slice(0, startLength)
  const end = address.slice(-endLength)

  return `${start}...${end}`
}
