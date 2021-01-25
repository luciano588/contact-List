import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false
	});
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.map((contact, index) => {
							return (
								<ContactCard
									key={index}
									name={contact.full_name}
									address={contact.address}
									email={contact.email}
									phone={contact.phone}
									onDelete={() => setState({ showModal: true })}
								/>
								// <Card
								// 	img={"https://via.placeholder.com/300"}
								// 	key={index}
								// 	title={item.name}
								// 	btnUrl={`/${item.name}/${index}`}
								// 	// btnUrl={`/${type}/${index}`}
								// 	btnTitle="View more"
								// />
							);
						})}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
