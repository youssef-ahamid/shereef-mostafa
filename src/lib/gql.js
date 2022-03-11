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