export function formatBlogDate(inputDate) {
    const date = new Date(inputDate);

    const options = {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    };

    return new Intl.DateTimeFormat('fr-FR', options).format(date);
}
