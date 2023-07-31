import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useState } from "react";
import { useUserActions } from "../hooks/useUserActions";

export const CreateUser = () => {
	const { addUser } = useUserActions();
	const [result, setResult] = useState<"ok" | "ko" | null>(null);

	const handleSubmit = (event: React.FormEvent<HTMLFormEvent>) => {
		event.preventDefault();

		setResult(null);

		const form = event.target;
		const formData = new FormData(form);

		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("github") as string;

		if (!name || !email || !github) {
			return setResult("ko");
		}

		addUser({ name, email, github });
		setResult("ok");
		form.reset();
	};

	return (
		<Card>
			<Title className="py-4">Create New User</Title>

			<form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-3">
				<TextInput placeholder="Name" name="name" />
				<TextInput placeholder="Email" name="email" />
				<TextInput placeholder="Github User" name="github" />

				<div className="">
					<Button type="submit">Create</Button>
					<span className="lg:absolute lg:top-12 lg:right-9 ml-3 lg:ml-0">
						{result === "ok" && <Badge color="green">Save</Badge>}
						{result === "ko" && (
							<Badge onClick={() => alert("Complete Fileds")} color="red">
								Error
							</Badge>
						)}
					</span>
				</div>
			</form>
		</Card>
	);
};
