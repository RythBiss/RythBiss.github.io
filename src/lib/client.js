import SanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = SanityClient({
    projectId: 'cdvl07nv',
    dataset: 'production',
    apiVersion: '2023-02-14',
    useCdn: true,
    token: process.env.PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);