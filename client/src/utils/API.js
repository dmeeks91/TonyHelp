import axios from "axios";

export default {
  //Get all households
  getHouseholds: function(){
    return axios.get("/api/households")
},
    //Get a household with the given id
    getHousehold: function(id){
        return axios.get("/api/households/" + id)
    },
    //Deletes the household with the given id
    deleteHousehold: function(id){
        return axios.delete("/api/households/" + id)
    },
    createHousehold: function(householdData){
        return axios.post("/api/households", householdData)
    },
    updateHousehold: function(id, memberData){
        return axios.put("/api/households/" + id, memberData)
    },
    updateMember: function(id, memberId){
        return axios.put("/api/households/"+ id, memberId)
    },
    getMembers: function(){
        return axios.get("/api/users")
    },
    getMember: function(id){
        return axios.get("/api/users/" + id)
    },
    createMember: function(userId){
        return axios.post('/api/users', userId)
    },
    deleteMember: function(userId){
        return axios.delete("/api/users/" + userId)
    },

  // Get a chore with the given household_id
  getChores: function (household_id) {
    // console.log(household_id);
    return axios.get("/api/chores");

    // return axios.get("/api/chores/" + household_id);
  },
  //   //Deletes the chore with the given household_id
  deleteChore: function (hID, cID) {
    return axios.delete(`/api/households/${hID}/chores/${cID}`);
  },

  createChore: function (id, choreData) {
    return axios.post(`/api/households/${id}/chores`, choreData);
  },

  updateChore: function (id, choreData) {
    return axios.patch("/api/chores/" + id, choreData);
  },


  getTransactions:  async (id) => {
      const res = await axios.get(`/api/households/${id}`);
      return res.data;
  },

  createTransaction: function(id, data){
      return axios.post(`/api/households/${id}/transaction`, data)
  },

  deleteTransaction: function(id, {name, _id}){
    console.log(`Delete ${name} (${_id})`)
      return axios.delete(`/api/households/${id}/transaction/${_id}`)
  },

//newcode 
login: function (userData) {
    return axios.post("api/users/login", userData);
},
signup: function (userData) {
    return axios.post("api/users/signup", userData);
},
isAuth: function (_id) {
    return axios.get("api/users/" + _id);
},
logout: function () {
    return axios.get("api/users/logout");
}

}
