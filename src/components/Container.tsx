interface ContainerProps {
  children: React.ReactNode; 
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto max-w-screen-md px-5">
      {children} 
    </div>
  );
}

export default Container;