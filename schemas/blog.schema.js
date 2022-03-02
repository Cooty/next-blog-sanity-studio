export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'subtitle',
            type: 'string',
            title: 'Subtitle',
        },
        {
            name: 'coverImage',
            type: 'image',
            title: 'Cover Image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'date',
            type: 'datetime',
            title: 'Date',
            validation: Rule => Rule.required(),
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{type: 'author'}],
            validation: Rule => Rule.required(),
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            validation: Rule => Rule.required(),
        }
    ],
}
