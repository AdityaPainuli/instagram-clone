import { useRecoilState } from "recoil";
import { modelState } from "../atoms/modelAtom";

const Modal = () => {
  const [open, setOpen] = useRecoilState(modelState);
  return <div>{open && <p>The modal is open</p>}</div>;
};

export default Modal;
