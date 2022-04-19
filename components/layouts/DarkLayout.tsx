import { FC } from 'react';

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const DarkLayout: FC<Props> = ({ children }) => {
    return (
        <div className='bg-[rgba(0,0,0,0.3)] p-3 rounded-md'>{children}</div>
    );
};
