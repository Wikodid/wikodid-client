import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";

const FbMessenger = ({ children }) => (
	<>
		{children}

		<MessengerCustomerChat
			pageId='166364938207886'
			appId='1128654474421430'
			className='fb-messenger-chat-comp'
		/>
	</>
);

export default FbMessenger;
