

export const queryData = (user_id) => {
  const variables = { user_id: user_id }
  const query = ` query getAllData($user_id : Int!) {
  logged_in: user {
    login
    email
    campus
    auditRatio

  }
  current_level: event_user (distinct_on: id where: {userId: { _eq: $user_id }, eventId:{_eq:41}}){
    level 
  }
   cohort : event_user (distinct_on: userId  where: {userId: { _eq: $user_id }}){
     cohorts {
      labelName
    }
  
  }
  
  #this is a comment to separate queries 
  # bubble chart aykun nadi f l case zawja 

  groups_per_project : group(where: {members: {userId: {_eq: $user_id}}, eventId:{_eq:41}, status: {_eq: finished}}){
    name_project :object {
      name
    }
    members_aggregate(distinct_on : id) {
      team: nodes {
        userLogin
      }
    total_members :aggregate {
      count 
    }
    
  }
  }
  
  #this is a comment to separate things 3awd
  
  skills : transaction_aggregate (distinct_on: type where : {type: {_like: "skill%"}} order_by :{type :asc, amount:desc}) {
      nodes {
        type
        amount 
        
      }
    }
} 
`
  return [query, variables]
}
