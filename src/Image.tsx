import { useMemo, useState } from "react";
import { thumbHashToDataURL } from "thumbhash";
import styles from "./Image.module.css";

interface ImageProps {
	src: string;
	hash?: string;
	width?: number;
	height?: number;
}

const useThumbhashSrc = (hash?: string) => {
	return useMemo(() => {
		if (!hash) return null;

		try {
			const bytes = hash.split(" ").map(v => parseInt(v, 16));
			return thumbHashToDataURL(bytes);
		} catch (error) {
			console.error(error);
			return null;
		}
	}, [hash]);
};

export const Image = ({ src, hash, width, height }: ImageProps) => {
	const [isLoaded, setIsLoaded] = useState(false);

	const thumbhashSrc = useThumbhashSrc(hash);

	const shouldShowThumbnail = !isLoaded && thumbhashSrc && width && height;

	return (
		<div className={styles.container}>
			{shouldShowThumbnail && (
				<img
					className={styles.image}
					src={thumbhashSrc}
					width={width}
					height={height}
					aria-hidden
				/>
			)}
			<img
				className={styles.image}
				src={src}
				width={width}
				height={height}
				onLoad={() => setIsLoaded(true)}
			/>
		</div>
	);
};
