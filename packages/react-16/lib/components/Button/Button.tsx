function Button({ onClick }: { onClick: () => void }): JSX.Element {
  return <button onClick={onClick}> Click Me ok</button>;
}

export { Button };
