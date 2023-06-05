import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<Props> = ({ children, ...rest }) => {
	return <button {...rest}>{children}</button>;
};
