export const movieSchema = {
    type: 'object',
    properties: {
        title: {
            type: 'string',
            required: true
        },
        poster: {
            poster: 'string',
            required: true
        },
        description: {
            type: 'string',
            required: true
        }
    }
}
//l'ordre de déclaration des properties n'est pas important