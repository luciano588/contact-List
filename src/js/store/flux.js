const url = "https://assets.breatheco.de/apis/fake/contact/";
const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			addContact: (a, b, c, d) => {
				fetch(url, {
					method: "POST",
					body: JSON.stringify({
						full_name: a,
						email: b,
						agenda_slug: "luc_agenda",
						address: d,
						phone: c
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(() => {
						getActions().fetchData();
					})
					.catch(error => {
						//error handling
						console.error(error);
					});
			},
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
