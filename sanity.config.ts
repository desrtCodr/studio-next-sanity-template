import { defineConfig } from 'sanity';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';
import { structureTool } from 'sanity/structure';
import { structure } from './structure';

export default defineConfig({
    name: 'default',
    title: 'next-sanity-template',

    projectId: 'g6mhf8un',
    dataset: 'production',

    plugins: [structureTool({ structure: structure }), visionTool()],

    schema: {
        types: schemaTypes,
    },
});
