const url = "https://assets.breatheco.de/apis/fake/contact/";
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			fetchData: () => {
				fetch(`${url}agenda/luc_agenda`)
					.then(res => {
						if (!res.ok) throw new Error(res.statusText);
						return res.json();
					})
					.then(data => setStore({ contacts: data }))
					.catch(err => console.error(err));
			}
		}
	};
};

export default getState;
