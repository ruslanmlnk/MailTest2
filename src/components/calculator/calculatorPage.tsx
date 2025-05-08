import TrustedPartner from '@/components/guides/trustedPartner';
import RequestForm from '@/components/calculator/requestForm';
import { trustedPartner } from '@/store/calculator/calculatorPageStore';

const CalculatorPage = () => {
	return (
		<div>
			<TrustedPartner store={trustedPartner} />
			<RequestForm />
		</div>
	);
};

export default CalculatorPage;
