import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE as string,
  environment: process.env.CONTENTFUL_ENVIRONMENT, // defaults to 'master' if not set
  accessToken: process.env.CONTENFUL_ACCESS_TOKEN as string,
});

/*
const contentful = require('contentful')

const client = contentful.createClient({
  space: 'hcgvbczhhznz',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'q6QxekBf9RSHwUuOel60KVfihPBmzrwPOWIUsY0T2go'
})

client.getEntry('2UwY6XSiQbwskkrnmDGHXJ')
  .then((entry) => console.log(entry))
  .catch(console.error)
*/
