import NextImage from 'next/image';

const Image = ({ src, alt, className, height, width }) => {
	return (
		<div className={`relative ${className}`}>
			<NextImage
				src={src}
				alt={alt}
				width={width}
				height={height}
				className='rounded-lg'
				style={{
					objectFit: 'contain',
				}}
			/>
		</div>
	);
};

export default Image;
