const logout = () => {
  localStorage.clear();
  window.open('./', '_self');
};

export default logout;
