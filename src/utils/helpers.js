export const getAvailableGenres = library => {
    const availableGenres = []
    library.forEach(book => {
        if (!availableGenres.includes(book.category)) {
            availableGenres.push(book.category)
        }
    })
    return availableGenres
}

export const getAllAuthors = books => {
    const allAuthors = []

    books.forEach(book => {
        if (!allAuthors.includes(`${book.surname}, ${book.name}`)) {
            allAuthors.push(`${book.surname}, ${book.name}`)
        }
    })
    const sortedAuthors = [...allAuthors].sort((a, b) => a > b ? 1 : -1)

    return sortedAuthors
}