import { Image } from "./Image";
import src from "./assets/image.png";
import src2 from "./assets/image2.jpg";

export default function App() {
	return (
		<>
			<Image
				src={src}
				hash="E7 07 0E 0C 82 79 99 97 8F 76 78 7B 68 63 F2 8B 2A 7B 06"
				width={1253}
				height={732}
			/>
			<Image
				src={src2}
				hash="5A 28 0A 0D 82 58 98 76 8B 87 87 80 78 67 88 77 01 71 2D 67 F8"
				width={1200}
				height={800}
			/>
		</>
	);
}
