import type { CollectionConfig } from 'payload'

export const Category: CollectionConfig = {
    slug: 'categories',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
    ],
}