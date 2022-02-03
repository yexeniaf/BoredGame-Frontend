
// export const singIn = async (credentials) => {
//     try {
//         const res = await api.post("/singup", credentials)
//         localStorage.setItem('token', res.data.token)
//         const user = (res.data.token)
//         return res.data
//     } catch (error) {
//         throw error
//     }
// }

// const BaseURL = “https://radiant-sierra-20133.herokuapp.com/api/”;
// export const getPosts = (token) =>
//   axios({
//     url: ${BaseURL}users,
//     headers: {Authorization: ${token}},
//   })
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });


// export const loginUser = (props) =>
//   axios({
//     method: “post”,
//     url: ${BaseURL}login,
//     data: props,
//   })
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// export const getUserPosts = (props) =>
//   // console.log(props)
//   axios({
//     url: ${BaseURL}user${props},
//   })
//     .then((response) => {
//       // console.log(response.data)
//       return response.data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// export const createPost = (id, blog, token) =>
//   axios({
//     method: “post”,
//     url: ${BaseURL}post/${id},
//     headers: {Authorization: ${token}},
//     data: blog,
//   })
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// export const apiPut = (userid,postid,token,post) =>  axios({
//   method: “put”,
//   url: ${BaseURL}user/update/${userid}/${postid},
//   headers: { Authorization: ${token} },
//   data:post,
// })
//   .then((response) => {
//     return response.data;
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// export const apiDelete = (id,token,postid) =>
//   axios({
//     method: “delete”,
//     url: ${BaseURL}delete/${id}/${postid},
//     headers: { Authorization: ${token} }
//   })
//   .then((response) => {
//     return response.data;
//   })
//   .catch((error) => {
//     console.log(error);
//   });