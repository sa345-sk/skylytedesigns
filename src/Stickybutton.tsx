interface IStickybuttonProps {
    text: string;
    openSidebar(): void;
}

const Stickybutton = ({text, openSidebar}: IStickybuttonProps) => {
  return (
    <button className="openSidebar" onClick={openSidebar} >
        {text}
    </button>
  )
};

export default Stickybutton;
