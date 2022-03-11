import { GraphQLClient, gql } from 'graphql-request'

export const graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL);

export const sendMessage = async message => {
    const mutation = gql`
    mutation {
        createMessage(data: { name: "${message.name}", email: "${message.email}", message: "${message.message}", phone: "${message.phone || ""}", company: "${message.company || ""}" }) {
          id
          name
        }
      }
  `
  const data = await graphcms.request(mutation, message)
  return data
}

export async function getBios() {
    const query = gql`
      {
        bioSteps {
            image {
              url
            }
            text {
              text
            }
        }
      }
  `
  const { bioSteps } = await graphcms.request(query)
  return bioSteps
}

export async function getProjects(type) {
    const query = gql`
      {
        projects(where: {type: ${type}}) {
          title
          videoUrl
          thumbnail {
            url(
              transformation: {image: {resize: {fit: crop}}, document: {output: {format: png}}}
            )
          }
          clientLogo {
            url(transformation: {document: {output: {format: png}}})
          }
        }
      }
  `
  const { projects } = await graphcms.request(query)
  return projects
}
