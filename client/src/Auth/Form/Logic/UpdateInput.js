export const updateUserInformation = (input, setState, state) => {
 const name = input.target.name;
 const value = input.target.value;

 setState({ ...state, [name]: value });
};
