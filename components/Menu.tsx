import { useState, useEffect, useRef, ReactNode } from "react";
import ReactDOM from "react-dom";

type MenuProps = {
  onClose: any
}

const Menu = (props: MenuProps) => {

  const { onClose } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    const handleBackdrop = (event: any) => {
      // https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
      // The node also contains itself, thus target on itself doesn't pass the condition.
      if (!containerRef.current?.contains(event.target)) {
        document.body.classList.remove("prevent-scrolling");
        onClose();
      }
    }

    document.addEventListener("mousedown", handleBackdrop);
    document.body.classList.add("prevent-scrolling");

    return () => {
      document.removeEventListener("mousedown", handleBackdrop);
    }
  }, [containerRef, onClose]);

  if (isBrowser) {
    const portalWrapper = document.getElementById("modal-root");
    return portalWrapper && ReactDOM.createPortal(
      <div className="absolute z-10 top-0 left-0 bg-black/50 w-full h-full">
        <div className="flex justify-center w-full h-full">
          <div ref={containerRef} className="flex flex-wrap m-auto w-80 h-80 bg-white border border-solid border-black-255">
            <button className="w-full border-b border-solid">Add to favorites</button>
            <button className="w-full border-b border-solid">Hide Post</button>
            <button className="w-full border-b border-solid">Copy Link</button>
            <button className="w-full border-b border-solid">Embed</button>
            <button className="w-full text-red-500 border-b border-solid">Unfollow</button>
            <button className="w-full text-red-500" onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>, 
    portalWrapper);
  }
}

export default Menu;