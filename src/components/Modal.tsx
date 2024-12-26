import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

interface ModalProps {
  name: string;
  job: string;
  description: string;
  img: string;
}
export default function Modal({ name, job, description, img }: ModalProps) {
  return (
    <div className="component-modal">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <div className="modal">
            <img alt={name} src={img} />
            <div className="modal-text">
              <p>{name}</p>
              <p>{job}</p>
              <p>{description}</p>
            </div>
          </div>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="DialogContent">
            <Dialog.Close asChild>
              <button type="button" className="IconButton" aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
            <Dialog.Title className="DialogTitle">{name}</Dialog.Title>
            <Dialog.Description className="DialogDescription">
              {description}
            </Dialog.Description>
            <img src={img} alt="" className="modal-image" />
            <div className="Fieldset">
              <span className="Label">Utilisateur :</span>
              <p className="UserInfo">{job}</p>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
