 import { request, gql } from "graphql-request";

const MASTER_URL_KEY = process.env.NEXT_PUBLIC_MASTER_URL_KEY;

if (!MASTER_URL_KEY) {
  console.error("Environment variable NEXT_PUBLIC_MASTER_URL_KEY is not set.");
  process.exit(1);
}

const MASTER_URL = `https://ap-south-1.cdn.hygraph.com/content/${MASTER_URL_KEY}/master`;

const getCategory = async () => {
  const query = await gql`
    query Category {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
  `;

  try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

const getAllBusinessList = async () => {
  const query =await gql`
    query businessList {
      businessLists {
        about
        address
        category {
          name
        }
        contactPerson
        email
        images {
          url
        }
        id
        name
      }
    }
  `;

  try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error("Error fetching business lists:", error.response ? error.response.errors : error);
    throw error;
  }
};

export default {
  getCategory,
  getAllBusinessList
};
