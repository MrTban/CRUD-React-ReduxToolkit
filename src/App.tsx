import { Toaster } from "sonner";
import "./App.css";
import { CreateUser } from "./components/CreateUser";
import { ListingUsers } from "./components/ListingUsers";

function App() {
	return (
		<div className="flex flex-col gap-4">
			<ListingUsers />
			<CreateUser />
			<Toaster richColors />
		</div>
	);
}

export default App;
