const {gql} = require("apollo-server-express");

const tpyeDefs = gql`

    type Query {
        me: User
    }

    input BookInput {
        authors: [String]
        description: String
        title: String
        bookId: String
        image: String
        link: String
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: BookInput): User
        removeBook(bookId: String!): User
    }

    type Book {
        description: String
        bookId: String
        image: String
        link: String
        title: String
        authors: [String]
    }

    type User {
        _id: ID
        username: String
        savedBooks: [Book]
        email: String
        bookCount: Int
    }

    type Auth {
        token: ID!
        user: User
    }

    





`;

module.exports = tpyeDefs;