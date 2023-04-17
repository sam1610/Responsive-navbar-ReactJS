type Quest @model @auth(
 rules:[
   { allow:owner, operations:[create,read, update]},
   { allow:groups , groups:["Admin"] , operations:[create,read, delete, update]}
 ]
) {
 id: ID!
 email: String!
 lang: String!
 textOrg: String!
 audioUrlOrg: String
 image: String
 textSt: String
 audioUrlSt: String
 mark: Float
 answer:  Boolean
 schedOn: AWSDate
}