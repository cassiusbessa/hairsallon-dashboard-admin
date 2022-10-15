// import axios from 'axios';
// import logout from './logout';

// const home = process.env.REACT_APP_DASH_API;

// const getToken = async () => {
//   const refreshToken = localStorage.getItem('tokenRefr');
//   const idToken = localStorage.getItem('tokenId');
//   const config = {
//     headers: {
//       Authorization: `Bearer ${idToken}`,
//     },
//   };

//   try {
//     const {
//       data: { data },
//     } = await axios.post(
//       `${home}v2/auth/dashboard/token`,
//       {
//         refreshToken,
//       },
//       config,
//     );

//     localStorage.setItem('tokenId', data.IdToken);
//     localStorage.setItem('tokenExpIn', parseInt(Date.now() / 1000 + data.ExpiresIn - 1800, 10));
//     return data.IdToken;
//   } catch (error) {
//     logout();
//   }
// };

// export default getToken;
