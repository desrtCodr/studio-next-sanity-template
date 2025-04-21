import { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
    S.list()
        .title('Content')
        .items([
            S.listItem().title('Menu Items').child(S.documentList().title('Menu Items').filter('_type == "menuItem"')),
            S.divider(),
            S.listItem().title('Posts').child(S.documentList().title('Posts').filter('_type == "post"')),
            S.listItem()
                .title('Job Listings')
                .child(S.documentList().title('Job Listings').filter('_type == "jobListing"')),
            S.divider(),
            S.listItem().title('Tags').child(S.documentList().title('Tags').filter('_type == "tag"')),
        ]);
