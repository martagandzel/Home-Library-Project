const URL = 'http://localhost:8000/library'

export const showLibrary = () => {
    return fetch(URL)
        .then(res => res.json())
}

export const deleteBook = id => {
    fetch(`${URL}/${id}`, {
        method: 'DELETE'
    })
}

export const changeFinishedStatus = (id, chosenBook) => {
    fetch(`${URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(chosenBook)
    })
}

export const addNewBook = newBook => {
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBook)
    })
}

export const openBooksPage = id => {
    window.open(`http://localhost:3000/book/${id}`, '_blank', 'noopener,noreferrer')
}

export const getBookById = id => {
    return fetch(`${URL}/${id}`)
        .then(res => res.json())
}