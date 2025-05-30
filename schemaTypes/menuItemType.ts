import { defineField, defineType } from 'sanity';

export const menuItemType = defineType({
    name: 'menuItem',
    title: 'Menu Item',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
            },
        }),
        defineField({
            name: 'description',
            type: 'text',
        }),
    ],
});
