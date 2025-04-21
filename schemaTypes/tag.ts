import { defineType } from 'sanity';

export const tag = defineType({
    name: 'tag',
    title: 'Tag',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
    ],
});
