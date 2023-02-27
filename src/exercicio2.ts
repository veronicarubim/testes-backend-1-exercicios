export function formatDate(dateString: string): string {
  
    const [year, month, day] = dateString.split("/")
    const date = new Date(`${month}/${day}/${year}`)
    const formattedDate = date.toLocaleDateString("pt-BR")

    return formattedDate;
}