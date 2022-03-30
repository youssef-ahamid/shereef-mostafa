import { GraphQLClient, gql } from 'graphql-request'

export const graphcms = new GraphQLClient(
  import.meta.env.VITE_GRAPHCMS_URL
)

export async function getBios() {
  const query = gql`
    {
      bios {
        image {
          url(
            transformation: { document: { output: { format: png } } }
          )
        }
        body
        title
        main
      }
    }
  `
  const { bios } = await graphcms.request(query)
  return bios
}

export async function getProjects(limit = 15) {
  const query = gql`
    {
      projects(first: ${limit}) {
        thumbnail {
          url(
            transformation: { document: { output: { format: jpg } } }
          )
        }
        text
        title
        videoUrl
        clientLogos {
          url(
            transformation: { document: { output: { format: png } } }
          )
        }
      }
    }
  `
  const { projects } = await graphcms.request(query)
  return projects
}

export async function getContact() {
  const query = gql`
    {
      contacts {
        anghami
        copyright
        siteEmail
        facebook
        instagram
        linkedin
        location
        siteOwner
        siteName
        soundcloud
        spotify
        thankYou
      }
    }
  `
  const { contacts } = await graphcms.request(query)
  return contacts[0]
}
