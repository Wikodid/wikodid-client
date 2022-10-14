import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";

const FbMessenger = ({ children }) => (
	<>
		{children}

		<MessengerCustomerChat
			pageId='Prjr44o47zxlf'
			appId='1128654474421430'
			className='fb-messenger-chat-comp'
		/>
	</>
);

export default FbMessenger;
