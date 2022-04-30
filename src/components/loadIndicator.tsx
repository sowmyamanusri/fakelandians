import { FlapperSpinner } from "react-spinners-kit";

const LoadingIndicator: React.FC = () => <div className='loadSpinner'>
	<FlapperSpinner size={200} />
</div>;

export default LoadingIndicator;