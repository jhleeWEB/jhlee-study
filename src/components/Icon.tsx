import React from 'react';
import { styled } from 'styled-components';

type ImgProps = {
	$width: string;
	$height: string;
};

const Wrapper = styled.img<ImgProps>`
	border-radius: 0.5rem;
	width: ${({ $width }) => $width};
	height: ${({ $height }) => $height};
`;

type Props = {
	src: string;
	size?: number;
};

const Icon = ({ src, size = 3 }: Props) => {
	return <Wrapper src={src} $width={`${size}rem`} $height={`${size}rem`} />;
};

export default Icon;
