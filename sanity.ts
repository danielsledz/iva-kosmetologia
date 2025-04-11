import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: process.env.projectId, // Możesz znaleźć w swoim panelu Sanity
  dataset: "production", // Domyślny dataset
  useCdn: false, // Używanie CDN dla szybszego dostępu
});
