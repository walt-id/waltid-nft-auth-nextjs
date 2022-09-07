import React from 'react';

interface Props {
  children: React.ReactNode;
  onClick: React.EventHandler<any>;
}

export default function Button({ children, onClick }: Props) {
  const classes =
    'py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-400 text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800';
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
