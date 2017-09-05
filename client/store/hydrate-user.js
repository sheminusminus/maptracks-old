const hydrateUser = fetching => ({
  fetching,
  name: null,
  email: null,
  verified: null,
  uid: null,
  photoUrl: null,
  anonymous: null,
});

export default hydrateUser;
