import Sidebar from './Sidebar';

export default function Pages(props) {
  const { children, className } = props;
  return (
    <div className="flex w-screen h-screen" >
      <Sidebar />
      <div className={`${className && className} max-w-screen`}>
        {children}
      </div>
    </div>
  )
}
