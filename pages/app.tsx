import React from "react";
import { FileUploadProps, FileUpload } from "../components/FileUploader";

const fileUploadProp: FileUploadProps = {
	accept: "image/*",
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files !== null && event.target?.files?.length > 0) {
			console.log(`Saving ${event.target.value}`);
		}
	},
	onDrop: (event: React.DragEvent<HTMLElement>) => {
		console.log(`Drop ${event.dataTransfer.files[0].name}`);
	},
};

const App = () => {
	const titleContent = "qubr.io - World's first one click NFT generator";
	const fileUploadContainerDescription = "Upload your Image here";

	return (
		<div className="App">
			<div className="AppPageTitle">
				<h1>{titleContent}</h1>
			</div>
			<div className="UploadImageContainer">
				<h2>{fileUploadContainerDescription}</h2>
				<div
					className="FileUploadContainer"
					style={{
						border: "1px dotted black ",
						maxWidth: "100vh",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						margin: "60px",
					}}
				>
					<FileUpload {...fileUploadProp} />
				</div>
			</div>
		</div>
	);
};

export default App;
