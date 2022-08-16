import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'ef1uf8ac',
    dataset:'production',
    apiVersion: '2022-05-23',
    useCdn: true,
    token: process.env.__NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);