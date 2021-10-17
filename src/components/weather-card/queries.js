import { gql } from "@apollo/client";

export const CITY_QUERY = gql`
  query getCityById($id: [String!]) {
    getCityById(id: $id) {
      id
      name
      country
      weather {
        summary {
          description
          icon
        }
        temperature {
          actual
        }
        wind {
          speed
        }
        clouds {
          humidity
        }
      }
    }
  }
`;
