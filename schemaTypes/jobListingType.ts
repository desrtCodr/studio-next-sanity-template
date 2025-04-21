import { defineField, defineType } from 'sanity';

export const jobListingType = defineType({
    name: 'jobListing',
    title: 'Job Listing',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: { source: 'title' },
        }),
        defineField({
            name: 'description',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'location',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'salary',
            type: 'number',
        }),
        defineField({
            name: 'jobTags',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'tag' } }],
        }),
    ],
});
