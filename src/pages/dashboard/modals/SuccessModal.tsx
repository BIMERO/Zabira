import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import { IoClose } from "react-icons/io5";

interface SuccessModalProps {
  title: string;
  description: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ title, description }) => {
  return (
    <DialogContent
      showCloseButton={false}
      className="w-full max-w-110 border-none bg-none"
    >
      <DialogClose>
        <span className="flex justify-end w-full">
          <IoClose className="bg-white rounded-full p-1" size={24} />
        </span>
      </DialogClose>

      <div className="bg-white rounded-3xl w-full p-6 flex flex-col items-center justify-center text-center">
        <img src="/successs.png" alt="success" width={100} height={100} />
        <DialogHeader className="mb-4 text-center flex flex-col items-center justify-center">
          <DialogTitle className="text-2xl font-bold mb-2">{title}</DialogTitle>
          <DialogDescription className="text-[#1A1A1AB2] text-base font-normal">
            {description}
          </DialogDescription>
        </DialogHeader>
        <DialogClose className="w-full">
          <button className=" bg-[#1A1A1A] text-white gap-2 font-medium py-3 w-full rounded-md">
            <span>Verify</span>
          </button>
        </DialogClose>
      </div>
    </DialogContent>
  );
};

export default SuccessModal;
