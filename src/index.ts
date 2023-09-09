import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import createApolloGraphqlServer from "./graphql/index";

async function init() {
	const app = express();
	const PORT = Number(process.env.PORT) || 8000;

	app.use(express.json());

	app.use("/graphql", expressMiddleware(await createApolloGraphqlServer()));

	app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
}

init();
